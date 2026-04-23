import './SectionTitle.css'

function SectionTitle({ title, subtitle, alignment = "center" }) {
  return (
    <div className={`section-title section-title--${alignment}`}>
      <h2 className="section-title__title">{title}</h2>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle