import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './Reveal.css'

// Anima su contenido al entrar en pantalla. Con `stagger`, anima cada hijo con un pequeño desfase.
function Reveal({ as: Tag = 'div', className = '', stagger = false, children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const base = stagger ? 'reveal-group' : 'reveal'

  return (
    <Tag ref={ref} className={`${base} ${visible ? 'is-visible' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}

Reveal.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  stagger: PropTypes.bool,
  children: PropTypes.node,
}

export default Reveal
