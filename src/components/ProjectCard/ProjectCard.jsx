import './ProjectCard.css'

function ProjectCard({ title, image, description, tags = [], link = "#" }) {
  return (
    <div className="project-card">
      <div className="project-card__image">
        <img src={image} alt={title} />
      </div>
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        <div className="project-card__tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-card__tag">{tag}</span>
          ))}
        </div>
        <a href={link} className="project-card__link">Ver proyecto →</a>
      </div>
    </div>
  )
}

export default ProjectCard