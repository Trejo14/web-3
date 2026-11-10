// ─────────────────────────────────────────────────────────────
//  PROYECTOS DEL PORTAFOLIO
//
//  Cómo subir capturas: cópialas TODAS a src/assets/proyectos/
//  (una sola carpeta) y nómbralas con el proyecto + un número:
//
//      misayeres-1.png
//      metro-arquitectura-1.png
//      birdcam-1.png
//      sistema-fiscal-1.png
//      portal-cfdi-1.png
//      recordatorios-clientes-1.png
//      comprobantes-cuotas-1.png
//      birdstack-1.png
//      pronosticos-mundial-1.png
//      elite-spaces-1.png
//      mi-tienda-1.jpg      ← proyecto nuevo: aparece solo
//
//  - El número define el orden; la #1 es la portada.
//  - `repo`: enlace al código (solo repos públicos). `demo`: sitio en vivo.
//  - Si el nombre coincide con un `slug` de abajo, usa su título,
//    descripción y etiquetas. Si no, se crea el proyecto
//    automáticamente con el nombre del archivo como título
//    (luego puedes agregarlo aquí para ponerle descripción).
// ─────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    slug: 'misayeres',
    title: 'Mis Ayeres',
    description: 'Sitio y sistema de gestión para un restaurante: menú, promociones, noches temáticas con cantantes y reservaciones en línea. Incluye panel de administración con dashboard, control de mesas, clientes, eventos, quejas y mensajes, con inicio de sesión seguro y subida de imágenes.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    repo: 'https://github.com/Trejo14/misayeres',
    demo: 'https://misayeres.com.mx',
  },
  {
    slug: 'birdcam',
    title: 'Birdcam · Photoboot',
    description: 'Cabina de fotos con IA para eventos: app de escritorio que captura, transforma la foto con IA, genera un QR para descargarla e imprime al instante en impresora térmica. Funciona sin internet y con varias cabinas; incluye sitio con suscripciones, panel de administración y galería por evento.',
    tags: ['React', 'Tauri', 'Next.js', 'NestJS'],
    repo: 'https://github.com/Trejo14/photoboot',
    demo: 'https://landing-production-8720.up.railway.app',
  },
  {
    slug: 'metro-arquitectura',
    title: 'Metro Arquitectura',
    description: 'Presentación web interactiva sobre arquitecturas de software con forma de mapa del metro: cada línea es una familia de arquitecturas y cada estación una arquitectura. Incluye diagramas C4, simulador de tráfico "hora pico", línea del tiempo, quiz y modo claro/oscuro.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    repo: 'https://github.com/Trejo14/metro-arquitectura',
    demo: null,
  },
  {
    slug: 'sistema-fiscal',
    title: 'Sistema de Control Fiscal',
    confidential: true,
    description: 'Sistema web para un despacho fiscal: registro de contribuyentes, declaraciones, créditos fiscales y cálculo automático de recargos y actualizaciones con INPC. Lee PDFs oficiales para capturar datos sin teclearlos y genera informes. Implementado en varias sedes.',
    tags: ['C#', 'ASP.NET Core', 'SQL Server', 'Docker'],
    demo: null,
  },
  {
    slug: 'portal-cfdi',
    title: 'Portal de Comprobantes Fiscales',
    confidential: true,
    description: 'Plataforma para un grupo empresarial que centraliza facturas electrónicas (XML y PDF), relaciona pagos y cancelaciones, y da seguimiento a declaraciones anuales por empresa, con roles de usuario y varias organizaciones.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Python'],
    demo: null,
  },
  {
    slug: 'recordatorios-clientes',
    title: 'Recordatorios a Clientes',
    confidential: true,
    description: 'Aplicación para enviar recordatorios mensuales por correo a la cartera de clientes de varias empresas: importación desde Excel, configuración de correo por empresa y envíos programados.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    demo: null,
  },
  {
    slug: 'comprobantes-cuotas',
    title: 'Comprobantes de Cuotas',
    confidential: true,
    description: 'Sistema para emitir comprobantes de pago de cuotas con folio automático, descarga en PDF, envío por WhatsApp o correo, historial editable y exportación a Excel.',
    tags: ['Next.js', 'Prisma', 'Tailwind'],
    demo: null,
  },
  {
    slug: 'birdstack',
    title: 'BirdStack',
    description: 'Nuestro sitio corporativo: SPA en React con API propia en Node.js, portafolio, certificados, reseñas moderadas guardadas en PostgreSQL y formulario de contacto con EmailJS.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Railway'],
    repo: 'https://github.com/Trejo14/web-3',
    demo: 'https://birdstack.net',
  },
  {
    slug: 'pronosticos-mundial',
    title: 'Pronósticos Mundial',
    description: 'API REST en Django que recopila y guarda datos deportivos de ESPN (equipos, partidos y resultados de más de 15 deportes), con actualización automática en segundo plano y documentación interactiva de sus endpoints.',
    tags: ['Python', 'Django', 'PostgreSQL', 'Docker'],
    repo: 'https://github.com/Trejo14/pronosticos-mundial',
    demo: null,
  },
  {
    slug: 'elite-spaces',
    title: 'Elite Spaces',
    description: 'Sitio web para una inmobiliaria boutique: presentación de la empresa, catálogo de propiedades en venta, blog y formularios de contacto y compra. Hecho a mano con HTML5 y CSS3.',
    tags: ['HTML', 'CSS'],
    repo: 'https://github.com/Trejo14/WEB',
    demo: 'https://trejo14.github.io/WEB/',
  },
]

// Vite detecta automáticamente las imágenes de src/assets/proyectos/
// (también funcionan subcarpetas: proyectos/<slug>/captura.png)
const imageModules = import.meta.glob(
  '../assets/proyectos/**/*.{png,jpg,jpeg,webp,avif,PNG,JPG,JPEG,WEBP}',
  { eager: true, query: '?url', import: 'default' },
)

// "Pronósticos Mundial" → "pronosticos-mundial"
const toSlug = (text) => text
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .toLowerCase().trim()
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

// "mi-tienda" → "Mi tienda"
const toTitle = (slug) => {
  const text = slug.replace(/-/g, ' ')
  return text.charAt(0).toUpperCase() + text.slice(1)
}

const screensBySlug = {}
for (const [path, url] of Object.entries(imageModules)) {
  const rel = path.split('/assets/proyectos/')[1]
  const parts = rel.split('/')
  const file = parts.pop()
  const name = file.replace(/\.[^.]+$/, '')
  // En subcarpeta: el proyecto es la carpeta. Suelto: el nombre sin el número final.
  const slug = toSlug(parts[0] || name.replace(/[\s._-]*(\(\d+\)|\d+)$/, '')) || 'proyecto'
  ;(screensBySlug[slug] ||= []).push({ file, url })
}

const known = new Set(PROJECTS.map(p => p.slug))
const discovered = Object.keys(screensBySlug)
  .filter(slug => !known.has(slug))
  .sort()
  .map(slug => ({ slug, title: toTitle(slug), description: '', tags: [], repo: null, demo: null }))

const projects = [...PROJECTS, ...discovered].map((project) => ({
  ...project,
  screens: (screensBySlug[project.slug] || [])
    .sort((a, b) => a.file.localeCompare(b.file, undefined, { numeric: true }))
    .map(({ url }) => url),
}))

export default projects
