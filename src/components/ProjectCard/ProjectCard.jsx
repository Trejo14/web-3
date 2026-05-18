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
            {isFavorite ? '★' : '☆'}
          </button>
        )}
      </div>
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        <div className="project-card__tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-card__tag">{tag}</span>
          ))}
          {stars !== undefined && <span className="project-card__stars">⭐ {stars}</span>}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-card__link">Ver proyecto →</a>
      </div>
    </div>
  )
}

export default ProjectCard