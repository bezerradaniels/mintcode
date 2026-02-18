import Button from '../../Button/index.tsx'

export default function Portfolio() {
  const whatsappLink = 'https://wa.me/5561998846590?text=Olá! Vim pelo site e gostaria de saber mais sobre criação de sites.'

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary-dark rounded-full text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Projetos que entregamos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos sites que desenvolvemos para nossos clientes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-video">
              <div className="absolute inset-0 bg-linear-to-br from-primary to-accent opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white font-semibold">Projeto {item}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" onClick={() => window.open(whatsappLink, '_blank')}>
            Ver Mais Projetos
          </Button>
        </div>
      </div>
    </section>
  )
}
