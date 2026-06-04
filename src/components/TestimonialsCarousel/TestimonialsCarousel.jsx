import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote, Loader2 } from 'lucide-react'
import './TestimonialsCarousel.css'

function TestimonialsCarousel() {
  const [reviews, setReviews] = useState([])
  const [current, setCurrent] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchReviews = useCallback(async () => {
    try {
      const res = await fetch('/api/reviews')
      if (!res.ok) throw new Error('Error al cargar opiniones')
      const data = await res.json()
      setReviews(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchReviews()
  }, [fetchReviews])

  useEffect(() => {
    if (reviews.length < 2) return
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [reviews.length])

  const goTo = (index) => setCurrent(index)
  const goPrev = () => setCurrent(prev => (prev - 1 + reviews.length) % reviews.length)
  const goNext = () => setCurrent(prev => (prev + 1) % reviews.length)

  if (loading) {
    return (
      <div className="carousel carousel--empty">
        <Loader2 size={32} className="spin" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="carousel carousel--empty">
        <p className="carousel__error">No se pudieron cargar las opiniones.</p>
      </div>
    )
  }

  if (reviews.length === 0) {
    return (
      <div className="carousel carousel--empty">
        <Quote size={32} />
        <p className="carousel__empty-text">Sé el primero en dejar una opinión.</p>
      </div>
    )
  }

  const review = reviews[current]

  return (
    <div className="carousel">
      <div className="carousel__viewport">
        <div className="carousel__slide" key={review.id}>
          <Quote className="carousel__icon" size={28} />
          <blockquote className="carousel__quote">{review.message}</blockquote>
          {review.rating && (
            <div className="carousel__rating">
              {Array.from({ length: review.rating }, (_, i) => (
                <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>
          )}
          <div className="carousel__author">
            <strong>{review.author}</strong>
            {review.role && <span className="carousel__role">{review.role}</span>}
          </div>
        </div>
      </div>

      <div className="carousel__controls">
        <button className="carousel__btn" onClick={goPrev} aria-label="Anterior">
          <ChevronLeft size={20} />
        </button>
        <div className="carousel__dots">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`carousel__dot ${i === current ? 'carousel__dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Ir a opinión ${i + 1}`}
            />
          ))}
        </div>
        <button className="carousel__btn" onClick={goNext} aria-label="Siguiente">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}

export default TestimonialsCarousel
