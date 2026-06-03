import { Code2, Smartphone, Cloud } from 'lucide-react'
import Hero from '../../components/Hero/Hero'
import Features from '../../components/Features/Features'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './Home.css'

function Home() {
  const services = [
    { icon: <Code2 size={40} />, title: "Desarrollo Web", description: "Sitios web modernos y aplicaciones con las últimas tecnologías.", features: ["React, Vue, Angular", "Rendimiento optimizado", "Responsive design"], price: "Desde $999" },
    { icon: <Smartphone size={40} />, title: "Apps Móviles", description: "Aplicaciones nativas e híbridas para iOS y Android.", features: ["iOS y Android", "UX optimizado", "Push notifications"], price: "Desde $2,499" },
    { icon: <Cloud size={40} />, title: "Cloud", description: "Servicios en la nube escalables y seguros.", features: ["AWS, GCP, Azure", "Auto-escalado", "Monitoreo 24/7"], price: "Desde $399" },
  ]

  const testimonials = [
    { quote: "BirdStack transformó completamente nuestra presencia digital. El equipo demostró un profesionalismo excepcional.", author: "María García", role: "CEO, StartUp Labs" },
    { quote: "Excelente servicio y atención al cliente. Nuestro proyecto fue entregado a tiempo y con calidad superior.", author: "Carlos Fernández", role: "Director, Tech Solutions" },
    { quote: "Recomendamos BirdStack sin dudarlo. Su equipo entendió perfectamente nuestras necesidades.", author: "Ana López", role: "Fundadora, Design Co" },
  ]

  return (
    <div className="home">
      <Hero 
        title="Transformamos tu visión en realidad digital"
        subtitle="Somos una empresa de tecnología especializada en crear soluciones digitales innovadoras que impulsan el crecimiento de tu negocio."
        ctaText="Contáctanos"
      />

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
          <div className="home__services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle 
            title="Qué dicen nuestros clientes" 
            subtitle="La satisfacción de nuestros clientes es nuestra mejor recompensa"
          />
          <div className="home__testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
