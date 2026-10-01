import PropTypes from 'prop-types'
import { Star, ExternalLink } from 'lucide-react'
import { GithubIcon } from '../Icons/BrandIcons'
import './ProjectCard.css'

function ProjectCard({ title, image, description, tags = [], link = "#", demo, stars }) {
  return (
    <article className="project-card">
      <div className="project-card__image">
        {image ? <img src={image} alt={`Captura de ${title}`} loading="lazy" /> : (
          <div className="project-card__placeholder" aria-hidden="true">
            <span>{title.charAt(0).toUpperCase()}</span>
          </div>
        )}
        {stars > 0 && (
          <span className="project-card__stars" aria-label={`${stars} estrellas en GitHub`}>
            <Star size={14} fill="currentColor" /> {stars}
          </span>
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
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-card__link" aria-label={`Ver código de ${title} en GitHub`}>
            <GithubIcon size={14} /> Código
          </a>
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="project-card__link" aria-label={`Ver demo de ${title}`}>
              Ver demo <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  link: PropTypes.string,
  demo: PropTypes.string,
  stars: PropTypes.number,
}

export default ProjectCard
