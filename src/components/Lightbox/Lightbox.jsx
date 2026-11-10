import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { X, ChevronLeft, ChevronRight, Download, ExternalLink } from 'lucide-react'
import './Lightbox.css'

// Visor a pantalla completa. Muestra una galería de imágenes (`images`) o un PDF (`pdf`).
function Lightbox({ title, images = [], pdf, startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex)
  const closeRef = useRef(null)
  const count = images.length

  useEffect(() => {
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (count > 1 && e.key === 'ArrowRight') setIndex(i => (i + 1) % count)
      if (count > 1 && e.key === 'ArrowLeft') setIndex(i => (i - 1 + count) % count)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
      previousFocus?.focus?.()
    }
  }, [count, onClose])

  const go = (delta) => setIndex(i => (i + delta + count) % count)

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
      <div className="lightbox__panel" onClick={(e) => e.stopPropagation()}>
        <header className="lightbox__header">
          <h2 className="lightbox__title">
            {title}
            {count > 1 && <span className="lightbox__counter">{index + 1} / {count}</span>}
          </h2>
          <div className="lightbox__actions">
            {pdf && (
              <>
                <a href={pdf} target="_blank" rel="noopener noreferrer" className="lightbox__icon-btn" aria-label="Abrir PDF en otra pestaña">
                  <ExternalLink size={18} />
                </a>
                <a href={pdf} download className="lightbox__icon-btn" aria-label="Descargar PDF">
                  <Download size={18} />
                </a>
              </>
            )}
            <button ref={closeRef} type="button" className="lightbox__icon-btn" onClick={onClose} aria-label="Cerrar">
              <X size={20} />
            </button>
          </div>
        </header>

        <div className="lightbox__body">
          {pdf ? (
            <object data={pdf} type="application/pdf" className="lightbox__pdf" aria-label={title}>
              <div className="lightbox__fallback">
                <p>Tu navegador no puede mostrar el PDF aquí.</p>
                <a href={pdf} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--medium">
                  Abrir certificado <ExternalLink size={16} />
                </a>
              </div>
            </object>
          ) : (
            <img key={images[index]} src={images[index]} alt={`${title}, pantalla ${index + 1} de ${count}`} className="lightbox__image" />
          )}

          {count > 1 && (
            <>
              <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={() => go(-1)} aria-label="Pantalla anterior">
                <ChevronLeft size={24} />
              </button>
              <button type="button" className="lightbox__nav lightbox__nav--next" onClick={() => go(1)} aria-label="Pantalla siguiente">
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {count > 1 && (
          <div className="lightbox__thumbs">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                className={`lightbox__thumb ${i === index ? 'lightbox__thumb--active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Ver pantalla ${i + 1}`}
                aria-current={i === index}
              >
                <img src={src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body,
  )
}

Lightbox.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  pdf: PropTypes.string,
  startIndex: PropTypes.number,
  onClose: PropTypes.func.isRequired,
}

export default Lightbox
