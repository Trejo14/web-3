import { useState, useEffect } from 'react'

const GITHUB_USER = 'Trejo14'

// Repos ocultos del portafolio (por nombre exacto)
const HIDDEN_REPOS = [GITHUB_USER, 'WEB']

// Ficha personalizada por repo: reemplaza lo que viene de GitHub (title, description, tags, demo)
const PROJECT_OVERRIDES = {
  'web-3': {
    title: 'BirdStack',
    description: 'Nuestro sitio corporativo: SPA en React con API propia en Node.js, reseñas moderadas en PostgreSQL y formulario de contacto con EmailJS.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Railway'],
  },
  'pronosticos-mundial': {
    title: 'Pronósticos Mundial',
    description: 'Servicio en Python/Django que consume la API pública de ESPN para obtener datos deportivos, con despliegue en Docker.',
    tags: ['Python', 'Django', 'Docker'],
  },
}

// Imágenes opcionales por repo: { 'nombre-repo': '/projects/captura.png' }
const PROJECT_IMAGES = {}

// Se comparte entre páginas para no repetir la petición (GitHub limita a 60/hora sin token)
let reposPromise = null

function fetchRepos() {
  if (!reposPromise) {
    reposPromise = fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`)
        }
        return response.json()
      })
      .then((data) => data
        .filter(repo => !repo.fork && !repo.archived && !HIDDEN_REPOS.includes(repo.name))
        .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.pushed_at) - new Date(a.pushed_at))
        .map(repo => ({
          id: repo.id,
          title: repo.name.replace(/[-_]/g, ' '),
          description: repo.description || 'Sin descripción disponible.',
          language: repo.language,
          tags: [repo.language, ...(repo.topics || [])].filter(Boolean).slice(0, 4),
          link: repo.html_url,
          demo: repo.homepage || null,
          stars: repo.stargazers_count,
          image: PROJECT_IMAGES[repo.name] || null,
          ...PROJECT_OVERRIDES[repo.name],
        })))
      .catch((err) => {
        reposPromise = null
        throw err
      })
  }
  return reposPromise
}

function useGithubRepos() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    fetchRepos()
      .then((data) => { if (!cancelled) setProjects(data) })
      .catch((err) => { if (!cancelled) setError(err.message) })
      .finally(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [])

  return { projects, loading, error, githubUrl: `https://github.com/${GITHUB_USER}` }
}

export default useGithubRepos
