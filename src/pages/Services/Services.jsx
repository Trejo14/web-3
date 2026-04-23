import { Link } from 'react-router-dom'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import Features from '../../components/Features/Features'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Button from '../../components/Button/Button'
import './Services.css'

function Services() {
  const services = [
    { icon: "🌐", title: "Desarrollo Web", description: "Creamos sitios web modernos, aplicaciones web progresivas y plataformas personalizadas usando las últimas tecnologías como React, Vue, Angular y más.", price: "Desde $999" },
    { icon: "📱", title: "Apps Móviles", description: "Desarrollamos aplicaciones nativas para iOS y Android, así como apps híbridas que funcionan en todas las plataformas.", price: "Desde $2,499" },
    { icon: "☁️", title: "Cloud", description: "Servicios de infraestructura en la nube, migraciones, configuraciones y optimización de AWS, Azure y Google Cloud.", price: "Desde $399" },
    { icon: "🎨", title: "UI/UX Design", description: "Diseño de interfaces de usuario y experiencia de usuario, prototipos, testes de usabilidad y design systems.", price: "Desde $699" },
    { icon: "🔒", title: "Ciberseguridad", description: "Auditorías de seguridad, pruebas de penetración, análisis de vulnerabilidades y soluciones de protección.", price: "Desde $899" },
    { icon: "💼", title: "Consultoría", description: "Asesoría tecnológica, arquitectura de software, optimización de procesos y estrategia digital.", price: "Desde $299" },
  ]

  const process = [
    { icon: "1", title: "Análisis", description: "Estudiamos tus necesidades y objetivos" },
    { icon: "2", title: "Propuesta", description: "Presentamos una solución personalizada" },
    { icon: "3", title: "Desarrollo", description: "Implementamos la solución acordada" },
    { icon: "4", title: "Entrega", description: "Entregamos y damos soporte continuo" },
  ]

  return (
    <div className="services">
      <section className="services__hero section">
        <div className="container">
          <h1 className="services__title">Nuestros Servicios</h1>
          <p className="services__subtitle">
            Ofrecemos soluciones tecnológicas completas adaptadas a las necesidades de tu negocio.
          </p>
        </div>
      </section>

      <section className="services__list section">
        <div className="container">
          <SectionTitle 
            title="Explora nuestros servicios" 
            subtitle="Desde desarrollo web hasta consultoría estratégica"
          />
          <div className="services__grid">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="services__process section">
        <div className="container">
          <SectionTitle 
            title="Nuestro Proceso" 
            subtitle="Así trabajamos en cada proyecto"
          />
          <Features items={process.map(p => ({ ...p, icon: p.icon === "1" ? "📋" : p.icon === "2" ? "📝" : p.icon === "3" ? "⚙️" : "🚀", title: p.title, description: p.description }))} />
        </div>
      </section>

      <section className="services__cta section">
        <div className="container">
          <div className="services__cta-content">
            <h2>¿Listo para empezar tu proyecto?</h2>
            <p>Contáctanos hoy y recibe una consulta gratuita</p>
            <Link to="/contact">
              <Button variant="primary" size="large">Contáctanos</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services