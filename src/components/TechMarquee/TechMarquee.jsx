import TECHNOLOGIES from './technologies'
import './TechMarquee.css'

function TechList({ hidden = false }) {
  return (
    <ul className="tech-marquee__list" aria-hidden={hidden || undefined}>
      {TECHNOLOGIES.map((tech) => (
        <li key={tech.name} className="tech-marquee__item">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
            <path d={tech.path} />
          </svg>
          <span>{tech.name}</span>
        </li>
      ))}
    </ul>
  )
}

function TechMarquee() {
  return (
    <section className="tech-marquee" aria-label="Tecnologías con las que trabajamos">
      <p className="tech-marquee__label">Tecnologías con las que trabajamos</p>
      <div className="tech-marquee__track">
        <TechList />
        <TechList hidden />
      </div>
    </section>
  )
}

export default TechMarquee
