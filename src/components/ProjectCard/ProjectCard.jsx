import { useState } from 'react'
import PropTypes from 'prop-types'
import { Images, ExternalLink, Maximize2, Lock } from 'lucide-react'
import Lightbox from '../Lightbox/Lightbox'
import './ProjectCard.css'

function ProjectCard({ title, description, tags = [], demo, screens = [], confidential = false }) {
  const [open, setOpen] = useState(false)
  const cover = screens[0]

  return (
    <article className="project-card">
      {cover ? (
        <button
          type="button"
          className="project-card__image project-card__image--button"
          onClick={() => setOpen(true)}
          aria-label={`Ver pantallas de ${title}`}
        >
          <img src={cover} alt={`Pantalla principal de ${title}`} loading="lazy" />
          <span className="project-card__overlay" aria-hidden="true">
            <Maximize2 size={20} /> Ver pantallas
          </span>
          {screens.length > 1 && (
            <span className="project-card__count" aria-hidden="true">
              <Images size={14} /> {screens.length}
            </span>
          )}
        </button>
      ) : (
        <div className="project-card__image">
          <div className="project-card__placeholder" aria-hidden="true">
            <span>{title.charAt(0)}</span>
          </div>
        </div>
      )}

      <div className="project-card__content">
        {confidential && (
          <span className="project-card__private" title="Proyecto de cliente: nombre y datos reales omitidos">
            <Lock size={12} /> Cliente confidencial
          </span>
        )}
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        <div className="project-card__meta">
          {tags.map((tag) => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
        </div>
        {(screens.length > 0 || demo) && (
          <div className="project-card__footer">
            {screens.length > 0 && (
              <button type="button" className="project-card__link" onClick={() => setOpen(true)}>
                <Images size={14} /> {screens.length === 1 ? 'Ver pantalla' : `Ver ${screens.length} pantallas`}
              </button>
            )}
            {demo && (
              <a href={demo} target="_blank" rel="noopener noreferrer" className="project-card__link" aria-label={`Ver ${title} en vivo`}>
                Ver en vivo <ExternalLink size={14} />
              </a>
            )}
          </div>
        )}
      </div>

      {open && <Lightbox title={title} images={screens} onClose={() => setOpen(false)} />}
    </article>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  demo: PropTypes.string,
  screens: PropTypes.arrayOf(PropTypes.string),
  confidential: PropTypes.bool,
}

export default ProjectCard
