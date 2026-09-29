import { useEffect, useRef, useState } from 'react'

interface SectionLink {
    href: string
}

/** Pass a stable list so scroll listeners do not restart on each render. */
export function useScrollNavigation(items: readonly SectionLink[]) {
    const [activeSection, setActiveSection] = useState('')
    const progressRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let frame = 0
        const sections = items.map(item => document.querySelector<HTMLElement>(item.href))
        const update = () => {
            frame = 0
            const distance = document.documentElement.scrollHeight - window.innerHeight
            const progress = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0
            if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`
            let current = ''
            sections.forEach(section => {
                if (section && section.getBoundingClientRect().top <= 160) current = `#${section.id}`
            })
            if (progress >= 0.999) current = '#contact'
            setActiveSection(current)
        }
        const schedule = () => {
            if (!frame) frame = window.requestAnimationFrame(update)
        }
        const resize = typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(schedule)
        resize?.observe(document.body)
        window.addEventListener('scroll', schedule, { passive: true })
        window.addEventListener('resize', schedule)
        update()
        return () => {
            window.cancelAnimationFrame(frame)
            resize?.disconnect()
            window.removeEventListener('scroll', schedule)
            window.removeEventListener('resize', schedule)
        }
    }, [items])

    return { activeSection, progressRef }
}
