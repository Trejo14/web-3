import ProjectCard from '../../components/ProjectCard/ProjectCard'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './Projects.css'

function Projects() {
  const projects = [
    { title: "E-commerce Platform", description: "Plataforma de comercio electrónico completa con panel de administración, pasarela de pagos y gestión de inventario.", tags: ["React", "Node.js", "MongoDB"], link: "#" },
    { title: "Health App", description: "Aplicación móvil para seguimiento de salud y bienestar con integración de dispositivos wearable.", tags: ["React Native", "Firebase"], link: "#" },
    { title: "Corporate Dashboard", description: "Dashboard empresarial para visualización de métricas y reportes en tiempo real.", tags: ["Vue.js", "D3.js", "AWS"], link: "#" },
    { title: "Learning Platform", description: "Plataforma de educación en línea con cursos, evaluaciones y certificación.", tags: ["Angular", "Python", "PostgreSQL"], link: "#" },
    { title: "Real Estate App", description: "Aplicación para gestión inmobiliaria con listados, tours virtuales y агент system.", tags: ["React", "Firebase", "Google Maps"], link: "#" },
    { title: "Logistics System", description: "Sistema de gestión logística con tracking en tiempo real y optimización de rutas.", tags: ["Node.js", "GraphQL", "Redis"], link: "#" },
  ]

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
          <div className="projects__grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects