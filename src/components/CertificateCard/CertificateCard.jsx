import { useState } from 'react'
import PropTypes from 'prop-types'
import { Award, Eye, ExternalLink } from 'lucide-react'
import Lightbox from '../Lightbox/Lightbox'
import './CertificateCard.css'

const formatDate = (value) => {
  if (!value) return null
  const [year, month] = value.split('-').map(Number)
  if (!month) return String(year)
  return new Date(year, month - 1).toLocaleDateString('es-MX', { month: 'long', year: 'numeric' })
}

function CertificateCard({ title, url, thumb, issuer, date, credentialUrl }) {
  const [open, setOpen] = useState(false)
  const when = formatDate(date)

  return (
    <article className="cert-card">
      <button
        type="button"
        className="cert-card__preview"
        onClick={() => setOpen(true)}
        aria-label={`Ver certificado: ${title}`}
      >
        {thumb ? (
          <img src={thumb} alt="" loading="lazy" />
        ) : (
          <span className="cert-card__placeholder" aria-hidden="true">
            <Award size={40} strokeWidth={1.5} />
            <span className="cert-card__placeholder-label">PDF</span>
          </span>
        )}
        <span className="cert-card__overlay" aria-hidden="true">
          <Eye size={18} /> Ver certificado
        </span>
      </button>

      <div className="cert-card__body">
        <h3 className="cert-card__title">{title}</h3>
        {(issuer || when) && (
          <p className="cert-card__meta">
            {issuer}
            {issuer && when && ' · '}
            {when}
          </p>
        )}
        <div className="cert-card__footer">
          <button type="button" className="cert-card__link" onClick={() => setOpen(true)}>
            <Eye size={14} /> Ver
          </button>
          {credentialUrl && (
            <a href={credentialUrl} target="_blank" rel="noopener noreferrer" className="cert-card__link">
              Verificar <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      {open && <Lightbox title={title} pdf={url} onClose={() => setOpen(false)} />}
    </article>
  )
}

CertificateCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  thumb: PropTypes.string,
  issuer: PropTypes.string,
  date: PropTypes.string,
  credentialUrl: PropTypes.string,
}

export default CertificateCard
