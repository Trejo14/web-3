import './ServiceCard.css'

function ServiceCard({ icon = "💻", title, description, price }) {
  return (
    <div className="service-card">
      <div className="service-card__icon">{icon}</div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
      {price && <p className="service-card__price">{price}</p>}
    </div>
  )
}

export default ServiceCard