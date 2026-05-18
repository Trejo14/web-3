import { useState, useEffect } from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './Projects.css'

function Projects() {
  const [projects, setProjects] = useState([])
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/users/google/repos?sort=updated&per_page=12')
      .then(response => {
        if (!response.ok) throw new Error('Error al cargar proyectos')
        return response.json()
      })
      .then(data => {
        const formattedProjects = data.map(repo => ({
          title: repo.name,
          description: repo.description || 'Sin descripción disponible',
          tags: [repo.language || 'GitHub'].filter(Boolean),
          link: repo.html_url,
          stars: repo.stargazers_count
        }))
        setProjects(formattedProjects)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
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
          <h1 className="projects__title">Nuestros Proyectos</h1>
          <p className="projects__subtitle">
            Explora algunos de los proyectos que hemos realizado para nuestros clientes.
          </p>
        </div>
      </section>

      <section className="projects__list section">
        <div className="container">
          <SectionTitle 
            title="Portafolio" 
            subtitle="Proyectos destacando nuestro expertise técnico"
          />
          {loading && <p className="loading">Cargando proyectos...</p>}
          {error && <p className="error">Error: {error}</p>}
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