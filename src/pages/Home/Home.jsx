import Hero from '../../components/Hero/Hero'
import Features from '../../components/Features/Features'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './Home.css'

function Home() {
  const services = [
    { icon: "🌐", title: "Desarrollo Web", description: "Sitios web modernos y aplicaciones web progresivas con las últimas tecnologías.", price: "Desde $999" },
    { icon: "📱", title: "Apps Móviles", description: "Aplicaciones nativas e híbridas para iOS y Android.", price: "Desde $2,499" },
    { icon: "☁️", title: "Cloud", description: "Servicios en la nube escalables y seguros.", price: "Desde $399" },
  ]

  const testimonials = [
    { quote: "TechCorp transformó completamente nuestra presencia digital. El equipo demostró un profesionalismo excepcional.", author: "María García", role: "CEO, StartUp Labs" },
    { quote: "Excelente servicio y atención al cliente. nostoros proyecto fue entregado a tiempo y con calidad superior.", author: "Carlos Fernández", role: "Director, Tech Solutions" },
    { quote: "Recomendamos TechCorp sin dudarlo. Su equipo entendió perfectamente nuestras necesidades.", author: "Ana López", role: "Fundadora, Design Co" },
  ]

  return (
    <div className="home">
      <Hero 
        title="Transformamos tu visión en realidad digital"
        subtitle="Somos una empresa de tecnología especializada en crear soluciones digitales innovadoras que impulsan el crecimiento de tu negocio."
        ctaText="Contáctanos"
      />

      <section className="home__features section">
        <div className="container">
          <Features />
        </div>
      </section>

      <section className="home__services section">
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

      <section className="home__testimonials section">
        <div className="container">
          <SectionTitle 
            title="Qué dicen nuestros clientes" 
            subtitle="La satisfacción de nuestros clientes es notre mejor recompensa"
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