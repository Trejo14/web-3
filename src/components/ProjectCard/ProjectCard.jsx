import { useState } from 'react'
import PropTypes from 'prop-types'
import { Images, ExternalLink, Maximize2, Lock } from 'lucide-react'
import Lightbox from '../Lightbox/Lightbox'
import { GithubIcon } from '../Icons/BrandIcons'
import './ProjectCard.css'

function ProjectCard({ title, description, tags = [], repo, demo, screens = [], confidential = false }) {
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
        {(repo || demo || screens.length > 0) && (
          <div className="project-card__footer">
            {screens.length > 0 && (
              <button type="button" className="project-card__link" onClick={() => setOpen(true)}>
                <Images size={14} /> Pantallas
              </button>
            )}
            <div className="project-card__links">
              {repo && (
                <a href={repo} target="_blank" rel="noopener noreferrer" className="project-card__link" aria-label={`Ver código de ${title} en GitHub`}>
                  <GithubIcon size={14} /> Código
                </a>
              )}
              {demo && (
                <a href={demo} target="_blank" rel="noopener noreferrer" className="project-card__link" aria-label={`Ver ${title} en vivo`}>
                  En vivo <ExternalLink size={14} />
                </a>
              )}
            </div>
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
  repo: PropTypes.string,
  demo: PropTypes.string,
  screens: PropTypes.arrayOf(PropTypes.string),
  confidential: PropTypes.bool,
}

export default ProjectCard
