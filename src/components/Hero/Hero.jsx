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
    let particles = []
    let mouseX = 0
    let mouseY = 0

    const getAccentColor = () => {
      const style = getComputedStyle(document.documentElement)
      return style.getPropertyValue('--accent').trim() || '#4f46e5'
    }

    const hexToRgb = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      } : { r: 79, g: 70, b: 229 }
    }

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    class Particle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1

        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 150) {
          this.x -= dx * 0.002
          this.y -= dy * 0.002
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${this.opacity})`
        ctx.fill()
      }
    }

    const color = hexToRgb(getAccentColor())
    const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 8000))

    const init = () => {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.update()
        p.draw()
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${(1 - dist / 120) * 0.2})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    const handleMouse = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    const handleLeave = () => {
      mouseX = -9999
      mouseY = -9999
    }

    resize()
    init()
    animate()

    const ro = new ResizeObserver(() => {
      resize()
    })
    ro.observe(canvas)

    canvas.addEventListener('mousemove', handleMouse)
    canvas.addEventListener('mouseleave', handleLeave)

    return () => {
      cancelAnimationFrame(animationId)
      ro.disconnect()
      canvas.removeEventListener('mousemove', handleMouse)
      canvas.removeEventListener('mouseleave', handleLeave)
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
