export default function About() {
  return (
    <section id="sobre" className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
              Sobre a Mintcode
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Especialistas em criar experiências digitais memoráveis
            </h2>
            <p className="text-white/90 mb-6 leading-relaxed">
              Somos uma equipe apaixonada por tecnologia e design. Nosso objetivo é ajudar empresas 
              a conquistarem seu espaço no mundo digital através de sites que realmente funcionam.
            </p>
            <ul className="space-y-4 text-white/95">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-primary text-sm font-bold">✓</span>
                Código limpo e otimizado
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-primary text-sm font-bold">✓</span>
                Design responsivo para todos os dispositivos
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-primary text-sm font-bold">✓</span>
                SEO otimizado para Google
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-primary text-sm font-bold">✓</span>
                Suporte dedicado pós-entrega
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="bg-white/95 rounded-xl p-6 border border-white/20">
                <pre className="text-sm text-primary-dark font-mono">
                  <code>
{`const mintcode = {
  missão: "Criar sites incríveis",
  valores: ["Qualidade", "Inovação"],
  foco: "Resultado para o cliente"
};`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
