import TeamCard from '../../components/TeamCard/TeamCard'
import Features from '../../components/Features/Features'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Button from '../../components/Button/Button'
import './About.css'

function About() {
  const team = [
    { name: "Daniel Trejo", role: "CEO & Fundador", socialLinks: [{ icon: "in", link: "#" }, { icon: "tw", link: "#" }] },
    { name: "Adolfo Salinas", role: "CTO", socialLinks: [{ icon: "in", link: "#" }, { icon: "gh", link: "#" }] },
    { name: "Angel Eliseo", role: "Lead Developer", socialLinks: [{ icon: "gh", link: "#" }, { icon: "in", link: "#" }] },
    { name: "Jose Luis Resendiz", role: "UX Designer", socialLinks: [{ icon: "in", link: "#" }, { icon: "dr", link: "#" }] },
  ]

  const values = [
    { icon: "🤝", title: "Compromiso", description: "Nos comprometemos al 100% con cada proyecto" },
    { icon: "🎯", title: "Calidad", description: "Estándares altos en cada entrega" },
    { icon: "💡", title: "Innovación", description: "Siempre buscando nuevas soluciones" },
    { icon: "❤️", title: "Pasión", description: "Amamos lo que hacemos" },
  ]

  return (
    <div className="about">
      <section className="about__hero section">
        <div className="container">
          <div className="about__hero-content">
            <h1 className="about__title">Sobre TechCorp</h1>
            <p className="about__description">
              Founded in 2015, TechCorp is a leading technology company specialized in digital 
              solutions. Our mission is to transform businesses through innovation and technology.
            </p>
            <Button variant="primary" size="large">Únete a nuestro equipo</Button>
          </div>
        </div>
      </section>

      <section className="about__mission section">
        <div className="container">
          <div className="about__mission-grid">
            <div className="about__mission-item">
              <h3>Misión</h3>
              <p>Transformar businesses through innovative technological solutions that drive growth and digital success.</p>
            </div>
            <div className="about__mission-item">
              <h3>Visión</h3>
              <p>Ser la empresa líder en soluciones digitales, recognized por la calidad y excelencia en cada proyecto.</p>
            </div>
            <div className="about__mission-item">
              <h3>Valores</h3>
              <p>Innovation, calidad, compromiso y focus en el cliente son nuestros pilares fundamentales.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about__team section">
        <div className="container">
          <SectionTitle 
            title="Nuestro Equipo" 
            subtitle="Conoce a las personas detrás de TechCorp"
          />
          <div className="about__team-grid">
            {team.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      <section className="about__values section">
        <div className="container">
          <SectionTitle 
            title="Nuestros Valores" 
            subtitle="Los principios que guían nuestro trabajo"
          />
          <Features items={values} />
        </div>
      </section>
    </div>
  )
}

export default About