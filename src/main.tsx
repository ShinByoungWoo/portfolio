import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// StrictMode 제외: Phaser 인스턴스 이중 마운트 방지
createRoot(document.getElementById('root')!).render(<App />)
