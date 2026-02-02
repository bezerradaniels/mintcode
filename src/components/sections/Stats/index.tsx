export default function Stats() {
  const stats = [
    { number: '50+', label: 'Projetos Entregues' },
    { number: '98%', label: 'Clientes Satisfeitos' },
    { number: '5', label: 'Anos de Experiência' },
    { number: '24h', label: 'Suporte Rápido' }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
