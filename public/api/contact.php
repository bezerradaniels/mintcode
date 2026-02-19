<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://mintcode.com.br');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido']);
    exit;
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Dados inválidos']);
    exit;
}

// Sanitize inputs
$name    = htmlspecialchars(strip_tags(trim($input['name'] ?? '')));
$email   = filter_var(trim($input['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone   = htmlspecialchars(strip_tags(trim($input['phone'] ?? '')));
$message = htmlspecialchars(strip_tags(trim($input['message'] ?? '')));

// Validate required fields
if (empty($name) || empty($email) || empty($phone) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Todos os campos são obrigatórios']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'E-mail inválido']);
    exit;
}

// Clean phone number for WhatsApp link (digits only)
$whatsappNumber = preg_replace('/\D/', '', $phone);

// Email configuration
$to      = 'daniel.ddsb@gmail.com';
$subject = "=?UTF-8?B?" . base64_encode("Novo contato pelo site - $name") . "?=";

// HTML email body
$htmlBody = "
<html>
<head><meta charset='UTF-8'></head>
<body style='font-family:Arial,sans-serif;background:#f4f4f4;margin:0;padding:20px'>
  <div style='max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.1)'>
    <div style='background:linear-gradient(135deg,#10b981,#047857);padding:30px;text-align:center'>
      <h1 style='color:#fff;margin:0;font-size:22px'>Novo Contato pelo Site</h1>
    </div>
    <div style='padding:30px'>
      <div style='margin-bottom:20px'>
        <p style='font-size:12px;font-weight:bold;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 6px'>Nome</p>
        <p style='margin:0;font-size:16px;color:#1f2937;padding:10px;background:#f9fafb;border-radius:8px;border-left:3px solid #10b981'>$name</p>
      </div>
      <div style='margin-bottom:20px'>
        <p style='font-size:12px;font-weight:bold;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 6px'>E-mail</p>
        <p style='margin:0;font-size:16px;color:#1f2937;padding:10px;background:#f9fafb;border-radius:8px;border-left:3px solid #10b981'>$email</p>
      </div>
      <div style='margin-bottom:20px'>
        <p style='font-size:12px;font-weight:bold;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 6px'>Telefone / WhatsApp</p>
        <div style='display:flex;align-items:center;gap:10px;flex-wrap:wrap'>
          <p style='margin:0;font-size:16px;color:#1f2937;padding:10px;background:#f9fafb;border-radius:8px;border-left:3px solid #10b981;flex:1'>$phone</p>
          <a href='https://wa.me/55$whatsappNumber' target='_blank' style='display:inline-flex;align-items:center;gap:8px;padding:10px 16px;background:#25D366;color:#fff;text-decoration:none;border-radius:8px;font-size:14px;font-weight:bold;white-space:nowrap'>
            <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='white' viewBox='0 0 24 24'><path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'/></svg>
            Responder no WhatsApp
          </a>
        </div>
      </div>
      <div style='margin-bottom:20px'>
        <p style='font-size:12px;font-weight:bold;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 6px'>Mensagem</p>
        <p style='margin:0;font-size:16px;color:#1f2937;padding:10px;background:#f9fafb;border-radius:8px;border-left:3px solid #10b981'>$message</p>
      </div>
    </div>
    <div style='padding:20px 30px;background:#f9fafb;text-align:center;font-size:12px;color:#9ca3af'>
      Enviado pelo formulário de contato do site mintcode.com.br
    </div>
  </div>
</body>
</html>";

// SMTP configuration (Hostinger)
$smtpHost     = 'smtp.hostinger.com';
$smtpPort     = 587;
$smtpUser     = 'contato@mintcode.com.br';
$smtpPass     = 'Dubox7469@';
$fromEmail    = 'contato@mintcode.com.br';
$fromName     = 'Mintcode Site';
$toEmail      = 'daniel.ddsb@gmail.com';
$emailSubject = "Novo contato pelo site - $name";

// Send via SMTP using PHP streams
function smtpSend($host, $port, $user, $pass, $from, $fromName, $to, $subject, $body, $replyTo) {
    $errno = 0; $errstr = '';
    $socket = fsockopen("tcp://$host", $port, $errno, $errstr, 15);
    if (!$socket) return "Conexão falhou: $errstr ($errno)";

    $read = function() use ($socket) {
        $data = '';
        while ($line = fgets($socket, 515)) {
            $data .= $line;
            if (substr($line, 3, 1) === ' ') break;
        }
        return $data;
    };

    $send = function($cmd) use ($socket) { fwrite($socket, $cmd . "\r\n"); };

    $read(); // 220 greeting
    $send("EHLO mintcode.com.br");
    $ehlo = $read();
    if (strpos($ehlo, 'STARTTLS') !== false) {
        $send("STARTTLS");
        $read();
        stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
        $send("EHLO mintcode.com.br");
        $read();
    }
    $send("AUTH LOGIN");
    $read();
    $send(base64_encode($user));
    $read();
    $send(base64_encode($pass));
    $auth = $read();
    if (strpos($auth, '235') === false) {
        fclose($socket);
        return "Autenticação falhou: $auth";
    }
    $send("MAIL FROM:<$from>");
    $read();
    $send("RCPT TO:<$to>");
    $read();
    $send("DATA");
    $read();

    $headers  = "From: $fromName <$from>\r\n";
    $headers .= "To: <$to>\r\n";
    $headers .= "Reply-To: $replyTo\r\n";
    $headers .= "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $send($headers . "\r\n" . $body . "\r\n.");
    $result = $read();
    $send("QUIT");
    fclose($socket);

    return strpos($result, '250') !== false ? true : "Erro ao enviar: $result";
}

$result = smtpSend(
    $smtpHost, $smtpPort, $smtpUser, $smtpPass,
    $fromEmail, $fromName, $toEmail,
    $emailSubject, $htmlBody,
    "$name <$email>"
);

if ($result === true) {
    echo json_encode(['success' => true, 'message' => 'E-mail enviado com sucesso']);
} else {
    http_response_code(500);
    echo json_encode(['error' => $result]);
}
