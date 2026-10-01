import { useState } from 'react'
import { CheckCircle2, Mail, MapPin } from 'lucide-react'
import { WhatsappIcon } from '../../components/Icons/BrandIcons'
import { EMAIL, WHATSAPP_URL } from '../../config/contact'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import ContactForm from '../../components/ContactForm/ContactForm'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Button from '../../components/Button/Button'
import Reveal from '../../components/Reveal/Reveal'
import './Contact.css'

function Contact() {
  useDocumentTitle('Contacto')
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleFormSuccess = () => setFormSubmitted(true)
  const handleReset = () => setFormSubmitted(false)

  const contactInfo = [
    { id: 'email', icon: <Mail size={20} />, title: "Email", description: EMAIL, href: `mailto:${EMAIL}` },
    { id: 'whatsapp', icon: <WhatsappIcon size={20} />, title: "WhatsApp", description: "+52 222 841 0082", href: WHATSAPP_URL },
    { id: 'location', icon: <MapPin size={20} />, title: "Ubicación", description: "Puebla, México · Remoto" },
  ]

  return (
    <div className="contact">
      <section className="contact__hero section">
        <div className="container">
          <span className="badge">Contacto</span>
          <h1 className="contact__title">Contáctanos</h1>
          <p className="contact__subtitle">
            ¿Tienes un proyecto en mente? Escríbenos y lo hacemos realidad.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal stagger className="contact__info-grid">
            {contactInfo.map((item) => {
              const content = (
                <>
                  <div className="contact__info-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </>
              )
              return item.href ? (
                <a
                  key={item.id}
                  href={item.href}
                  className="contact__info-card contact__info-card--link"
                  {...(item.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  {content}
                </a>
              ) : (
                <div key={item.id} className="contact__info-card">{content}</div>
              )
            })}
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="contact__form-container">
            {formSubmitted ? (
              <div className="contact__success">
                <div className="contact__success-icon">
                  <CheckCircle2 size={40} />
                </div>
                <h2>¡Mensaje enviado exitosamente!</h2>
                <p>Gracias por contactarnos. Te responderemos en las próximas 24 horas.</p>
                <Button variant="outline" size="large" onClick={handleReset}>
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <>
                <SectionTitle
                  title="Envíanos un mensaje"
                  subtitle="Completa el formulario y te contactaremos en 24 horas"
                />
                <ContactForm onSuccess={handleFormSuccess} />
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
