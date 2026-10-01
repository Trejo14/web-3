import useDocumentTitle from '../../hooks/useDocumentTitle'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import './Review.css'

// Página sin enlace en el menú: se comparte directamente con los clientes (birdstack.dev/opinion)
function Review() {
  useDocumentTitle('Deja tu opinión')

  return (
    <div className="review-page">
      <section className="review-page__hero section">
        <div className="container">
          <span className="badge">Tu opinión</span>
          <h1 className="review-page__title">¿Cómo fue trabajar con nosotros?</h1>
          <p className="review-page__subtitle">
            Gracias por confiar en BirdStack. Tu reseña nos ayuda a mejorar y a que otros negocios nos conozcan.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="review-page__form">
            <ReviewForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Review
