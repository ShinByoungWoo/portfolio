import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Achievements from './components/sections/Achievements'
import GameShowcase from './components/sections/GameShowcase'
import Contact from './components/sections/Contact'
import PageNavigator from './components/ui/PageNavigator'
import Resume from './pages/Resume'

function Portfolio() {
  return (
    <>
      <Header />
      <PageNavigator />
      <main>
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <GameShowcase />
        <Contact />
      </main>
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-2 text-[14px] text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 신병우</span>
          <span>React · TypeScript · Vite</span>
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
