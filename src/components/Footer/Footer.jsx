import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  const links = [
    { path: '/', label: 'Inicio' },
    { path: '/about', label: 'Nosotros' },
    { path: '/services', label: 'Servicios' },
    { path: '/projects', label: 'Proyectos' },
    { path: '/contact', label: 'Contacto' },
  ]

  const socialLinks = [
    { label: 'Facebook', icon: 'f' },
    { label: 'Twitter', icon: 'x' },
    { label: 'LinkedIn', icon: 'in' },
    { label: 'GitHub', icon: 'gh' },
  ]

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo text="TechCorp" />
            <p className="footer__description">
              Transformamos ideas en soluciones digitales innovadoras. 
              Tu éxito es nuestra misión.
            </p>
          </div>

          <div className="footer__section">
            <h4 className="footer__title">Enlaces</h4>
            <ul className="footer__links">
              {links.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__title">Contacto</h4>
            <ul className="footer__contact">
              <li>📧 info@techcorp.com</li>
              <li>📞 +1 234 567 890</li>
              <li>📍 Calle Principal 123, Ciudad</li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__title">Síguenos</h4>
            <div className="footer__social">
              {socialLinks.map((social) => (
                <a key={social.label} href="#" className="footer__social-link">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} TechCorp. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer