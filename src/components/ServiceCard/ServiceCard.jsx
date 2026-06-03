import PropTypes from 'prop-types'
import { CheckCircle } from 'lucide-react'
import './ServiceCard.css'

function ServiceCard({ icon, title, description, price, features = [] }) {
  return (
    <div className="service-card">
      <div className="service-card__icon">{icon}</div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
      {features.length > 0 && (
        <ul className="service-card__features">
          {features.map((feat) => (
            <li key={feat}>
              <CheckCircle size={16} />
              {feat}
            </li>
          ))}
        </ul>
      )}
      {price && <p className="service-card__price">{price}</p>}
    </div>
  )
}

ServiceCard.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
}

export default ServiceCard
