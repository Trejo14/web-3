import { useState } from 'react'
import { Star, Send, Loader2 } from 'lucide-react'
import Button from '../Button/Button'
import './ReviewForm.css'

function ReviewForm({ onReviewAdded }) {
  const [formData, setFormData] = useState({
    author: '',
    email: '',
    role: '',
    message: '',
    rating: 0,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [hoveredStar, setHoveredStar] = useState(0)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleStarClick = (rating) => {
    setFormData(prev => ({ ...prev, rating }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Error al enviar la reseña')
      }

      setFormData({ author: '', email: '', role: '', message: '', rating: 0 })
      if (onReviewAdded) onReviewAdded()
    } catch (err) {
      setSubmitError(err.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="review-form" onSubmit={handleSubmit} noValidate>
      <div className="review-form__row">
        <div className="review-form__group">
          <label className="review-form__label" htmlFor="author">Nombre *</label>
          <input
            type="text"
            id="author"
            name="author"
            className="review-form__input"
            value={formData.author}
            onChange={handleChange}
            required
            minLength={2}
            maxLength={80}
            placeholder="Tu nombre"
          />
        </div>
        <div className="review-form__group">
          <label className="review-form__label" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="review-form__input"
            value={formData.email}
            onChange={handleChange}
            maxLength={120}
            placeholder="tu@email.com"
          />
        </div>
      </div>

      <div className="review-form__row">
        <div className="review-form__group">
          <label className="review-form__label" htmlFor="role">Cargo / Empresa</label>
          <input
            type="text"
            id="role"
            name="role"
            className="review-form__input"
            value={formData.role}
            onChange={handleChange}
            maxLength={100}
            placeholder="CEO, Mi Empresa"
          />
        </div>
        <div className="review-form__group">
          <label className="review-form__label">Calificación</label>
          <div className="review-form__stars">
            {[1, 2, 3, 4, 5].map(star => (
              <button
                key={star}
                type="button"
                className={`review-form__star ${star <= (hoveredStar || formData.rating) ? 'review-form__star--active' : ''}`}
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
                aria-label={`${star} estrella${star !== 1 ? 's' : ''}`}
              >
                <Star size={24} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="review-form__group">
        <label className="review-form__label" htmlFor="message">Tu opinión *</label>
        <textarea
          id="message"
          name="message"
          className="review-form__textarea"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          minLength={10}
          maxLength={1000}
          placeholder="Cuéntanos tu experiencia con BirdStack..."
        />
      </div>

      {submitError && (
        <p className="review-form__error">{submitError}</p>
      )}

      <Button type="submit" variant="primary" size="large" fullWidth disabled={isSubmitting}>
        {isSubmitting ? (
          <>Enviando... <Loader2 size={18} className="spin" /></>
        ) : (
          <>Enviar opinión <Send size={18} /></>
        )}
      </Button>
    </form>
  )
}

export default ReviewForm
