import { useState } from 'react'
import Button from '../Button/Button'
import './ContactForm.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Mensaje enviado correctamente. Nos contactaremos pronto.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    })
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
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
          placeholder="Cuéntanos sobre tu proyecto..."
        ></textarea>
      </div>

      <Button type="submit" variant="primary" size="large" fullWidth>
        Enviar mensaje
      </Button>
    </form>
  )
}

export default ContactForm