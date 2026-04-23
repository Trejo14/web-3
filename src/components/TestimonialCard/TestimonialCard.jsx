import './TestimonialCard.css'

function TestimonialCard({ quote, author, role, avatar }) {
  const defaultAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(author)}&background=64748b&color=fff&size=80`
  
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__quote-icon">"</div>
      <blockquote className="testimonial-card__quote">{quote}</blockquote>
      <div className="testimonial-card__author">
        <img src={avatar || defaultAvatar} alt={author} className="testimonial-card__avatar" />
        <div>
          <cite className="testimonial-card__name">{author}</cite>
          <span className="testimonial-card__role">{role}</span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard