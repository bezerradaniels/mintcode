<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Método não permitido.']);
    exit;
}

$configPath = dirname(__DIR__, 2) . '/mintcode-config.php';
if (!is_file($configPath)) {
    error_log('Mintcode: arquivo de configuração do Resend não encontrado.');
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'Serviço de e-mail não configurado.']);
    exit;
}

$config = require $configPath;
$apiKey = $config['resend_api_key'] ?? '';
if (!is_string($apiKey) || !str_starts_with($apiKey, 're_')) {
    error_log('Mintcode: RESEND_API_KEY ausente ou inválida.');
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'Serviço de e-mail não configurado.']);
    exit;
}

$rawBody = file_get_contents('php://input');
$input = json_decode($rawBody ?: '', true);
if (!is_array($input)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'Dados inválidos.']);
    exit;
}

function clean_text(mixed $value, int $maxLength): string {
    $text = trim(is_string($value) ? $value : '');
    return mb_substr($text, 0, $maxLength);
}

function html_value(string $value): string {
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

$name = clean_text($input['name'] ?? '', 100);
$phone = clean_text($input['phone'] ?? '', 20);
$email = clean_text($input['email'] ?? '', 160);
$company = clean_text($input['company'] ?? '', 120);
$service = clean_text($input['service'] ?? '', 120);
$city = clean_text($input['city'] ?? '', 120);
$hasSite = clean_text($input['has_site'] ?? '', 20);
$need = clean_text($input['need'] ?? '', 120);
$adsHistory = clean_text($input['ads_history'] ?? '', 80);
$projectBudget = clean_text($input['project_budget'] ?? '', 80);
$mediaBudget = clean_text($input['media_budget'] ?? '', 80);
$message = clean_text($input['message'] ?? '', 2000);
$phoneDigits = preg_replace('/\D+/', '', $phone) ?? '';

if (mb_strlen($name) < 2 || !filter_var($email, FILTER_VALIDATE_EMAIL) || !preg_match('/^[1-9]{2}9\d{7,8}$/', $phoneDigits) || $company === '' || $service === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Revise os dados informados.']);
    exit;
}

session_start();
$now = time();
$lastSubmission = (int) ($_SESSION['mintcode_last_lead'] ?? 0);
if ($lastSubmission > 0 && ($now - $lastSubmission) < 20) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'message' => 'Aguarde alguns segundos antes de enviar novamente.']);
    exit;
}

$html = '<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#122033">'
    . '<h1 style="font-size:24px">Nova solicitação de orçamento</h1>'
    . '<p>Um novo lead concluiu o chat no site da Mintcode.</p>'
    . '<table style="width:100%;border-collapse:collapse">'
    . '<tr><td style="padding:10px;border-bottom:1px solid #ddd"><strong>Nome</strong></td><td style="padding:10px;border-bottom:1px solid #ddd">' . html_value($name) . '</td></tr>'
    . '<tr><td style="padding:10px;border-bottom:1px solid #ddd"><strong>WhatsApp</strong></td><td style="padding:10px;border-bottom:1px solid #ddd">' . html_value($phone) . '</td></tr>'
    . '<tr><td style="padding:10px;border-bottom:1px solid #ddd"><strong>E-mail</strong></td><td style="padding:10px;border-bottom:1px solid #ddd">' . html_value($email) . '</td></tr>'
    . '<tr><td style="padding:10px;border-bottom:1px solid #ddd"><strong>Empresa</strong></td><td style="padding:10px;border-bottom:1px solid #ddd">' . html_value($company) . '</td></tr>'
    . '<tr><td style="padding:10px;border-bottom:1px solid #ddd"><strong>Serviço</strong></td><td style="padding:10px;border-bottom:1px solid #ddd">' . html_value($service) . '</td></tr>'
    . ($city !== '' ? '<tr><td style="padding:10px;border-bottom:1px solid #ddd"><strong>Cidade</strong></td><td style="padding:10px;border-bottom:1px solid #ddd">' . html_value($city) . '</td></tr>' : '')
    . ($hasSite !== '' ? '<tr><td style="padding:10px;border-bottom:1px solid #ddd"><strong>Já possui site?</strong></td><td style="padding:10px;border-bottom:1px solid #ddd">' . html_value($hasSite) . '</td></tr>' : '')
    . ($need !== '' ? '<tr><td style="padding:10px;border-bottom:1px solid #ddd"><strong>O que procura</strong></td><td style="padding:10px;border-bottom:1px solid #ddd">' . html_value($need) . '</td></tr>' : '')
    . ($adsHistory !== '' ? '<tr><td style="padding:10px;border-bottom:1px solid #ddd"><strong>Histórico no Google Ads</strong></td><td style="padding:10px;border-bottom:1px solid #ddd">' . html_value($adsHistory) . '</td></tr>' : '')
    . ($projectBudget !== '' ? '<tr><td style="padding:10px;border-bottom:1px solid #ddd"><strong>Investimento no projeto</strong></td><td style="padding:10px;border-bottom:1px solid #ddd">' . html_value($projectBudget) . '</td></tr>' : '')
    . ($mediaBudget !== '' ? '<tr><td style="padding:10px;border-bottom:1px solid #ddd"><strong>Investimento mensal em mídia</strong></td><td style="padding:10px;border-bottom:1px solid #ddd">' . html_value($mediaBudget) . '</td></tr>' : '')
    . ($message !== '' ? '<tr><td style="padding:10px"><strong>Mensagem</strong></td><td style="padding:10px">' . nl2br(html_value($message)) . '</td></tr>' : '')
    . '</table></div>';

$payload = json_encode([
    'from' => 'Mintcode <contato@mintcode.com.br>',
    'to' => ['daniel.ddsb@gmail.com'],
    'reply_to' => $email,
    'subject' => 'Nova solicitação de orçamento — ' . $name,
    'html' => $html,
], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

if (!function_exists('curl_init')) {
    error_log('Mintcode: extensão PHP cURL não está disponível.');
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'O servidor não possui a extensão cURL habilitada.', 'code' => 'curl_unavailable']);
    exit;
}

$curl = curl_init('https://api.resend.com/emails');
curl_setopt_array($curl, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 12,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json',
        'Idempotency-Key: mintcode-lead-' . hash('sha256', $email . '|' . $phoneDigits . '|' . intdiv($now, 60)),
    ],
    CURLOPT_POSTFIELDS => $payload,
]);

$responseBody = curl_exec($curl);
$curlError = curl_error($curl);
$statusCode = (int) curl_getinfo($curl, CURLINFO_HTTP_CODE);
curl_close($curl);

if ($responseBody === false || $curlError !== '' || $statusCode < 200 || $statusCode >= 300) {
    error_log('Mintcode Resend error (' . $statusCode . '): ' . ($curlError ?: (string) $responseBody));
    $providerResponse = json_decode((string) $responseBody, true);
    $providerMessage = is_array($providerResponse) && isset($providerResponse['message'])
        ? clean_text($providerResponse['message'], 240)
        : '';
    $errorCode = 'resend_error';
    $publicMessage = 'Não foi possível enviar a solicitação agora. Tente novamente.';

    if ($curlError !== '') {
        $errorCode = 'connection_error';
        $publicMessage = 'A hospedagem não conseguiu se conectar ao Resend.';
    } elseif ($statusCode === 401) {
        $errorCode = 'invalid_api_key';
        $publicMessage = 'A chave da API do Resend é inválida ou está sem permissão de envio.';
    } elseif ($statusCode === 403) {
        $errorCode = 'domain_not_verified';
        $publicMessage = 'O domínio mintcode.com.br ainda não está autorizado para envio no Resend.';
    } elseif ($statusCode === 429) {
        $errorCode = 'resend_rate_limit';
        $publicMessage = 'O limite temporário de envios do Resend foi atingido. Tente novamente em instantes.';
    } elseif ($providerMessage !== '') {
        $publicMessage = $providerMessage;
    }

    http_response_code(502);
    echo json_encode(['ok' => false, 'message' => $publicMessage, 'code' => $errorCode]);
    exit;
}

$_SESSION['mintcode_last_lead'] = $now;
$resendResponse = json_decode((string) $responseBody, true);
echo json_encode(['ok' => true, 'id' => $resendResponse['id'] ?? null]);
