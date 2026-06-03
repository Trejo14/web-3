import PropTypes from 'prop-types'
import './Logo.css'

function Logo({ text = "BirdStack", size = "medium" }) {
  return (
    <div className={`logo logo--${size}`}>
      <svg className="logo__mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden={true}>
        <path d="M16 2L4 12v8l12 10 12-10v-8L16 2z" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path d="M16 10l-5 4v4l5 4 5-4v-4l-5-4z" fill="currentColor" opacity="0.15" />
        <path d="M10 14l3 2-3 2M22 14l-3 2 3 2M14 19l2 2 2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="logo__text">{text}</span>
    </div>
  )
}

Logo.propTypes = {
  text: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

export default Logo
