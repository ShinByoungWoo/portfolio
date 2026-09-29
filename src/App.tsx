import { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Header from './components/layout/Header'
import Contact from './components/sections/Contact'
import Experience from './components/sections/Experience'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Resume from './pages/Resume'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useRouteScroll } from './hooks/useRouteScroll'
import ProjectDetails from './pages/ProjectDetails'
import { caseStudies } from './data/portfolio'

function Portfolio() {
    const revealRef = useScrollReveal()
    const { hash } = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        const project = caseStudies.find(item => `#${item.id}` === hash)
        if (project) navigate(`/work/${project.id}`, { replace: true })
    }, [hash, navigate])
    return (
        <>
            <Header />
            <main ref={revealRef}>
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
    useRouteScroll()

    return (
        <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/work/:projectId" element={<ProjectDetails />} />
        </Routes>
    )
}
