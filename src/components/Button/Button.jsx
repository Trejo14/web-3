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
      className={`button button--${variant} button--${size} ${fullWidth ? 'button--full' : ''} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button