import { useState } from 'react'
import PropTypes from 'prop-types'
import { Send, Loader2 } from 'lucide-react'
import Button from '../Button/Button'
import './ContactForm.css'

function ContactForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      })
      setIsSubmitting(false)
      if (onSuccess) onSuccess()
    }, 500)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__row">
        <div className="contact-form__group">
          <label className="contact-form__label" htmlFor="name">Nombre completo *</label>
          <input
            type="text"
            id="name"
            name="name"
            className="contact-form__input"
            value={formData.name}
            onChange={handleChange}
            required
            minLength={3}
            maxLength={80}
            placeholder="Juan Pérez"
          />
        </div>
        <div className="contact-form__group">
          <label className="contact-form__label" htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            className="contact-form__input"
            value={formData.email}
            onChange={handleChange}
            required
            maxLength={120}
            placeholder="juan@ejemplo.com"
          />
        </div>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__group">
          <label className="contact-form__label" htmlFor="phone">Teléfono</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="contact-form__input"
            value={formData.phone}
            onChange={handleChange}
            maxLength={20}
            placeholder="+52 111 222 3344"
          />
        </div>
        <div className="contact-form__group">
          <label className="contact-form__label" htmlFor="company">Empresa</label>
          <input
            type="text"
            id="company"
            name="company"
            className="contact-form__input"
            value={formData.company}
            onChange={handleChange}
            maxLength={100}
            placeholder="Mi Empresa S.A."
          />
        </div>
      </div>

      <div className="contact-form__group">
        <label className="contact-form__label" htmlFor="service">Servicio de interés</label>
        <select
          id="service"
          name="service"
          className="contact-form__input"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="">Selecciona un servicio</option>
          <option value="web">Desarrollo Web</option>
          <option value="mobile">Apps Móviles</option>
          <option value="cloud">Cloud</option>
          <option value="ux">UI/UX Design</option>
          <option value="consulting">Consultoría</option>
          <option value="other">Otro</option>
        </select>
      </div>

      <div className="contact-form__group">
        <label className="contact-form__label" htmlFor="message">Mensaje *</label>
        <textarea
          id="message"
          name="message"
          className="contact-form__textarea"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          minLength={10}
          maxLength={2000}
          placeholder="Cuéntanos sobre tu proyecto..."
        ></textarea>
      </div>

      <Button type="submit" variant="primary" size="large" fullWidth disabled={isSubmitting}>
        {isSubmitting ? (
          <>Enviando... <Loader2 size={18} className="spin" /></>
        ) : (
          <>Enviar mensaje <Send size={18} /></>
        )}
      </Button>
    </form>
  )
}

ContactForm.propTypes = {
  onSuccess: PropTypes.func,
}

export default ContactForm
