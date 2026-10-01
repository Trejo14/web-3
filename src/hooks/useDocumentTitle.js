import { useEffect } from 'react'

function useDocumentTitle(title) {
  useEffect(() => {
    const prev = document.title
    document.title = title ? `${title} | BirdStack` : 'BirdStack - Software a la medida'
    return () => { document.title = prev }
  }, [title])
}

export default useDocumentTitle
