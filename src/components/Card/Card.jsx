import './Card.css'

function Card({ title, children, className = '', hover = false }) {
  return (
    <div className={`card ${hover ? 'card--hover' : ''} ${className}`}>
      {title && <h3 className="card__title">{title}</h3>}
      <div className="card__content">
        {children}
      </div>
    </div>
  )
}

export default Card
