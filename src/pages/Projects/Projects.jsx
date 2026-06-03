import { useState, useEffect, useCallback } from 'react'
import { Loader2, AlertCircle } from 'lucide-react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
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
  const [projects, setProjects] = useState([])
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Trejo14/repos')

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`)
        }

        const data = await response.json()

        const mapped = data.map(repo => ({
          id: repo.id,
          title: repo.name,
          description: repo.description || 'Sin descripción disponible.',
          tags: [repo.language || 'N/A'],
          link: repo.html_url,
          stars: repo.stargazers_count
        }))

        setProjects(mapped)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  const toggleFavorite = useCallback((id) => {
    setFavorites(prev =>
      prev.includes(id)
        ? prev.filter(i => i !== id)
        : [...prev, id]
    )
  }, [])

  return (
    <div className="projects">
      <section className="projects__hero section">
        <div className="container">
          <span className="badge">Portafolio</span>
          <h1 className="projects__title">Nuestros Proyectos</h1>
          <p className="projects__subtitle">
            Explora los proyectos que hemos realizado y nuestras contribuciones open source.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            title="Proyectos recientes"
            subtitle="Proyectos destacando nuestro expertise técnico"
          />
          {loading && (
            <div className="grid-3" aria-busy="true">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          )}
          {error && (
            <div className="projects__status projects__status--error">
              <AlertCircle size={24} />
              <p>Error: {error}</p>
            </div>
          )}
          {!loading && !error && (
            <div className="grid-3">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  {...project}
                  isFavorite={favorites.includes(project.id)}
                  onToggleFavorite={() => toggleFavorite(project.id)}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Projects
