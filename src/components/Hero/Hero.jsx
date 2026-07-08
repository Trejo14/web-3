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
    let mouseX = -9999
    let mouseY = -9999

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
        this.homeX = Math.random() * canvas.width
        this.homeY = Math.random() * canvas.height
        this.x = this.homeX
        this.y = this.homeY
        this.size = Math.random() * 3 + 1
        this.baseOpacity = Math.random() * 0.4 + 0.3
        this.vx = 0
        this.vy = 0
        this.driftX = (Math.random() - 0.5) * 0.15
        this.driftY = (Math.random() - 0.5) * 0.15
      }

      update() {
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 180) {
          const force = (180 - dist) / 180 * 6
          const angle = Math.atan2(dy, dx)
          this.vx -= Math.cos(angle) * force * 0.3
          this.vy -= Math.sin(angle) * force * 0.3
        }

        const homeDx = this.homeX - this.x
        const homeDy = this.homeY - this.y
        this.vx += homeDx * 0.01
        this.vy += homeDy * 0.01

        this.vx += this.driftX
        this.vy += this.driftY

        this.vx *= 0.92
        this.vy *= 0.92

        this.x += this.vx
        this.y += this.vy
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${this.baseOpacity})`
        ctx.shadowColor = `rgba(${color.r}, ${color.g}, ${color.b}, ${this.baseOpacity * 0.6})`
        ctx.shadowBlur = 8
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    const color = hexToRgb(getAccentColor())
    const particleCount = Math.min(300, Math.floor((canvas.width * canvas.height) / 2500))

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

          if (dist < 140) {
            const opacity = (1 - dist / 140) * 0.25
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`
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
