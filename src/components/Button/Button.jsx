import PropTypes from 'prop-types'
import './Button.css'

function Button({
  children,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  onClick,
  disabled = false,
  className = '',
  fullWidth = false
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      className={`btn btn--${variant} btn--${size} ${fullWidth ? 'btn--full' : ''} ${className}`}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
}

export default Button
