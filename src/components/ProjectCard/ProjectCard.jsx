import PropTypes from 'prop-types'
import { Star, ExternalLink } from 'lucide-react'
import './ProjectCard.css'

function ProjectCard({ title, image, description, tags = [], link = "#", isFavorite = false, onToggleFavorite, stars }) {
  return (
    <div className="project-card">
      <div className="project-card__image">
        {image ? <img src={image} alt={title} loading="lazy" /> : (
          <div className="project-card__placeholder" data-initial={title.charAt(0).toUpperCase()}>
            <span>{title.charAt(0).toUpperCase()}</span>
          </div>
        )}
        {onToggleFavorite && (
          <button
            className={`project-card__favorite ${isFavorite ? 'active' : ''}`}
            onClick={onToggleFavorite}
            type="button"
            aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            aria-pressed={isFavorite}
          >
            <Star size={18} fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
        )}
      </div>
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        <div className="project-card__meta">
          {tags.map((tag) => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
        </div>
        <div className="project-card__footer">
          {stars !== undefined && (
            <span className="project-card__stars">
              <Star size={14} /> {stars}
            </span>
          )}
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-card__link" aria-label={`Ver proyecto ${title} en GitHub`}>
            Ver proyecto <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  link: PropTypes.string,
  isFavorite: PropTypes.bool,
  onToggleFavorite: PropTypes.func,
  stars: PropTypes.number,
}

export default ProjectCard
