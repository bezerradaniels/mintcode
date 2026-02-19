<?php
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
        <p style='margin:0;font-size:16px;color:#1f2937;padding:10px;background:#f9fafb;border-radius:8px;border-left:3px solid #10b981'>$phone</p>
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
