import { WhatsappIcon } from '../Icons/BrandIcons'
import { WHATSAPP_URL } from '../../config/contact'
import './WhatsAppButton.css'

function WhatsAppButton() {
  const message = encodeURIComponent('Hola BirdStack, me interesa cotizar un proyecto.')

  return (
    <a
      href={`${WHATSAPP_URL}?text=${message}`}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
    >
      <WhatsappIcon size={28} />
      <span className="whatsapp-button__label">¿Hablamos?</span>
    </a>
  )
}

export default WhatsAppButton
