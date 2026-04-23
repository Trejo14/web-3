import ContactForm from '../../components/ContactForm/ContactForm'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Features from '../../components/Features/Features'
import './Contact.css'

function Contact() {
  const contactInfo = [
    { icon: "📧", title: "Email", description: "info@techcorp.com" },
    { icon: "📞", title: "Teléfono", description: "+1 234 567 890" },
    { icon: "📍", title: "Dirección", description: "Calle Principal 123, Ciudad" },
  ]

  return (
    <div className="contact">
      <section className="contact__hero section">
        <div className="container">
          <h1 className="contact__title">Contáctanos</h1>
          <p className="contact__subtitle">
            ¿Tienes un proyecto en mente? Escríbenos y cotaremos juntos.
          </p>
        </div>
      </section>

      <section className="contact__info section">
        <div className="container">
          <Features items={contactInfo.map(c => ({ icon: c.icon, title: c.title, description: c.description }))} />
        </div>
      </section>

      <section className="contact__form section">
        <div className="container">
          <div className="contact__form-container">
            <SectionTitle 
              title="Envíanos un mensaje" 
              subtitle="Completa el formulario y te contactaremos en 24 horas"
            />
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact