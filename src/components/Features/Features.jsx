import './Features.css'

function Features({ items = [] }) {
  const defaultItems = [
    { icon: "🚀", title: "Rápido", description: "Entrega en tiempo record" },
    { icon: "🔒", title: "Seguro", description: "Los más altos estándares" },
    { icon: "💰", title: "Económico", description: "Precios competitivos" },
    { icon: "🎯", title: "Profesional", description: "Equipo experimentado" },
  ]

  const features = items.length > 0 ? items : defaultItems

  return (
    <div className="features">
      {features.map((item, index) => (
        <div key={index} className="features__item">
          <span className="features__icon">{item.icon}</span>
          <h4 className="features__title">{item.title}</h4>
          <p className="features__description">{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Features