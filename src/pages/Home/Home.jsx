import { Code2, Smartphone, Cloud } from 'lucide-react'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import Hero from '../../components/Hero/Hero'
import Features from '../../components/Features/Features'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import TestimonialsCarousel from '../../components/TestimonialsCarousel/TestimonialsCarousel'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import SectionTitle from '../../components/SectionTitle/SectionTitle'

function Home() {
  useDocumentTitle('')
  const services = [
    { id: 'web', icon: <Code2 size={40} />, title: "Desarrollo Web", description: "Sitios web modernos y aplicaciones con las últimas tecnologías.", features: ["React, Vue, Angular", "Rendimiento optimizado", "Responsive design"], price: "Desde $999" },
    { id: 'mobile', icon: <Smartphone size={40} />, title: "Apps Móviles", description: "Aplicaciones nativas e híbridas para iOS y Android.", features: ["iOS y Android", "UX optimizado", "Push notifications"], price: "Desde $2,499" },
    { id: 'cloud', icon: <Cloud size={40} />, title: "Cloud", description: "Servicios en la nube escalables y seguros.", features: ["AWS, GCP, Azure", "Auto-escalado", "Monitoreo 24/7"], price: "Desde $399" },
  ]

  return (
    <div className="home">
      <Hero />

      <section className="section">
        <div className="container">
          <Features />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            title="Nuestros Servicios"
            subtitle="Ofrecemos soluciones tecnológicas completas para tu negocio"
          />
          <div className="grid-3">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            title="Qué dicen nuestros clientes"
            subtitle="La satisfacción de nuestros clientes es nuestra mejor recompensa"
          />
          <TestimonialsCarousel />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            title="Deja tu opinión"
            subtitle="Tu feedback nos ayuda a mejorar"
          />
          <div className="review-form-wrapper">
            <ReviewForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
