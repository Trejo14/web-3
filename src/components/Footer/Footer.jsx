import { Link } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'
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
        { label: 'info@birdstack.dev', icon: <Mail size={14} />, href: 'mailto:info@birdstack.dev' },
        { label: 'Monterrey, México', icon: <MapPin size={14} />, href: null },
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
                  <li key={link.label}>
                    {link.href ? (
                      <a href={link.href} className="footer__link">
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
