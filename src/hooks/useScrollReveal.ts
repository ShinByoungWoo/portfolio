import { useLayoutEffect, useRef } from 'react'

/** One observer for the page; markup stays readable when motion is unavailable. */
export function useScrollReveal() {
    const ref = useRef<HTMLElement>(null)

    useLayoutEffect(() => {
        const root = ref.current
        const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
        if (!root || !('IntersectionObserver' in window) || !Element.prototype.animate) return

        const elements = [...root.querySelectorAll<HTMLElement>('[data-reveal]')]
        const animations = new Map<HTMLElement, Animation>()
        const reveal = (element: HTMLElement, immediate = false) => {
            if (!element.hasAttribute('data-reveal-pending')) return
            element.removeAttribute('data-reveal-pending')
            observer.unobserve(element)
            if (immediate || preference.matches) return

            const requestedDelay = Number(element.dataset.revealDelay ?? 0)
            const delay = window.innerWidth < 640 || !Number.isFinite(requestedDelay)
                ? 0 : Math.min(240, Math.max(0, requestedDelay))
            const animation = element.animate([
                { opacity: 0, transform: 'translateY(24px)' },
                { opacity: 1, transform: 'translateY(0)' },
            ], { duration: 640, delay, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'backwards' })
            animations.set(element, animation)
            animation.onfinish = () => animations.delete(element)
        }
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) reveal(entry.target as HTMLElement)
            })
        }, { threshold: 0, rootMargin: '0px 0px -32px 0px' })

        if (!preference.matches) {
            elements.forEach(element => {
                // Restored scroll positions and anchor jumps must not hide past content.
                if (element.getBoundingClientRect().bottom <= 0) return
                element.setAttribute('data-reveal-pending', '')
                observer.observe(element)
            })
        }
        const showAll = () => {
            elements.forEach(element => reveal(element, true))
            animations.forEach(animation => animation.cancel())
            animations.clear()
            observer.disconnect()
        }
        const onPreferenceChange = () => {
            if (preference.matches) showAll()
        }
        const onFocus = (event: FocusEvent) => {
            if (!(event.target instanceof Element)) return
            // Reveal every ancestor as well, if a future layout nests groups.
            let element = event.target.closest<HTMLElement>('[data-reveal]')
            while (element && root.contains(element)) {
                reveal(element, true)
                animations.get(element)?.cancel()
                animations.delete(element)
                element = element.parentElement?.closest<HTMLElement>('[data-reveal]') ?? null
            }
        }
        root.addEventListener('focusin', onFocus)
        preference.addEventListener('change', onPreferenceChange)
        window.addEventListener('beforeprint', showAll)
        return () => {
            observer.disconnect()
            animations.forEach(animation => animation.cancel())
            elements.forEach(element => element.removeAttribute('data-reveal-pending'))
            root.removeEventListener('focusin', onFocus)
            preference.removeEventListener('change', onPreferenceChange)
            window.removeEventListener('beforeprint', showAll)
        }
    }, [])

    return ref
}
