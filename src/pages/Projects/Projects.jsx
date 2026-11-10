import { useState, useMemo } from 'react'
import { ArrowRight } from 'lucide-react'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import projects from '../../data/projects'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Button from '../../components/Button/Button'
import Reveal from '../../components/Reveal/Reveal'
import './Projects.css'

function Projects() {
  useDocumentTitle('Proyectos')
  const [filter, setFilter] = useState('Todos')

  // Solo tecnologías que aparecen en 2+ proyectos, de la más usada a la menos
  const tags = useMemo(() => {
    const count = {}
    projects.flatMap(p => p.tags).forEach(t => { count[t] = (count[t] || 0) + 1 })
    const common = Object.keys(count).filter(t => count[t] > 1).sort((a, b) => count[b] - count[a])
    return ['Todos', ...common]
  }, [])
  const visible = filter === 'Todos' ? projects : projects.filter(p => p.tags.includes(filter))

  return (
    <div className="projects">
      <section className="projects__hero section">
        <div className="container">
          <span className="badge">Portafolio</span>
          <h1 className="projects__title">Nuestro trabajo</h1>
          <p className="projects__subtitle">
            Proyectos que hemos diseñado y programado. Mira sus pantallas reales y cómo se ven terminados.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            title="Proyectos recientes"
            subtitle="Así se ven por dentro: haz clic en cualquiera para recorrer sus pantallas"
          />
          {projects.length >= 6 && tags.length > 2 && (
            <div className="projects__filters" role="group" aria-label="Filtrar por tecnología">
              {tags.map(tag => (
                <button
                  key={tag}
                  type="button"
                  className={`projects__filter ${filter === tag ? 'projects__filter--active' : ''}`}
                  onClick={() => setFilter(tag)}
                  aria-pressed={filter === tag}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
          <Reveal stagger className="grid-projects">
            {visible.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </Reveal>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <Reveal className="cta-section__content">
            <h2>¿Quieres un proyecto como estos?</h2>
            <p>Cuéntanos tu idea y te enviamos una propuesta sin compromiso.</p>
            <Button to="/contact" variant="primary" size="large">
              Cotizar proyecto <ArrowRight size={18} />
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

export default Projects
