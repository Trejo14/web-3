import { ArrowLeft } from 'lucide-react'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import Button from '../../components/Button/Button'
import './NotFound.css'

function NotFound() {
  useDocumentTitle('Página no encontrada')

  return (
    <section className="not-found section">
      <div className="container">
        <span className="not-found__code">404</span>
        <h1 className="not-found__title">Página no encontrada</h1>
        <p className="not-found__text">La página que buscas no existe o fue movida.</p>
        <Button to="/" variant="primary" size="large">
          <ArrowLeft size={18} /> Volver al inicio
        </Button>
      </div>
    </section>
  )
}

export default NotFound
