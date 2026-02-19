import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        navigate('/obrigado')
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #020617 0%, #0f172a 40%, #0c4a6e 100%)'
      }}
    >
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #10b981 1px, transparent 1px),
            linear-gradient(to bottom, #10b981 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Gradient orbs */}
      <div 
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />
      <div 
        className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(7, 89, 133, 0.4) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Text */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-semibold tracking-[0.25em] text-primary uppercase">
                Criação de Sites Profissionais
              </span>
            </div>

            <h1 className="text-[38px] sm:text-[46px] lg:text-[54px] font-bold text-white leading-[1.08] mb-6">
              Seu site dos sonhos está a um clique de{' '}
              <span className="text-primary">distância</span>
            </h1>

            <p className="text-[17px] sm:text-[19px] text-white/70 leading-relaxed mb-10 max-w-xl">
              Transformamos suas ideias em sites modernos, rápidos e que geram resultados. 
              Design exclusivo, código limpo e otimização para mecanismos de busca.
            </p>

            {/* Trust badges */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Sites Rápidos</p>
                  <p className="text-white/50 text-xs">Carregamento otimizado</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">100% Responsivo</p>
                  <p className="text-white/50 text-xs">Mobile first design</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">SEO Otimizado</p>
                  <p className="text-white/50 text-xs">Primeira página do Google</p>
                </div>
              </div>
            </div>

            {/* Mobile CTA button — only visible below lg */}
            <div className="lg:hidden flex justify-center mt-8">
              <button
                onClick={() => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-[15px] transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)' }}
              >
                Solicitar Orçamento
                <svg
                  className="w-4 h-4 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

          </div>

          {/* Right Column - Contact Form */}
          <div id="hero-form">
            <div 
              className="relative rounded-[28px] p-8 sm:p-10"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(20px)'
              }}
            >
              {/* Form header */}
              <div className="mb-8">
                <h2 className="text-[22px] sm:text-[26px] font-bold text-white mb-2">
                  Solicite seu orçamento
                </h2>
                <p className="text-white/60 text-[15px]">
                  Preencha o formulário e retornaremos em até 24h.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="hero-name" className="block text-white/80 text-sm font-medium mb-2">
                    Nome completo
                  </label>
                  <input
                    id="hero-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-xl text-white text-[15px] placeholder:text-white/30 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/50"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="hero-email" className="block text-white/80 text-sm font-medium mb-2">
                    E-mail
                  </label>
                  <input
                    id="hero-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-xl text-white text-[15px] placeholder:text-white/30 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/50"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="hero-phone" className="block text-white/80 text-sm font-medium mb-2">
                    WhatsApp / Telefone
                  </label>
                  <input
                    id="hero-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-3 rounded-xl text-white text-[15px] placeholder:text-white/30 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/50"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="hero-message" className="block text-white/80 text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="hero-message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Conte-nos sobre seu projeto..."
                    className="w-full px-4 py-3 rounded-xl text-white text-[15px] placeholder:text-white/30 outline-none transition-all duration-200 resize-none focus:ring-2 focus:ring-primary/50"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 rounded-xl text-white font-semibold text-[16px] transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
                  }}
                >
                  {status === 'sending' ? (
                    <span className="inline-flex items-center gap-2">
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Enviando...
                    </span>
                  ) : status === 'error' ? (
                    'Erro ao enviar. Tente novamente.'
                  ) : (
                    'Enviar Mensagem'
                  )}
                </button>
              </form>

              {/* Privacy note */}
              <p className="text-white/40 text-xs text-center mt-4">
                Seus dados estão seguros. Não compartilhamos suas informações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
