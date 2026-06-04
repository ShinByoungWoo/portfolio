import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'Overview', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Badges', href: '#achievements' },
  { label: 'Interactive', href: '#games' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32)

      const sections = ['contact', 'games', 'achievements', 'projects', 'about']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          return
        }
      }
      setActiveSection('')
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'border-b border-border bg-bg/90 shadow-sm backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3 group" aria-label="Go to top">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-text-heading text-xs font-bold text-white">
            BW
          </span>
          <span className="text-[15px] font-semibold text-text-heading transition-colors group-hover:text-primary">
            Frontend Portfolio
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Portfolio sections">
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`rounded-md px-3 py-2 text-[14px] font-medium transition-all ${
                activeSection === href.slice(1)
                  ? 'bg-primary text-white'
                  : 'text-text-muted hover:bg-surface hover:text-text-heading'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/resume"
            className="rounded-md border border-border bg-white px-4 py-2 text-[14px] font-semibold text-text-heading transition-colors hover:border-primary hover:text-primary"
          >
            Resume
          </Link>
          <a
            href="#contact"
            className="hidden rounded-md bg-text-heading px-4 py-2 text-[14px] font-semibold text-white transition-opacity hover:opacity-85 sm:inline-flex"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}
