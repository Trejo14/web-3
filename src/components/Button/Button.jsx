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
      className={`btn btn--${variant} btn--${size} ${fullWidth ? 'btn--full' : ''} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
