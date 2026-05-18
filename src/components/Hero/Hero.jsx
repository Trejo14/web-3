import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './Hero.css'

function Hero({ 
  title = "Transforma tu presencia digital",
  subtitle = "Creamos soluciones tecnológicas innovadoras que impulsan el crecimiento de tu negocio.",
  ctaText = "Contáctanos",
  ctaLink = "/contact",
  image = null
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={`hero ${loaded ? 'loaded' : ''}`}>
      <div className="hero__container container">
        <div className={`hero__content ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero__title">{title}</h1>
          <p className="hero__subtitle">{subtitle}</p>
          <div className="hero__cta">
            <Link to={ctaLink}>
              <Button variant="primary" size="large">{ctaText}</Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="large">Ver proyectos</Button>
            </Link>
          </div>
        </div>
        {image && (
          <div className={`hero__image ${isVisible ? 'visible' : ''}`}>
            <img src={image} alt={title} />
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero