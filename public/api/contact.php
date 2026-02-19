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

// Headers for mail()
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: Mintcode <contato@mintcode.com.br>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";

// Send email using native PHP mail()
if (mail($to, $subject, $htmlBody, $headers)) {
    echo json_encode(['success' => true, 'message' => 'E-mail enviado com sucesso']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Falha ao enviar e-mail']);
}
