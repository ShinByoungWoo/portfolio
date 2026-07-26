import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'about', label: 'Overview' },
  { id: 'projects', label: 'Work' },
  { id: 'achievements', label: 'Strengths' },
  { id: 'games', label: 'Interactive' },
  { id: 'contact', label: 'Contact' },
]

export default function PageNavigator() {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0
      setProgress(nextProgress)

      for (const section of [...SECTIONS].reverse()) {
        const el = document.getElementById(section.id)
        if (el && window.scrollY >= el.offsetTop - 180) {
          setActive(section.id)
          return
        }
      }
      setActive('')
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <aside
      className="fixed right-8 top-28 z-20 hidden w-40 text-[13px] min-[1680px]:block"
      aria-label="Page sections"
    >
      <div className="mb-3 border-l border-border pl-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-text-muted/70">Sections</p>
      </div>

      <nav className="relative border-l border-border pl-4">
        <div
          className="absolute -left-px top-0 w-px bg-primary/70 transition-[height] duration-200"
          style={{ height: `${progress}%` }}
          aria-hidden="true"
        />
        <div className="space-y-1">
          {SECTIONS.map(section => {
            const isActive = active === section.id
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`block py-1.5 leading-tight transition-colors ${
                  isActive ? 'font-semibold text-text-heading' : 'font-medium text-text-muted/70 hover:text-text-heading'
                }`}
              >
                {section.label}
              </a>
            )
          })}
        </div>
      </nav>
    </aside>
  )
}
