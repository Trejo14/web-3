import { Zap, Shield, DollarSign, Target } from 'lucide-react'
import './Features.css'

function Features({ items = [] }) {
  const defaultItems = [
    { icon: <Zap size={28} />, title: "Rápido", description: "Entrega ágil sin sacrificar calidad" },
    { icon: <Shield size={28} />, title: "Seguro", description: "Estándares avanzados de protección" },
    { icon: <DollarSign size={28} />, title: "Económico", description: "Precios justos y transparentes" },
    { icon: <Target size={28} />, title: "Preciso", description: "Soluciones hechas a tu medida" },
  ]

  const features = items.length > 0 ? items : defaultItems

  return (
    <div className="features">
      {features.map((item, index) => (
        <div key={index} className="features__item">
          <div className="features__icon">{item.icon}</div>
          <h4 className="features__title">{item.title}</h4>
          <p className="features__description">{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Features
