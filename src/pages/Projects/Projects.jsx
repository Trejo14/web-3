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
    const localProjects = [
      { title: "E-Commerce", description: "Plataforma de comercio electrónico completa con panel de administración, pasarela de pagos y gestión de inventario.", tags: ["React", "Node.js", "MongoDB"], link: "https://github.com/AngelChJ/ProyectoUmad", stars: 124 },
      { title: "Health App", description: "Aplicación móvil para seguimiento de salud y bienestar con integración de dispositivos wearable.", tags: ["React Native", "Firebase"], link: "https://github.com/asapAdolf/SmarTracker", stars: 89 },
      { title: "Inmobiliaria", description: "Dashboard empresarial para la gestión de propiedades y clientes.", tags: ["React", "Next.js"], link: "https://github.com/Trejo14/WEB", stars: 56 },
      { title: "Learning Platform", description: "Plataforma de educación en línea con cursos, evaluaciones y certificación.", tags: ["Angular", "Python", "PostgreSQL"], link: "https://github.com/", stars: 234 },
      { title: "Ciberseguridad", description: "Herramienta educativa para proteger tus dispositivos de amenazas cibernéticas.", tags: ["Vite", "Redux", "TailwindCSS"], link: "https://github.com/", stars: 178 },
      { title: "Logística", description: "Sistema de gestión logística con tracking en tiempo real y optimización de rutas.", tags: ["Node.js", "GraphQL", "Redis"], link: "https://github.com/", stars: 67 }
    ]
    
    setTimeout(() => {
      setProjects(localProjects)
      setLoading(false)
    }, 500)
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