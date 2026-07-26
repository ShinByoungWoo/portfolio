import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// Restore routes that GitHub Pages sends through public/404.html.
const searchParams = new URLSearchParams(window.location.search)
const redirectedPath = searchParams.get('path')

if (redirectedPath) {
  searchParams.delete('path')
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
  const query = searchParams.toString()
  const pathname = redirectedPath === '/' ? '/' : redirectedPath

  window.history.replaceState(
    null,
    '',
    `${basePath}${pathname}${query ? `?${query}` : ''}${window.location.hash}`,
  )
}

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <App />
  </BrowserRouter>,
)
