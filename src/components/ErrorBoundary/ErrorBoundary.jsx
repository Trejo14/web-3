import { Component } from 'react'
import { AlertTriangle } from 'lucide-react'
import './ErrorBoundary.css'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-boundary__content">
            <AlertTriangle size={48} />
            <h1>Algo salió mal</h1>
            <p>Ocurrió un error inesperado. Por favor, recarga la página.</p>
            <button className="error-boundary__btn" onClick={() => window.location.reload()}>
              Recargar página
            </button>
            {process.env.NODE_ENV === 'development' && (
              <pre className="error-boundary__detail">{this.state.error?.message}</pre>
            )}
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
