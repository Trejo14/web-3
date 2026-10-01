import { Heart, Target, Eye, Lightbulb } from 'lucide-react'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import Features from '../../components/Features/Features'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Button from '../../components/Button/Button'
import './About.css'

function About() {
  useDocumentTitle('Nosotros')

  const values = [
    { icon: <Heart size={28} />, title: "Compromiso", description: "Nos comprometemos al 100% con cada proyecto" },
    { icon: <Target size={28} />, title: "Calidad", description: "Estándares altos en cada entrega" },
    { icon: <Eye size={28} />, title: "Visión", description: "Siempre buscando nuevas soluciones" },
    { icon: <Lightbulb size={28} />, title: "Innovación", description: "Buscamos constantemente nuevas formas de resolver problemas" },
  ]

  return (
    <div className="about">
      <section className="about__hero section">
        <div className="container">
          <div className="about__hero-content">
            <span className="badge">Nosotros</span>
            <h1 className="about__title">Sobre BirdStack</h1>
            <p className="about__description">
              Somos un equipo de desarrolladores de Puebla, México. Trabajamos directo con
              cada cliente, sin intermediarios: hablas con las mismas personas que programan tu proyecto.
            </p>
            <Button to="/contact" variant="primary" size="large">Contáctanos</Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            title="Nuestros Valores"
            subtitle="Los principios que guían nuestro trabajo"
          />
          <Features items={values} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="about__mission-grid">
            <div className="about__mission-item">
              <h3>Misión</h3>
              <p>Ayudar a negocios y emprendedores a digitalizarse con software confiable, a un precio justo y con trato directo.</p>
            </div>
            <div className="about__mission-item">
              <h3>Visión</h3>
              <p>Ser el equipo de desarrollo de confianza para las pequeñas y medianas empresas de México.</p>
            </div>
            <div className="about__mission-item">
              <h3>Cómo trabajamos</h3>
              <p>Comunicación directa, avances visibles durante todo el proyecto y soporte después de la entrega.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
