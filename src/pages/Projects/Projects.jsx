import ProjectCard from '../../components/ProjectCard/ProjectCard'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './Projects.css'
import imgFF from './images/ff.png'
import imgST from './images/st.png'
import imgMB from './images/mb.png'
import imgCB from './images/cb.png'
import imgLG from './images/lg.png'
import imgLN from './images/ln.png'


function Projects() {
  const projects = [
    { title: "Servicio de E-Commerce", description: "Plataforma de comercio electrónico completa con panel de administración, pasarela de pagos y gestión de inventario.", tags: ["React", "Node.js", "MongoDB"], link: "https://github.com/AngelChJ/ProyectoUmad", image: imgFF },
    { title: "App de salud", description: "Aplicación móvil para seguimiento de salud y bienestar con integración de dispositivos wearable.", tags: ["React Native", "Firebase"], link: "https://github.com/asapAdolf/SmarTracker", image: imgST },
    { title: "Página Innmobiliaria", description: "Dashbouard empresarial para la gestión de propiedades y clientes.", tags: ["React", "Next.js"], link: "https://github.com/Trejo14/WEB", image: imgMB },
    { title: "Plataforma de aprendizaje", description: "Plataforma de educación en línea con cursos, evaluaciones y certificación.", tags: ["Angular", "Python", "PostgreSQL"], link: "https://github.com/", image: imgLN },
    { title: "Aplicación de ciberseguridad", description: "Herramienta creada con fines educativos, la cual ayuda a proteger tus dispositivos de amenazas cibernéticas.", tags: ["Vite", "Redux", "TailwindCSS"], link: "https://github.com/", image: imgCB },
    { title: "Sistema de gestión logística", description: "Sistema de gestión logística con tracking en tiempo real y optimización de rutas.", tags: ["Node.js", "GraphQL", "Redis"], link: "https://github.com/", image: imgLG }
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