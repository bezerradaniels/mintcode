import LanguageIcon from '@mui/icons-material/Language'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import BoltIcon from '@mui/icons-material/Bolt'
import PaletteIcon from '@mui/icons-material/Palette'
import BuildIcon from '@mui/icons-material/Build'
import Button from '../../Button/index.tsx'
import GradientBorderCard from '../GradientBorderCard/index.tsx'

export default function Services() {
  
  const services = [
    {
      icon: <LanguageIcon />,
      title: 'Sites Institucionais',
      description: 'Sites profissionais que transmitem credibilidade e fortalecem sua marca no mercado digital.'
    },
    {
      icon: <ShoppingCartIcon />,
      title: 'E-commerce',
      description: 'Lojas virtuais completas com gestão de produtos, pagamentos e entregas integrados.'
    },
    {
      icon: <PhoneIphoneIcon />,
      title: 'Landing Pages',
      description: 'Páginas de alta conversão focadas em transformar visitantes em clientes.'
    },
    {
      icon: <BoltIcon />,
      title: 'Sistemas Web',
      description: 'Aplicações web personalizadas para automatizar processos do seu negócio.'
    },
    {
      icon: <PaletteIcon />,
      title: 'UI/UX Design',
      description: 'Design moderno e intuitivo que proporciona a melhor experiência para seus usuários.'
    },
    {
      icon: <BuildIcon />,
      title: 'Manutenção',
      description: 'Suporte contínuo para manter seu site sempre atualizado e funcionando perfeitamente.'
    }
  ]

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Bottom gradient band with vertical fade to white */}
      <div 
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[240px]"
        style={{
          background: 'linear-gradient(to right, #BCF8C4 0%, #B2F5FA 50%, #9FBDFF 100%)',
          maskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
          maskSize: '100% 100%',
          maskRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary-dark rounded-full text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Soluções completas para sua presença digital
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos tudo o que você precisa para ter um site profissional e de alta performance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <GradientBorderCard key={index}>
              <div className="p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-text mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </GradientBorderCard>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-20 px-12 py-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-text mb-6">
            Pronto para transformar sua presença digital?
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e vamos criar o site perfeito para o seu negócio.
          </p>
          <Button
            size="lg"
            className="bg-primary text-white hover:bg-primary-dark cursor-pointer"
            onClick={() => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </section>
  )
}
