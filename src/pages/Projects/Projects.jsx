import { useState, useMemo } from 'react'
import { AlertCircle, ArrowRight } from 'lucide-react'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import useGithubRepos from '../../hooks/useGithubRepos'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Button from '../../components/Button/Button'
import { GithubIcon } from '../../components/Icons/BrandIcons'
import Reveal from '../../components/Reveal/Reveal'
import './Projects.css'

function SkeletonCard() {
  return (
    <div className="skeleton-card" aria-hidden="true">
      <div className="skeleton-card__image skeleton-pulse" />
      <div className="skeleton-card__body">
        <div className="skeleton-card__title skeleton-pulse" />
        <div className="skeleton-card__line skeleton-pulse" />
        <div className="skeleton-card__line skeleton-pulse skeleton-card__line--short" />
        <div className="skeleton-card__tags">
          <div className="skeleton-card__tag skeleton-pulse" />
          <div className="skeleton-card__tag skeleton-pulse" />
        </div>
      </div>
    </div>
  )
}

function Projects() {
  useDocumentTitle('Proyectos')
  const { projects, loading, error, githubUrl } = useGithubRepos()
  const [filter, setFilter] = useState('Todos')

  const languages = useMemo(() => {
    const unique = [...new Set(projects.map(p => p.language).filter(Boolean))]
    return ['Todos', ...unique]
  }, [projects])

  const visible = filter === 'Todos' ? projects : projects.filter(p => p.language === filter)

  return (
    <div className="projects">
      <section className="projects__hero section">
        <div className="container">
          <span className="badge">Portafolio</span>
          <h1 className="projects__title">Nuestro trabajo</h1>
          <p className="projects__subtitle">
            Proyectos que hemos diseñado y programado, con su código disponible para que veas cómo trabajamos.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            title="Proyectos recientes"
            subtitle="Código real, disponible públicamente en GitHub"
          />
          {!loading && !error && projects.length >= 6 && languages.length > 2 && (
            <div className="projects__filters" role="group" aria-label="Filtrar por tecnología">
              {languages.map(lang => (
                <button
                  key={lang}
                  type="button"
                  className={`projects__filter ${filter === lang ? 'projects__filter--active' : ''}`}
                  onClick={() => setFilter(lang)}
                  aria-pressed={filter === lang}
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
          {loading && (
            <div className="grid-3" aria-busy="true">
              {Array.from({ length: 6 }, (_, i) => <SkeletonCard key={i} />)}
            </div>
          )}
          {error && (
            <div className="projects__status projects__status--error">
              <AlertCircle size={24} />
              <p>No se pudieron cargar los proyectos en este momento.</p>
              <Button href={githubUrl} variant="outline">
                <GithubIcon size={16} /> Ver en GitHub
              </Button>
            </div>
          )}
          {!loading && !error && (
            <Reveal stagger className="grid-projects">
              {visible.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </Reveal>
          )}
          {!loading && !error && (
            <div className="projects__more">
              <Button href={githubUrl} variant="outline">
                <GithubIcon size={16} /> Ver todo en GitHub
              </Button>
            </div>
          )}
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
