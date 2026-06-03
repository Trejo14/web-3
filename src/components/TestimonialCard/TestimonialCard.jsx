import PropTypes from 'prop-types'
import { Quote } from 'lucide-react'
import './TestimonialCard.css'

function TestimonialCard({ quote, author, role, avatar }) {
  const defaultAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(author)}&background=f4f4f5&color=71717a&size=80`

  return (
    <div className="testimonial-card">
      <Quote className="testimonial-card__icon" size={24} />
      <blockquote className="testimonial-card__quote">{quote}</blockquote>
      <div className="testimonial-card__author">
        <img src={avatar || defaultAvatar} alt={author} loading="lazy" />
        <div>
          <cite className="testimonial-card__name">{author}</cite>
          <span className="testimonial-card__role">{role}</span>
        </div>
      </div>
    </div>
  )
}

TestimonialCard.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  role: PropTypes.string,
  avatar: PropTypes.string,
}

export default TestimonialCard
