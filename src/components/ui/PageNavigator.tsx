import { useEffect, useMemo, useState } from 'react'

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

  const currentIndex = useMemo(() => {
    const activeIndex = SECTIONS.findIndex(section => section.id === active)
    return activeIndex < 0 ? 0 : activeIndex + 1
  }, [active])

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
    <aside className="fixed bottom-6 right-6 z-30 hidden w-60 rounded-lg border border-border bg-white/92 p-5 shadow-lg backdrop-blur lg:block">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-text-muted">Navigator</p>
        <p className="text-[13px] font-semibold text-primary">{currentIndex}/{SECTIONS.length}</p>
      </div>

      <div className="mb-4 h-2 overflow-hidden rounded-sm bg-surface-alt" aria-hidden="true">
        <div className="h-full bg-primary transition-[width] duration-200" style={{ width: `${progress}%` }} />
      </div>

      <div className="space-y-2">
        {SECTIONS.map(section => {
          const isActive = active === section.id
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`flex items-center gap-2 rounded-md px-2.5 py-2 text-[13px] font-medium transition-colors ${
                isActive ? 'bg-primary/10 text-primary' : 'text-text-muted hover:bg-surface hover:text-text-heading'
              }`}
            >
              <span className={`h-2 w-2 rounded-sm ${isActive ? 'bg-primary' : 'bg-border'}`} />
              {section.label}
            </a>
          )
        })}
      </div>
    </aside>
  )
}
