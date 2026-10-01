import { Code2, Smartphone, Cloud, ArrowRight } from 'lucide-react'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import useGithubRepos from '../../hooks/useGithubRepos'
import Hero from '../../components/Hero/Hero'
import Features from '../../components/Features/Features'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import TestimonialsCarousel from '../../components/TestimonialsCarousel/TestimonialsCarousel'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import Button from '../../components/Button/Button'
import './Home.css'

function Home() {
  useDocumentTitle('')
  const { projects, loading, error } = useGithubRepos()
  const featured = projects.slice(0, 3)
  const services = [
    { id: 'web', icon: <Code2 size={40} />, title: "Desarrollo Web", description: "Sitios web modernos y aplicaciones con las últimas tecnologías.", features: ["React, Vue, Angular", "Rendimiento optimizado", "Responsive design"], actionText: "Cotizar" },
    { id: 'mobile', icon: <Smartphone size={40} />, title: "Apps Móviles", description: "Aplicaciones nativas e híbridas para iOS y Android.", features: ["iOS y Android", "UX optimizado", "Push notifications"], actionText: "Cotizar" },
    { id: 'cloud', icon: <Cloud size={40} />, title: "Cloud", description: "Servicios en la nube escalables y seguros.", features: ["AWS, GCP, Azure", "Auto-escalado", "Monitoreo 24/7"], actionText: "Cotizar" },
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
            title="¿Qué podemos construir para ti?"
            subtitle="Desde tu primera página web hasta el sistema que automatiza tu operación"
          />
          <div className="grid-3">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {!loading && !error && featured.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionTitle
              title="Proyectos destacados"
              subtitle="Una muestra de nuestro trabajo reciente"
            />
            <div className="grid-projects">
              {featured.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
            <div className="home__more">
              <Button to="/projects" variant="outline">
                Ver todos los proyectos <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </section>
      )}

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

      <section className="cta-section">
        <div className="container">
          <div className="cta-section__content">
            <h2>¿Tienes un proyecto en mente?</h2>
            <p>Agenda una consulta gratuita y conviértelo en realidad.</p>
            <Button to="/contact" variant="primary" size="large">
              Hablemos <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
