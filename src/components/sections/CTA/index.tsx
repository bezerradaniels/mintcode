export default function CTA() {
  const whatsappLink = 'https://wa.me/5561998846590?text=Olá! Vim pelo site e gostaria de saber mais sobre criação de sites.'

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
              onClick={() => window.open(whatsappLink, '_blank')}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold text-[17px] transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)'
              }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar no WhatsApp
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
