export default function CTA() {
  const scrollToForm = () => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative overflow-hidden bg-[#0A0A0F] py-8 sm:py-32">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(circle at 30% 50%, rgba(16, 185, 129, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(7, 89, 133, 0.2) 0%, transparent 50%)',
        }}
      />

      {/* Grid pattern overlay */}
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

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Main CTA Card */}
        <div 
          className="relative rounded-[32px] overflow-hidden p-4 sm:p-16"
          style={{
            backdropFilter: 'blur(20px)'
          }}
        >
          {/* Decorative elements */}
          <div 
            className="absolute top-0 right-0 w-64 h-64 opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)',
              filter: 'blur(40px)'
            }}
          />
          <div 
            className="absolute bottom-0 left-0 w-64 h-64 opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(7, 89, 133, 0.4) 0%, transparent 70%)',
              filter: 'blur(40px)'
            }}
          />

          <div className="relative text-center">
            {/* Heading */}
            <h2 className="text-[28px] sm:text-[42px] md:text-[48px] font-bold leading-[1.1] mb-2 sm:mb-6 text-white">
              Pronto para ter o site que sua empresa merece?
            </h2>

            {/* Description */}
            <p className="text-[15px] sm:text-[19px] text-white/80 max-w-2xl mx-auto leading-relaxed mb-4 sm:mb-10">
              Entre em contato agora e receba um orçamento personalizado. 
              Vamos transformar sua visão em realidade digital.
            </p>

            {/* CTA Button */}
            <button
              onClick={scrollToForm}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary hover:bg-primary-dark text-white font-semibold text-[17px] transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Solicitar Orçamento
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-4 sm:mt-10 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Resposta rápida</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Orçamento gratuito</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Sem compromisso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
