import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Smartphone, Cloud, Palette, Shield, Briefcase } from 'lucide-react'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import Features from '../../components/Features/Features'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Button from '../../components/Button/Button'
import './Services.css'

function Services() {
  const services = [
    { id: 'web', icon: <Code2 size={40} />, title: "Desarrollo Web", description: "Creamos sitios web modernos y plataformas personalizadas.", features: ["React, Vue, Angular", "PWAs", "API development"], price: "Desde $999" },
    { id: 'mobile', icon: <Smartphone size={40} />, title: "Apps Móviles", description: "Aplicaciones nativas e híbridas para iOS y Android.", features: ["iOS & Android", "React Native, Flutter", "App Store deploy"], price: "Desde $2,499" },
    { id: 'cloud', icon: <Cloud size={40} />, title: "Cloud", description: "Infraestructura en la nube, migraciones y optimización.", features: ["Arquitectura cloud", "Migraciones", "DevOps"], price: "Desde $399" },
    { id: 'design', icon: <Palette size={40} />, title: "UI/UX Design", description: "Diseño de interfaces, prototipos, testing y design systems.", features: ["Wireframes", "Prototipos", "Design systems"], price: "Desde $699" },
    { id: 'security', icon: <Shield size={40} />, title: "Ciberseguridad", description: "Auditorías de seguridad, pruebas de penetración.", features: ["Auditorías", "Pen testing", "Cumplimiento"], price: "Desde $899" },
    { id: 'consulting', icon: <Briefcase size={40} />, title: "Consultoría", description: "Asesoría tecnológica, arquitectura y estrategia digital.", features: ["Arquitectura", "Code review", "Estrategia"], price: "Desde $299" },
  ]

  const process = [
    { id: 'analysis', icon: <Code2 size={28} />, title: "Análisis", description: "Estudiamos tus necesidades y objetivos" },
    { id: 'proposal', icon: <Code2 size={28} />, title: "Propuesta", description: "Presentamos una solución personalizada" },
    { id: 'development', icon: <Code2 size={28} />, title: "Desarrollo", description: "Implementamos la solución acordada" },
    { id: 'delivery', icon: <Code2 size={28} />, title: "Entrega", description: "Entregamos y damos soporte continuo" },
  ]

  return (
    <div className="services">
      <section className="services__hero section">
        <div className="container">
          <span className="badge">Servicios</span>
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
          <div className="grid-3">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
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
