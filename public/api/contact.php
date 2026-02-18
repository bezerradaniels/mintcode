<?php
require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load environment variables from .env
$env = parse_ini_file(__DIR__ . '/.env');
if (!$env) {
    http_response_code(500);
    echo json_encode(['error' => 'Configuração do servidor inválida']);
    exit;
}

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
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

// Email configuration
$to       = 'daniel.ddsb@gmail.com';
$subject  = "Novo contato pelo site - $name";

// HTML email body
$htmlBody = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #10b981, #047857); padding: 30px; text-align: center; }
        .header h1 { color: #ffffff; margin: 0; font-size: 22px; }
        .content { padding: 30px; }
        .field { margin-bottom: 20px; }
        .field label { display: block; font-size: 12px; font-weight: bold; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; }
        .field p { margin: 0; font-size: 16px; color: #1f2937; padding: 10px; background: #f9fafb; border-radius: 8px; border-left: 3px solid #10b981; }
        .footer { padding: 20px 30px; background: #f9fafb; text-align: center; font-size: 12px; color: #9ca3af; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>Novo Contato pelo Site</h1>
        </div>
        <div class='content'>
            <div class='field'>
                <label>Nome</label>
                <p>$name</p>
            </div>
            <div class='field'>
                <label>E-mail</label>
                <p>$email</p>
            </div>
            <div class='field'>
                <label>Telefone / WhatsApp</label>
                <p>$phone</p>
            </div>
            <div class='field'>
                <label>Mensagem</label>
                <p>$message</p>
            </div>
        </div>
        <div class='footer'>
            Enviado pelo formulário de contato do site mintcode.com.br
        </div>
    </div>
</body>
</html>
";

// SMTP via PHPMailer (Hostinger)
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = $env['SMTP_HOST'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $env['SMTP_USERNAME'];
    $mail->Password   = $env['SMTP_PASSWORD'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = (int) $env['SMTP_PORT'];
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom($env['SMTP_FROM'], $env['SMTP_FROM_NAME']);
    $mail->addAddress($env['MAIL_TO']);
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $htmlBody;
    $mail->AltBody = "Nome: $name\nE-mail: $email\nTelefone: $phone\nMensagem: $message";

    $mail->send();

    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'E-mail enviado com sucesso']);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Falha ao enviar e-mail: ' . $mail->ErrorInfo]);
}
