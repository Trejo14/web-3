import { Link, useLocation } from 'react-router-dom'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import './Navbar.css'

function Navbar() {
  const location = useLocation()
  
  const links = [
    { path: '/', label: 'Inicio' },
    { path: '/about', label: 'Nosotros' },
    { path: '/services', label: 'Servicios' },
    { path: '/projects', label: 'Proyectos' },
    { path: '/contact', label: 'Contacto' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar__container container">
        <Link to="/" className="navbar__logo">
          <Logo text="TechCorp" />
        </Link>
        
        <ul className="navbar__links">
          {links.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar__cta">
          <Link to="/contact">
            <Button variant="primary" size="small">Cotizar</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar