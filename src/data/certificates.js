// ─────────────────────────────────────────────────────────────
//  CERTIFICADOS
//
//  Cómo subir un certificado:
//    1. Copia el PDF a src/assets/certificados/
//       Usa un nombre claro, ej. "react-avanzado-platzi.pdf"
//    2. Listo: aparece solo en la página /certificados.
//
//  Opcional:
//    - Miniatura: pon una imagen con el MISMO nombre junto al PDF
//      (react-avanzado-platzi.png) y se usa como portada de la tarjeta.
//    - Datos extra: agrégalos en CERTIFICATE_INFO usando el nombre
//      del archivo sin ".pdf" como clave.
// ─────────────────────────────────────────────────────────────

const CERTIFICATE_INFO = {
  // 'react-avanzado-platzi': {
  //   title: 'React Avanzado',
  //   issuer: 'Platzi',
  //   date: '2025-08',      // AAAA-MM
  //   credentialUrl: '',    // enlace de verificación (opcional)
  // },
}

const pdfModules = import.meta.glob('../assets/certificados/*.{pdf,PDF}', {
  eager: true, query: '?url', import: 'default',
})
const thumbModules = import.meta.glob('../assets/certificados/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', {
  eager: true, query: '?url', import: 'default',
})

const baseName = (path) => path.split('/').pop().replace(/\.[^.]+$/, '')

const thumbs = Object.fromEntries(
  Object.entries(thumbModules).map(([path, url]) => [baseName(path), url]),
)

// "react-avanzado_platzi" → "React avanzado platzi"
const prettify = (name) => {
  const text = name.replace(/[-_]+/g, ' ').trim()
  return text.charAt(0).toUpperCase() + text.slice(1)
}

const certificates = Object.entries(pdfModules)
  .map(([path, url]) => {
    const id = baseName(path)
    const info = CERTIFICATE_INFO[id] || {}
    return {
      id,
      url,
      thumb: thumbs[id] || null,
      title: info.title || prettify(id),
      issuer: info.issuer || null,
      date: info.date || null,
      credentialUrl: info.credentialUrl || null,
    }
  })
  // Más recientes primero; los que no tienen fecha, al final por nombre
  .sort((a, b) => (b.date || '').localeCompare(a.date || '') || a.title.localeCompare(b.title))

export default certificates
