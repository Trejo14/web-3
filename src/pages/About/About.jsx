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
              Nacimos para transformar ideas en soluciones digitales innovadoras.
              Nuestra misión es impulsar negocios a través de tecnología y creatividad.
            </p>
            <Button variant="primary" size="large">Contáctanos</Button>
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
              <p>Transformar negocios a través de soluciones tecnológicas innovadoras que impulsen el crecimiento y el éxito digital.</p>
            </div>
            <div className="about__mission-item">
              <h3>Visión</h3>
              <p>Ser la empresa líder en soluciones digitales, reconocida por la calidad y excelencia en cada proyecto.</p>
            </div>
            <div className="about__mission-item">
              <h3>Valores</h3>
              <p>Innovación, calidad, compromiso y enfoque en el cliente son nuestros pilares fundamentales.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
