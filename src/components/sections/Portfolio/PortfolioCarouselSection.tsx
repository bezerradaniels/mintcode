// Import real project mockups
import hazakFitImage from '../../../assets/images/mockups/hazak-fit.png'
import casaBebeImage from '../../../assets/images/mockups/casa-bebe.png'
import clinicaSimImage from '../../../assets/images/mockups/clinica-sim.png'
import draAneEliseImage from '../../../assets/images/mockups/dra. ane elise.png'
import personalJuninhoImage from '../../../assets/images/mockups/personal-juninho.png'
import victorManuelImage from '../../../assets/images/mockups/victor-manuel.png'
import { useState } from 'react'

const projects = [
  { id: 1, tag: 'Academia', name: 'Hazak Fit', imageSrc: hazakFitImage, imageAlt: 'Hazak Fit mockup' },
  { id: 2, tag: 'Hub de Babás', name: 'Casa Bebê', imageSrc: casaBebeImage, imageAlt: 'Casa Bebê mockup' },
  { id: 3, tag: 'Centro clínico', name: 'Clínica Sim', imageSrc: clinicaSimImage, imageAlt: 'Clínica Sim mockup' },
  { id: 4, tag: 'Dentista', name: 'Dra. Ane Elise', imageSrc: draAneEliseImage, imageAlt: 'Dra. Ane Elise mockup' },
  { id: 5, tag: 'Personal Trainer', name: 'Personal Juninho', imageSrc: personalJuninhoImage, imageAlt: 'Personal Juninho mockup' },
  { id: 6, tag: 'Engenheiro', name: 'Victor Manuel', imageSrc: victorManuelImage, imageAlt: 'Victor Manuel mockup' },
]

export default function PortfolioCarouselSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const openModal = (project: typeof projects[0]) => setSelectedProject(project)
  const closeModal = () => setSelectedProject(null)

  return (
    <section id="portfolio" className="relative overflow-hidden bg-[#0A0A0F] py-20 sm:py-28">

      {/* Aurora borealis background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 10% 20%, rgba(16, 185, 129, 0.25) 0%, transparent 60%),
              radial-gradient(ellipse 60% 40% at 90% 10%, rgba(6, 182, 212, 0.2) 0%, transparent 55%),
              radial-gradient(ellipse 70% 50% at 50% 80%, rgba(99, 102, 241, 0.15) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 80% 60%, rgba(16, 185, 129, 0.12) 0%, transparent 50%)
            `,
            filter: 'blur(40px)'
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(ellipse 100% 60% at 30% 0%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse 80% 50% at 70% 100%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)
            `,
            filter: 'blur(60px)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8" style={{ background: 'linear-gradient(to right, transparent, #10b981)' }} />
            <p className="text-[11px] font-semibold tracking-[0.25em] text-primary uppercase">Portfólio</p>
            <div className="h-px w-8" style={{ background: 'linear-gradient(to left, transparent, #10b981)' }} />
          </div>
          <h2
            className="text-[34px] sm:text-[40px] font-bold leading-[1.1] mb-4"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #E0E7FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Projetos em destaque
          </h2>
          <p className="text-[16px] text-slate-400 max-w-[600px] mx-auto leading-relaxed">
            Conheça alguns dos projetos que desenvolvemos para clientes de diversos segmentos.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group flex flex-col gap-3">
              <div className="overflow-hidden rounded-2xl cursor-pointer relative" onClick={() => openModal(project)}>
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-lg">Clique para ampliar</span>
                </div>
              </div>
              <div className="text-center">
                <span className="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
                  {project.tag}
                </span>
                <h3 className="text-white text-[18px] font-semibold mt-0.5">{project.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold text-[16px] transition-all duration-300 hover:scale-105"
          >
            Solicitar Orçamento
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

      </div>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={closeModal}
        >
          {/* Aurora blur background */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 backdrop-blur-sm"
              style={{
                background: `
                  radial-gradient(ellipse 80% 50% at 10% 20%, rgba(16, 185, 129, 0.3) 0%, transparent 60%),
                  radial-gradient(ellipse 60% 40% at 90% 10%, rgba(6, 182, 212, 0.25) 0%, transparent 55%),
                  radial-gradient(ellipse 70% 50% at 50% 80%, rgba(99, 102, 241, 0.2) 0%, transparent 60%),
                  radial-gradient(ellipse 50% 40% at 80% 60%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
                  rgba(5, 10, 25, 0.85)
                `,
                filter: 'blur(40px)'
              }}
            />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: `
                  radial-gradient(ellipse 100% 60% at 30% 0%, rgba(16, 185, 129, 0.35) 0%, transparent 50%),
                  radial-gradient(ellipse 80% 50% at 70% 100%, rgba(6, 182, 212, 0.25) 0%, transparent 50%)
                `,
                filter: 'blur(60px)'
              }}
            />
          </div>

          {/* Image container */}
          <div 
            className="relative max-w-4xl max-h-[90vh] cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProject.imageSrc}
              alt={selectedProject.imageAlt}
              className="w-full h-full object-contain rounded-2xl shadow-2xl"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
