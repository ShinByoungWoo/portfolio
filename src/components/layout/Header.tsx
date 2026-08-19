import { Link } from 'react-router-dom'

const navItems = [
    { label: '작업', href: '#work' },
    { label: '경력', href: '#experience' },
    { label: '연락', href: '#contact' },
]

export default function Header() {
    return (
        <header className="fixed inset-x-0 top-0 z-40 border-b border-ink/15 bg-paper/95 backdrop-blur-md">
            <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8">
                <a href="#hero" className="group flex items-baseline gap-3" aria-label="맨 위로 이동">
                    <span className="text-[15px] font-black tracking-[-0.02em] text-ink">SBW</span>
                    <span className="hidden text-[11px] font-bold uppercase tracking-[0.18em] text-ink/45 transition-colors group-hover:text-accent sm:inline">
                        Frontend engineering
                    </span>
                </a>

                <div className="flex items-center gap-5 sm:gap-8">
                    <nav className="hidden items-center gap-7 md:flex" aria-label="포트폴리오 섹션">
                        {navItems.map(item => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-[13px] font-bold text-ink/60 underline-offset-4 transition-colors hover:text-accent hover:underline focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <Link
                        to="/resume"
                        className="border-l border-ink/20 pl-5 text-[13px] font-black text-ink transition-colors hover:text-accent focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:pl-8"
                    >
                        이력서 ↗
                    </Link>
                </div>
            </div>
        </header>
    )
}
