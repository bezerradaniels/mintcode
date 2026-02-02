import Button from '../../Button/index.tsx'

export default function Hero() {
  const whatsappLink = 'https://wa.me/5561998846590?text=Olá! Vim pelo site e gostaria de saber mais sobre criação de sites.'

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-text/70"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Seu site dos sonhos está a um clique de distância
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
          Transformamos suas ideias em sites modernos, rápidos e que geram resultados. 
          Design exclusivo, código limpo e otimização para mecanismos de busca.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => window.open(whatsappLink, '_blank')}>
            Solicitar Orçamento
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white! text-white! hover:bg-white! hover:text-primary-dark!"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Portfolio
          </Button>
        </div>
      </div>
    </section>
  )
}
