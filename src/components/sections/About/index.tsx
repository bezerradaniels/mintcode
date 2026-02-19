import aboutImg from '../../../assets/images/team/mintcode-sobre-nos.webp'

export default function About() {
  const scrollToForm = () => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="sobre" className="relative overflow-hidden min-h-[600px] flex items-center">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={aboutImg}
          alt="Equipe Mintcode"
          className="w-full h-full object-cover object-center"
        />
        {/* Mobile: flat dark overlay */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{ background: 'rgba(5,10,25,0.75)' }}
        />
        {/* Desktop: gradient stronger on left */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background: 'linear-gradient(to right, rgba(5,10,25,0.92) 0%, rgba(5,10,25,0.85) 50%, rgba(5,10,25,0.4) 100%)'
          }}
        />
        {/* Aurora tint */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(ellipse 70% 60% at 0% 50%, rgba(16,185,129,0.3) 0%, transparent 60%),
              radial-gradient(ellipse 50% 50% at 100% 30%, rgba(99,102,241,0.2) 0%, transparent 60%)
            `,
            filter: 'blur(40px)'
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-xl">
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
      </div>
    </section>
  )
}
