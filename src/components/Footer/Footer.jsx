import { Link } from 'react-router-dom'
import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { GithubIcon } from '../Icons/BrandIcons'
import Logo from '../Logo/Logo'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  const sections = [
    {
      title: 'Enlaces',
      links: [
        { path: '/', label: 'Inicio' },
        { path: '/about', label: 'Nosotros' },
        { path: '/services', label: 'Servicios' },
        { path: '/projects', label: 'Proyectos' },
        { path: '/contact', label: 'Contacto' },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { label: 'birdstackmx@gmail.com', icon: <Mail size={14} />, href: 'mailto:birdstackmx@gmail.com' },
        { label: 'WhatsApp', icon: <MessageCircle size={14} />, href: 'https://wa.me/522228410082' },
        { label: 'GitHub', icon: <GithubIcon size={14} />, href: 'https://github.com/Trejo14' },
        { label: 'Puebla, México', icon: <MapPin size={14} />, href: null },
      ],
    },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <Logo text="BirdStack" />
            <p className="footer__description">
              Transformamos ideas en soluciones digitales innovadoras.
            </p>
          </div>

          {sections.map((section) => (
            <div key={section.title} className="footer__section">
              <h4 className="footer__title">{section.title}</h4>
              <ul className="footer__links">
                {section.links.map((link) => (
                  <li key={`${section.title}-${link.label}`}>
                    {link.href ? (
                      <a
                        href={link.href}
                        className="footer__link"
                        {...(link.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                      >
                        {link.icon && <span className="footer__link-icon">{link.icon}</span>}
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.path} className="footer__link">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} BirdStack. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
