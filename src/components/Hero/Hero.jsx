import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import { ChevronRight } from 'lucide-react'
import './Hero.css'

function Hero({ 
  title = "Transforma tu presencia digital",
  subtitle = "Creamos soluciones tecnológicas innovadoras que impulsan el crecimiento de tu negocio.",
  ctaText = "Contáctanos",
  ctaLink = "/contact",
  image = null
}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={`hero ${visible ? 'hero--visible' : ''}`}>
      <div className="hero__container container">
        <div className="hero__content">
          <span className="hero__badge">Soluciones Digitales</span>
          <h1 className="hero__title">{title}</h1>
          <p className="hero__subtitle">{subtitle}</p>
          <div className="hero__cta">
            <Link to={ctaLink}>
              <Button variant="primary" size="large">
                {ctaText}
                <ChevronRight size={18} />
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="large">Ver proyectos</Button>
            </Link>
          </div>
        </div>
        {image && (
          <div className="hero__image">
            <img src={image} alt={title} />
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero
