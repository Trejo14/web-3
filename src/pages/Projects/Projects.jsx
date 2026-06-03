import { useState, useEffect } from 'react'
import { Loader2, AlertCircle } from 'lucide-react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './Projects.css'

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

  const toggleFavorite = (index) => {
    setFavorites(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="projects">
      <section className="projects__hero section">
        <div className="container">
          <span className="projects__badge">Portafolio</span>
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
            <div className="projects__status">
              <Loader2 size={24} className="spin" />
              <p>Cargando proyectos...</p>
            </div>
          )}
          {error && (
            <div className="projects__status projects__status--error">
              <AlertCircle size={24} />
              <p>Error: {error}</p>
            </div>
          )}
          {!loading && !error && (
            <div className="projects__grid">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={index} 
                  {...project}
                  isFavorite={favorites.includes(index)}
                  onToggleFavorite={() => toggleFavorite(index)}
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
