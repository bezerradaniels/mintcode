import { useState, useEffect, useRef } from 'react'

// Import real project mockups
import hazakFitImage from '../../../assets/images/mockups/hazak-fit.png'
import ativaTeaImage from '../../../assets/images/mockups/ativa-tea.png'
import casaBebeImage from '../../../assets/images/mockups/casa-bebe.png'
import clinicaSimImage from '../../../assets/images/mockups/clinica-sim.png'
import graficaInovaImage from '../../../assets/images/mockups/grafica-inova-print.png'
import personalJuninhoImage from '../../../assets/images/mockups/personal-juninho.png'
import victorManuelImage from '../../../assets/images/mockups/victor-manuel.png'

const projects = [
  {
    id: 1,
    tag: 'Site Institucional',
    name: 'Hazak Fit',
    imageSrc: hazakFitImage,
    imageAlt: 'Hazak Fit website mockup with notebook and smartphone'
  },
  {
    id: 2,
    tag: 'E-commerce',
    name: 'Ativa Tea',
    imageSrc: ativaTeaImage,
    imageAlt: 'Ativa Tea e-commerce mockup with notebook and smartphone'
  },
  {
    id: 3,
    tag: 'Landing Page',
    name: 'Casa Bebê',
    imageSrc: casaBebeImage,
    imageAlt: 'Casa Bebê landing page mockup with notebook and smartphone'
  },
  {
    id: 4,
    tag: 'Site Institucional',
    name: 'Clínica Sim',
    imageSrc: clinicaSimImage,
    imageAlt: 'Clínica Sim website mockup with notebook and smartphone'
  },
  {
    id: 5,
    tag: 'Gráfica',
    name: 'Inova Print',
    imageSrc: graficaInovaImage,
    imageAlt: 'Inova Print gráfica website mockup with notebook and smartphone'
  },
  {
    id: 6,
    tag: 'Personal Trainer',
    name: 'Personal Juninho',
    imageSrc: personalJuninhoImage,
    imageAlt: 'Personal Juninho website mockup with notebook and smartphone'
  },
  {
    id: 7,
    tag: 'Portfólio',
    name: 'Victor Manuel',
    imageSrc: victorManuelImage,
    imageAlt: 'Victor Manuel portfólio website mockup with notebook and smartphone'
  }
]

export default function PortfolioCarouselSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [progress, setProgress] = useState(0)
  
  const AUTOPLAY_DELAY = 10000 // 10 seconds
  const progressRef = useRef<number | null>(null)
  const timerRef = useRef<number | null>(null)

  const clearTimers = () => {
    if (progressRef.current) clearInterval(progressRef.current)
    if (timerRef.current) clearTimeout(timerRef.current)
  }

  const startAutoPlay = () => {
    clearTimers()
    setProgress(0)
    
    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100
        return prev + 1
      })
    }, AUTOPLAY_DELAY / 100)
    
    timerRef.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length)
    }, AUTOPLAY_DELAY)
  }

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    clearTimers()
    setProgress(0)
    setCurrentSlide((prev) => (prev + 1) % projects.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    clearTimers()
    setProgress(0)
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return
    setIsTransitioning(true)
    clearTimers()
    setProgress(0)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }
  
  // Auto-play effect
  useEffect(() => {
    startAutoPlay()
    return () => clearTimers()
  }, [currentSlide])

  const currentProject = projects[currentSlide]

  return (
    <section className="relative overflow-hidden bg-[#0A0A0F]">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
          animation: 'pulse 8s ease-in-out infinite'
        }}
      />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #8B5CF6 1px, transparent 1px),
            linear-gradient(to bottom, #8B5CF6 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Eyebrow with glow */}
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-linear-to-r from-transparent to-violet-500" />
            <p className="text-[11px] font-semibold tracking-[0.25em] text-violet-400 uppercase">
              Portfólio
            </p>
            <div className="h-px w-8 bg-linear-to-r from-violet-500 to-transparent" />
          </div>
          
          {/* Main title with gradient */}
          <h2 
            className="text-[34px] sm:text-[34px] md:text-[36px] font-bold leading-[1.1] mb-4"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #E0E7FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Projetos em destaque
          </h2>
          
          {/* Subtitle */}
          <p className="text-[16px] sm:text-[16px] text-slate-400 max-w-[680px] mx-auto leading-relaxed">
            Conheça alguns dos projetos que desenvolvi para clientes de diversos segmentos.
          </p>
        </div>

        {/* Main Carousel Container */}
        <div className="relative mx-auto max-w-[1200px]">
          {/* Outer glassy container */}
          <div 
            className="relative rounded-[36px] overflow-hidden transition-all duration-500"
            style={{
              background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.7) 0%, rgba(30, 41, 59, 0.5) 100%)',
              border: '1px solid rgba(139, 92, 246, 0.25)',
              boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(139, 92, 246, 0.15), inset 0 2px 4px rgba(255, 255, 255, 0.03), 0 0 80px -20px rgba(139, 92, 246, 0.2)',
              backdropFilter: 'blur(20px)'
            }}
          >
            {/* Inner stage frame */}
            <div className="p-8 sm:p-4">
              <div className="relative rounded-[28px] overflow-hidden">
                {/* Slide image container */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={currentProject.imageSrc}
                    alt={currentProject.imageAlt}
                    className="w-full h-full object-contain"
                    style={{
                      filter: 'drop-shadow(0 8px 32px rgba(0, 0, 0, 0.4))'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="group absolute left-[-24px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center text-white backdrop-blur-md disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(139, 92, 246, 0.1)'
              }}
              aria-label="Previous project"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="group absolute right-[-24px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center text-white backdrop-blur-md disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(139, 92, 246, 0.1)'
              }}
              aria-label="Next project"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>

          {/* Project name below carousel */}
          <div className="text-center mt-4">
            <h3 className="text-white text-[28px] sm:text-[34px] font-bold tracking-tight">
              {currentProject.name}
            </h3>
          </div>

          {/* Progress bar */}
          <div className="mt-4 mx-auto max-w-[200px]">
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)',
                  boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)',
                  transition: 'width 100ms linear'
                }}
              />
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center items-center gap-2.5 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`disabled:cursor-not-allowed ${
                  index === currentSlide
                    ? 'w-10 h-2.5 rounded-full'
                    : 'w-2.5 h-2.5 rounded-full'
                }`}
                style={{
                  background: index === currentSlide
                    ? 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)'
                    : 'rgba(139, 92, 246, 0.25)',
                  boxShadow: index === currentSlide
                    ? '0 4px 12px rgba(139, 92, 246, 0.5), 0 0 20px rgba(139, 92, 246, 0.3)'
                    : 'none'
                }}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
