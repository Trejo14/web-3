import { useEffect, useState } from 'react'
import './CodeWindow.css'

// Cada línea es una lista de [texto, tipo de token]
const CODE = [
  [['const ', 'kw'], ['proyecto', 'var'], [' = ', 'op'], ['await ', 'kw'], ['birdstack', 'var'], ['.', 'op'], ['crear', 'fn'], ['({', 'op']],
  [['  cliente', 'prop'], [': ', 'op'], ["'Tu negocio'", 'str'], [',', 'op']],
  [['  tipo', 'prop'], [': ', 'op'], ["'Sitio web + Sistema'", 'str'], [',', 'op']],
  [['  stack', 'prop'], [': [', 'op'], ["'React'", 'str'], [', ', 'op'], ["'Node.js'", 'str'], [', ', 'op'], ["'PostgreSQL'", 'str'], ['],', 'op']],
  [['  diseño', 'prop'], [': ', 'op'], ["'Responsive'", 'str'], [',', 'op']],
  [['})', 'op']],
  [],
  [['await ', 'kw'], ['proyecto', 'var'], ['.', 'op'], ['lanzar', 'fn'], ['()', 'op']],
  [['// ✔ Listo para crecer', 'comment']],
]

const TOTAL_CHARS = CODE.reduce((sum, line) => sum + line.reduce((s, [text]) => s + text.length, 0) + 1, 0)

function CodeWindow() {
  const prefersReducedMotion = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [typed, setTyped] = useState(prefersReducedMotion ? TOTAL_CHARS : 0)

  useEffect(() => {
    if (typed >= TOTAL_CHARS) return
    const delay = typed === 0 ? 900 : 28 + Math.random() * 40
    const timer = setTimeout(() => setTyped((t) => t + 1), delay)
    return () => clearTimeout(timer)
  }, [typed])

  let remaining = typed
  const done = typed >= TOTAL_CHARS

  return (
    <div className="code-window" aria-hidden="true">
      <div className="code-window__bar">
        <span className="code-window__dot code-window__dot--red" />
        <span className="code-window__dot code-window__dot--yellow" />
        <span className="code-window__dot code-window__dot--green" />
        <span className="code-window__file">proyecto.js</span>
      </div>
      <pre className="code-window__body">
        {CODE.map((line, lineIndex) => {
          const lineLength = line.reduce((s, [text]) => s + text.length, 0)
          const visibleInLine = Math.max(0, Math.min(remaining, lineLength))
          const isCursorLine = !done && remaining >= 0 && remaining <= lineLength
          remaining -= lineLength + 1

          let left = visibleInLine
          return (
            <div key={lineIndex} className="code-window__line">
              <span className="code-window__number">{lineIndex + 1}</span>
              <code>
                {line.map(([text, type], i) => {
                  const shown = text.slice(0, Math.max(0, left))
                  left -= text.length
                  return shown ? <span key={i} className={`tok-${type}`}>{shown}</span> : null
                })}
                {(isCursorLine || (done && lineIndex === CODE.length - 1)) && <span className="code-window__cursor" />}
              </code>
            </div>
          )
        })}
      </pre>
      <div className={`code-window__toast ${done ? 'code-window__toast--visible' : ''}`}>
        <span className="code-window__toast-dot" /> Desplegado en producción
      </div>
    </div>
  )
}

export default CodeWindow
