import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import { ChevronRight } from 'lucide-react'
import './Hero.css'

function Hero({
  title = "Transforma tu presencia digital",
  subtitle = "Creamos soluciones tecnológicas innovadoras que impulsan el crecimiento de tu negocio.",
  ctaText = "Contáctanos",
  ctaLink = "/contact",
}) {
  const canvasRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = canvas.getContext('2d')
    let animationId
    let stars = []
    let shootingStars = []
    let nextShootingStar = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    class Star {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2.5 + 0.5
        this.baseOpacity = Math.random() * 0.5 + 0.3
        this.twinkleSpeed = Math.random() * 0.02 + 0.005
        this.twinklePhase = Math.random() * Math.PI * 2
        this.maxTwinkle = Math.random() * 0.5 + 0.2
      }

      draw(time) {
        const opacity = this.baseOpacity + (Math.sin(time * this.twinkleSpeed + this.twinklePhase) * 0.5 + 0.5) * this.maxTwinkle
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(opacity, 1)})`
        ctx.fill()
      }
    }

    const init = () => {
      stars = []
      shootingStars = []
      const count = Math.min(180, Math.floor((canvas.width * canvas.height) / 4000))
      for (let i = 0; i < count; i++) {
        stars.push(new Star())
      }
    }

    const spawnShootingStar = () => {
      const angle = Math.PI / 4 + Math.random() * Math.PI / 4
      const speed = 6 + Math.random() * 4
      const length = 60 + Math.random() * 80
      const x = Math.random() * canvas.width * 0.8 + canvas.width * 0.1
      const y = Math.random() * canvas.height * 0.3
      shootingStars.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length,
        life: 1,
        decay: 0.008 + Math.random() * 0.008,
      })
    }

    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const s of stars) {
        s.draw(time)
      }

      if (time > nextShootingStar) {
        spawnShootingStar()
        nextShootingStar = time + 3000 + Math.random() * 4000
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i]
        ss.x += ss.vx
        ss.y += ss.vy
        ss.life -= ss.decay

        if (ss.life <= 0) {
          shootingStars.splice(i, 1)
          continue
        }

        const gradient = ctx.createLinearGradient(ss.x, ss.y, ss.x - ss.vx * 3, ss.y - ss.vy * 3)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${ss.life})`)
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`)

        ctx.beginPath()
        ctx.moveTo(ss.x, ss.y)
        ctx.lineTo(ss.x - ss.vx * 3, ss.y - ss.vy * 3)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.stroke()
      }

      animationId = requestAnimationFrame(animate)
    }

    resize()
    init()

    nextShootingStar = 1000 + Math.random() * 2000
    animationId = requestAnimationFrame(animate)

    const ro = new ResizeObserver(() => {
      resize()
      init()
    })
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(animationId)
      ro.disconnect()
    }
  }, [])

  return (
    <section className={`hero ${visible ? 'hero--visible' : ''}`}>
      <canvas ref={canvasRef} className="hero__canvas" />
      <div className="hero__overlay" />
      <div className="hero__container container">
        <div className="hero__content">
          <span className="badge">Soluciones Digitales</span>
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
      </div>
    </section>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
}

export default Hero
