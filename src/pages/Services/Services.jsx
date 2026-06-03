import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Smartphone, Cloud, Palette, Shield, Briefcase } from 'lucide-react'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import Features from '../../components/Features/Features'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Button from '../../components/Button/Button'
import './Services.css'

function Services() {
  const services = [
    { icon: <Code2 size={40} />, title: "Desarrollo Web", description: "Creamos sitios web modernos, aplicaciones web progresivas y plataformas personalizadas.", features: ["React, Vue, Angular", "PWAs", "API development"], price: "Desde $999" },
    { icon: <Smartphone size={40} />, title: "Apps Móviles", description: "Aplicaciones nativas para iOS y Android, así como apps híbridas multiplataforma.", features: ["iOS & Android", "React Native, Flutter", "App Store deploy"], price: "Desde $2,499" },
    { icon: <Cloud size={40} />, title: "Cloud", description: "Infraestructura en la nube, migraciones y optimización de AWS, Azure y Google Cloud.", features: ["Arquitectura cloud", "Migraciones", "DevOps"], price: "Desde $399" },
    { icon: <Palette size={40} />, title: "UI/UX Design", description: "Diseño de interfaces y experiencia de usuario, prototipos, testing y design systems.", features: ["Wireframes", "Prototipos", "Design systems"], price: "Desde $699" },
    { icon: <Shield size={40} />, title: "Ciberseguridad", description: "Auditorías de seguridad, pruebas de penetración y soluciones de protección.", features: ["Auditorías", "Pen testing", "Cumplimiento"], price: "Desde $899" },
    { icon: <Briefcase size={40} />, title: "Consultoría", description: "Asesoría tecnológica, arquitectura de software y estrategia digital.", features: ["Arquitectura", "Code review", "Estrategia"], price: "Desde $299" },
  ]

  const process = [
    { icon: <Code2 size={28} />, title: "Análisis", description: "Estudiamos tus necesidades y objetivos" },
    { icon: <Code2 size={28} />, title: "Propuesta", description: "Presentamos una solución personalizada" },
    { icon: <Code2 size={28} />, title: "Desarrollo", description: "Implementamos la solución acordada" },
    { icon: <Code2 size={28} />, title: "Entrega", description: "Entregamos y damos soporte continuo" },
  ]

  return (
    <div className="services">
      <section className="services__hero section">
        <div className="container">
          <span className="services__badge">Servicios</span>
          <h1 className="services__title">Nuestros Servicios</h1>
          <p className="services__subtitle">
            Ofrecemos soluciones tecnológicas completas adaptadas a las necesidades de tu negocio.
          </p>
        </div>
      </section>

      <section className="section">
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

      <section className="section section-alt">
        <div className="container">
          <SectionTitle 
            title="Nuestro Proceso" 
            subtitle="Así trabajamos en cada proyecto"
          />
          <Features items={process} />
        </div>
      </section>

      <section className="services__cta">
        <div className="container">
          <div className="services__cta-content">
            <h2>¿Listo para empezar tu proyecto?</h2>
            <p>Contáctanos hoy y recibe una consulta gratuita</p>
            <Link to="/contact">
              <Button variant="primary" size="large">
                Contáctanos <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
