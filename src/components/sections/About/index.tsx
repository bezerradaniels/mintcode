export default function About() {
  const scrollToForm = () => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="sobre" className="relative overflow-hidden py-20">

      {/* Aurora boreal background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #0a0a1a 0%, #0d1f2d 40%, #0a1628 100%)'
          }}
        />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              radial-gradient(ellipse 90% 60% at 0% 30%, rgba(16,185,129,0.35) 0%, transparent 55%),
              radial-gradient(ellipse 70% 50% at 100% 20%, rgba(99,102,241,0.3) 0%, transparent 55%),
              radial-gradient(ellipse 80% 60% at 50% 100%, rgba(6,182,212,0.25) 0%, transparent 55%)
            `,
            filter: 'blur(50px)'
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 20% 80%, rgba(139,92,246,0.3) 0%, transparent 50%),
              radial-gradient(ellipse 50% 40% at 80% 60%, rgba(16,185,129,0.2) 0%, transparent 50%)
            `,
            filter: 'blur(70px)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div>
            <span className="inline-block px-4 py-2 bg-white/10 text-white/80 rounded-full text-sm font-medium mb-6 border border-white/10">
              Sobre a Mintcode
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Especialistas em criar experiências digitais memoráveis
            </h2>
            <p className="text-white/75 mb-8 leading-relaxed text-[17px]">
              Somos uma equipe apaixonada por tecnologia e design. Nosso objetivo é ajudar empresas
              a conquistarem seu espaço no mundo digital através de sites que realmente funcionam.
            </p>
            <ul className="space-y-4 text-white/90 mb-10">
              {[
                'Código limpo e otimizado',
                'Design responsivo para todos os dispositivos',
                'SEO otimizado para Google',
                'Suporte dedicado pós-entrega',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                    style={{ background: 'linear-gradient(135deg, #10b981, #06b6d4)', color: '#fff' }}>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold text-[16px] transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Solicitar Orçamento
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          {/* Right — woman with laptop image + floating cards overlapping */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div 
                className="w-full h-auto drop-shadow-2xl rounded-3xl overflow-hidden"
                style={{ 
                  filter: 'drop-shadow(0 20px 60px rgba(16,185,129,0.2))',
                  transform: 'scale(0.9)'
                }}
              >
                <img
                  src="/src/assets/images/team/mintcode-sobre-nos.webp"
                  alt="Equipe Mintcode"
                  className="w-full h-auto object-cover"
                  style={{ transform: 'scale(1.4)' }}
                />
              </div>

              {/* Card 1 — left, upper third */}
              <div
                className="float-a absolute left-0 top-[45%] lg:-translate-x-1/2 flex items-center gap-2 px-3 py-2 lg:px-5 lg:py-4 rounded-2xl whitespace-nowrap"
                style={{
                  background: 'rgba(10,10,30,0.7)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
                }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#10b981,#047857)' }}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-white text-sm font-bold">Sites Rápidos</p>
              </div>

              {/* Card 2 — left, lower third */}
              <div
                className="float-a absolute left-0 top-[65%] lg:-translate-x-1/2 flex items-center gap-2 px-3 py-2 lg:px-5 lg:py-4 rounded-2xl whitespace-nowrap"
                style={{
                  background: 'rgba(10,10,30,0.7)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
                }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#06b6d4,#0891b2)' }}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-white text-sm font-bold">100% Responsivo</p>
              </div>

              {/* Card 3 — right, upper third */}
              <div
                className="float-b absolute right-2 lg:right-0 top-2 lg:top-0 lg:translate-x-1/2 flex items-center gap-2 px-3 py-2 lg:px-5 lg:py-4 rounded-2xl whitespace-nowrap"
                style={{
                  background: 'rgba(10,10,30,0.7)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
                }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <p className="text-white text-sm font-bold">SEO #1 Google</p>
              </div>

              {/* Card 4 — right, lower third */}
              <div
                className="float-b absolute right-4 bottom-4 lg:right-0 lg:bottom-0 lg:translate-x-1/2 flex items-center gap-2 px-3 py-2 lg:px-5 lg:py-4 rounded-2xl whitespace-nowrap"
                style={{
                  background: 'rgba(10,10,30,0.7)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
                }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#f59e0b,#d97706)' }}>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-white text-sm font-bold">5★ Avaliações</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
