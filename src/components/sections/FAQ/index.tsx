import GradientBorderCard from '../GradientBorderCard/index.tsx'

export default function FAQ() {
  const faqs = [
    {
      question: "Quanto tempo demora para criar um site?",
      answer: "O prazo médio é de 2 a 4 semanas para sites institucionais e 4 a 8 semanas para e-commerces, dependendo da complexidade e da agilidade no fornecimento de conteúdo."
    },
    {
      question: "O site será responsivo para celulares?",
      answer: "Sim! Todos os nossos sites são 100% responsivos e otimizados para funcionar perfeitamente em celulares, tablets e desktops."
    },
    {
      question: "Vocês oferecem suporte após a entrega?",
      answer: "Sim, oferecemos suporte técnico por 30 dias após a entrega, além de pacotes de manutenção mensal para manter seu site sempre atualizado e seguro."
    },
    {
      question: "É possível integrar com sistemas existentes?",
      answer: "Sim. Trabalhamos com integrações de APIs, sistemas de pagamento, gateways de frete e outras ferramentas que sua empresa já utiliza."
    },
    {
      question: "Como funciona o processo de desenvolvimento?",
      answer: "1) Briefing e alinhamento 2) Design e protótipo 3) Desenvolvimento 4) Testes 5) Treinamento 6) Lançamento. Mantemos você atualizado em cada etapa."
    },
    {
      question: "O site será otimizado para Google (SEO)?",
      answer: "Sim, implementamos SEO básico em todos os projetos: estrutura semântica, meta tags, velocidade e otimizações técnicas. Serviços avançados de SEO são opcionais."
    }
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary-dark rounded-full text-sm font-medium mb-6">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Tudo que você precisa saber
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nosso processo de desenvolvimento e serviços.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <GradientBorderCard key={index}>
              <div className="p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-text mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </GradientBorderCard>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">
            Ainda tem dúvidas?
          </p>
          <a
            href="#hero-form"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold transition-all duration-300 hover:scale-105"
          >
            Fale com um especialista
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
