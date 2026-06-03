import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import './Navbar.css'

function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { path: '/', label: 'Inicio' },
    { path: '/about', label: 'Nosotros' },
    { path: '/services', label: 'Servicios' },
    { path: '/projects', label: 'Proyectos' },
    { path: '/contact', label: 'Contacto' },
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <div className="navbar__container container">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <Logo text="BirdStack" />
        </Link>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
          <ul className="navbar__links">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar__cta">
            <Link to="/contact" onClick={closeMenu}>
              <Button variant="primary" size="small">Cotizar</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
