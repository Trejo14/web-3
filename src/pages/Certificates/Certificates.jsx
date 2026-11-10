import { ArrowRight, Award } from 'lucide-react'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import certificates from '../../data/certificates'
import CertificateCard from '../../components/CertificateCard/CertificateCard'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Button from '../../components/Button/Button'
import Reveal from '../../components/Reveal/Reveal'
import './Certificates.css'

function Certificates() {
  useDocumentTitle('Certificados')

  return (
    <div className="certificates">
      <section className="certificates__hero section">
        <div className="container">
          <span className="badge">Formación</span>
          <h1 className="certificates__title">Certificados</h1>
          <p className="certificates__subtitle">
            Cursos y certificaciones que respaldan las tecnologías con las que trabajamos.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {certificates.length > 0 ? (
            <>
              <SectionTitle
                title={`${certificates.length} ${certificates.length === 1 ? 'certificado' : 'certificados'}`}
                subtitle="Haz clic en cualquiera para verlo completo"
              />
              <Reveal stagger className="grid-certificates">
                {certificates.map((cert) => (
                  <CertificateCard key={cert.id} {...cert} />
                ))}
              </Reveal>
            </>
          ) : (
            <div className="certificates__empty">
              <Award size={32} />
              <p>Pronto publicaremos aquí nuestros certificados.</p>
            </div>
          )}
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <Reveal className="cta-section__content">
            <h2>¿Listo para empezar tu proyecto?</h2>
            <p>Cuéntanos tu idea y te enviamos una propuesta sin compromiso.</p>
            <Button to="/contact" variant="primary" size="large">
              Cotizar proyecto <ArrowRight size={18} />
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

export default Certificates
