import { Star, GitFork, ExternalLink } from 'lucide-react'
import './ProjectCard.css'

function ProjectCard({ title, image, description, tags = [], link = "#", isFavorite = false, onToggleFavorite, stars }) {
  return (
    <div className="project-card">
      <div className="project-card__image">
        {image ? <img src={image} alt={title} /> : <div className="project-card__placeholder">📁</div>}
        {onToggleFavorite && (
          <button 
            className={`project-card__favorite ${isFavorite ? 'active' : ''}`}
            onClick={onToggleFavorite}
            type="button"
          >
            <Star size={18} fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
        )}
      </div>
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        <div className="project-card__meta">
          {tags.map((tag, index) => (
            <span key={index} className="project-card__tag">{tag}</span>
          ))}
        </div>
        <div className="project-card__footer">
          {stars !== undefined && (
            <span className="project-card__stars">
              <Star size={14} /> {stars}
            </span>
          )}
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-card__link">
            Ver proyecto <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
