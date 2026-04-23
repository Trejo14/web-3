import './Logo.css'

function Logo({ text = "TechCorp", size = "medium" }) {
  return (
    <div className={`logo logo--${size}`}>
      <span className="logo__icon">⚡</span>
      <span className="logo__text">{text}</span>
    </div>
  )
}

export default Logo