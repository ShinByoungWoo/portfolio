import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import GameShowcase from './components/sections/GameShowcase'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <>
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
