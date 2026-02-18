import express from 'express'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { existsSync } from 'fs'

dotenv.config({ path: join(dirname(fileURLToPath(import.meta.url)), '.env') })

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

// Serve static files — from dist/ locally, or current dir on Hostinger
const staticDir = existsSync(join(__dirname, 'dist'))
  ? join(__dirname, 'dist')
  : __dirname

app.use(express.static(staticDir))

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'E-mail inválido' })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
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
  <div class="container">
    <div class="header"><h1>Novo Contato pelo Site</h1></div>
    <div class="content">
      <div class="field"><label>Nome</label><p>${name}</p></div>
      <div class="field"><label>E-mail</label><p>${email}</p></div>
      <div class="field"><label>Telefone / WhatsApp</label><p>${phone}</p></div>
      <div class="field"><label>Mensagem</label><p>${message}</p></div>
    </div>
    <div class="footer">Enviado pelo formulário de contato do site mintcode.com.br</div>
  </div>
</body>
</html>`

  try {
    await transporter.sendMail({
      from: `"Mintcode - Formulário de Contato" <${process.env.SMTP_FROM}>`,
      to: process.env.MAIL_TO,
      replyTo: `"${name}" <${email}>`,
      subject: `Novo contato pelo site - ${name}`,
      html: htmlBody,
      text: `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`,
    })

    return res.status(200).json({ success: true, message: 'E-mail enviado com sucesso' })
  } catch (err) {
    console.error('Erro ao enviar e-mail:', err)
    return res.status(500).json({ error: 'Falha ao enviar e-mail' })
  }
})

// SPA fallback — serve index.html for all other routes
app.get('*', (_req, res) => {
  res.sendFile(join(staticDir, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
