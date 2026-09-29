import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useRouteScroll() {
    const { pathname } = useLocation()

    useLayoutEffect(() => {
        // Native in-page links keep their smooth scrolling. Route entries must
        // honor deep links and must not animate all the way from the old page.
        let targetId = window.location.hash.slice(1)
        try {
            targetId = decodeURIComponent(targetId)
        } catch {
            // A malformed fragment is simply treated as an unmatched ID.
        }
        const target = targetId ? document.getElementById(targetId) : null
        if (target) {
            target.scrollIntoView({ behavior: 'instant', block: 'start' })
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
        }
    }, [pathname])
}
