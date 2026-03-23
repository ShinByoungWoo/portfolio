import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import GameShowcase from './components/sections/GameShowcase'
import Contact from './components/sections/Contact'
import Resume from './pages/Resume'

function Portfolio() {
  const [mouse, setMouse] = useState({ x: -1000, y: -1000 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      {/* 전역 마우스 스포트라이트 — fixed, pointer-events-none */}
      <div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(150px circle at ${mouse.x}px ${mouse.y}px, rgba(91,63,248,0.055), transparent 55%)`,
          transition: 'background 0.08s linear',
        }}
      />

      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <GameShowcase />
        <Contact />
      </main>
      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-sm text-text-muted">
          <span>© 2026 신병우</span>
          <span>Built with React · TypeScript · Tailwind CSS</span>
        </div>
      </footer>
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  )
}
