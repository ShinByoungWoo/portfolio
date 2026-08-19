import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/layout/Header'
import Contact from './components/sections/Contact'
import Experience from './components/sections/Experience'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Resume from './pages/Resume'

function Portfolio() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Projects />
                <Experience />
                <Contact />
            </main>
            <footer className="border-t border-paper/20 bg-ink px-5 py-7 text-paper/45 sm:px-8">
                <p className="mx-auto max-w-[1440px] text-[11px] font-bold uppercase tracking-[0.16em]">
                    <span>© 2026 Shin Byoungwoo</span>
                </p>
            </footer>
        </>
    )
}

export default function App() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
        </Routes>
    )
}
