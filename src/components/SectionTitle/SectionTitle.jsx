import PropTypes from 'prop-types'
import Reveal from '../Reveal/Reveal'
import './SectionTitle.css'

function SectionTitle({ title, subtitle, alignment = "center" }) {
  return (
    <Reveal className={`section-title section-title--${alignment}`}>
      <h2 className="section-title__title">{title}</h2>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </Reveal>
  )
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  alignment: PropTypes.oneOf(['center', 'left']),
}

export default SectionTitle
