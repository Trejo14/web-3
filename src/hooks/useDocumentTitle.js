import { useEffect } from 'react'

function useDocumentTitle(title) {
  useEffect(() => {
    const prev = document.title
    document.title = title ? `${title} | BirdStack` : 'BirdStack - Soluciones Digitales'
    return () => { document.title = prev }
  }, [title])
}

export default useDocumentTitle
