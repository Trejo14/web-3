import { ArrowRight, Code2, Smartphone, Cloud, Palette, Shield, Briefcase, Search, FileText, Rocket } from 'lucide-react'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import Features from '../../components/Features/Features'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Button from '../../components/Button/Button'
import Reveal from '../../components/Reveal/Reveal'
import './Services.css'

function Services() {
  useDocumentTitle('Servicios')
  const services = [
    { id: 'web', icon: <Code2 size={40} />, title: "Desarrollo Web", description: "Creamos sitios web modernos y plataformas personalizadas.", features: ["React, Vue, Angular", "PWAs", "API development"], actionText: "Cotizar" },
    { id: 'mobile', icon: <Smartphone size={40} />, title: "Apps Móviles", description: "Aplicaciones nativas e híbridas para iOS y Android.", features: ["iOS & Android", "React Native, Flutter", "App Store deploy"], actionText: "Cotizar" },
    { id: 'cloud', icon: <Cloud size={40} />, title: "Cloud", description: "Infraestructura en la nube, migraciones y optimización.", features: ["Arquitectura cloud", "Migraciones", "DevOps"], actionText: "Cotizar" },
    { id: 'design', icon: <Palette size={40} />, title: "UI/UX Design", description: "Diseño de interfaces, prototipos, testing y design systems.", features: ["Wireframes", "Prototipos", "Design systems"], actionText: "Cotizar" },
    { id: 'security', icon: <Shield size={40} />, title: "Ciberseguridad", description: "Auditorías de seguridad, pruebas de penetración.", features: ["Auditorías", "Pen testing", "Cumplimiento"], actionText: "Cotizar" },
    { id: 'consulting', icon: <Briefcase size={40} />, title: "Consultoría", description: "Asesoría tecnológica, arquitectura y estrategia digital.", features: ["Arquitectura", "Code review", "Estrategia"], actionText: "Cotizar" },
  ]

  const process = [
    { id: 'analysis', icon: <Search size={28} />, title: "Análisis", description: "Investigamos tu negocio a fondo, identificamos oportunidades clave y definimos los requisitos técnicos junto a ti para asegurar una visión clara del proyecto." },
    { id: 'proposal', icon: <FileText size={28} />, title: "Propuesta", description: "Diseñamos una solución personalizada con alcance definido, timeline realista, tecnologías adecuadas y un presupuesto transparente." },
    { id: 'development', icon: <Code2 size={28} />, title: "Desarrollo", description: "Ejecutamos el plan mediante sprints ágiles con revisiones periódicas, comunicación constante y pruebas de calidad para garantizar un resultado impecable." },
    { id: 'delivery', icon: <Rocket size={28} />, title: "Entrega", description: "Desplegamos tu proyecto en producción, capacitamos a tu equipo y ofrecemos soporte continuo post-lanzamiento para asegurar su éxito." },
  ]

  return (
    <div className="services">
      <section className="services__hero section">
        <div className="container">
          <span className="badge">Servicios</span>
          <h1 className="services__title">Nuestros Servicios</h1>
          <p className="services__subtitle">
            Cada proyecto empieza entendiendo tu negocio. Elige un servicio y cuéntanos qué necesitas: la primera consulta es gratuita.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            title="Explora nuestros servicios"
            subtitle="Desde desarrollo web hasta consultoría estratégica"
          />
          <Reveal stagger className="grid-3">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            title="Nuestro Proceso de trabajo"
            subtitle="Así trabajamos en cada proyecto"
          />
          <Features items={process} />
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <Reveal className="cta-section__content">
            <h2>¿Listo para empezar tu proyecto?</h2>
            <p>Contáctanos hoy y recibe una consulta gratuita</p>
            <Button to="/contact" variant="primary" size="large">
              Contáctanos <ArrowRight size={18} />
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

export default Services
