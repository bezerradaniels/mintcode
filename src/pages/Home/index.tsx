import Header from '../../components/Header/index.tsx'
import Footer from '../../components/Footer/index.tsx'
import Hero from '../../components/sections/Hero/index.tsx'
import Services from '../../components/sections/Services/index.tsx'
import PortfolioCarouselSection from '../../components/sections/Portfolio/PortfolioCarouselSection.tsx'
import About from '../../components/sections/About/index.tsx'
import CTA from '../../components/sections/CTA/index.tsx'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg-light">
      <Header />
      <Hero />
      <Services />      
      <PortfolioCarouselSection />
      <About />
      <CTA />
      <Footer />
    </div>
  )
}
