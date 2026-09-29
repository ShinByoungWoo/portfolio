import { useId, useState, type ReactNode } from 'react'

export interface DemoStep {
    label: string
    description: string
}

interface EvidenceDemoProps {
    label: string
    steps: readonly [DemoStep, ...DemoStep[]]
    scopeItems: readonly string[]
    scopeNote: string
    children: (active: number) => ReactNode
}

export default function EvidenceDemo({ label, steps, scopeItems, scopeNote, children }: EvidenceDemoProps) {
    const [active, setActive] = useState(0)
    const id = useId()
    const step = steps[active]

    return (
        <section data-reveal aria-labelledby={`${id}-title`} className="mt-10 overflow-hidden border-2 border-ink bg-white shadow-[8px_8px_0_#171714]">
            <header className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-ink bg-ink px-4 py-3 text-paper sm:px-5">
                <h4 id={`${id}-title`} className="text-[11px] font-black uppercase tracking-[0.16em]">{label}</h4>
                <p className="text-[10px] font-bold text-paper/55">실제 구현 흐름 기반 - 데이터와 화면은 포트폴리오용 재구성</p>
            </header>
            <div className="flex items-center gap-2 border-b border-ink/15 bg-[#fff2ed] px-4 py-2.5 text-[11px] font-black text-ink/70 sm:px-5">
                <span className="border border-accent bg-white px-2 py-1 text-[9px] uppercase tracking-[0.12em] text-accent">Click</span>
                아래 단계 버튼을 눌러 구현 흐름을 확인해 보세요.
            </div>
            <div role="group" aria-label={`${label} 단계 선택`} className="grid border-b border-ink/20 sm:grid-cols-3">
                {steps.map((item, index) => (
                    <button
                        key={item.label}
                        type="button"
                        aria-pressed={active === index}
                        aria-controls={`${id}-preview`}
                        onClick={() => setActive(index)}
                        className={`group flex min-h-14 cursor-pointer items-center justify-between gap-3 border-r border-ink/15 px-4 text-left text-[12px] font-black transition-colors last:border-r-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-accent ${
                            active === index ? 'bg-accent text-ink' : 'bg-white text-ink/60 hover:bg-[#fff2ed] hover:text-ink'
                        }`}
                    >
                        <span>{String(index + 1).padStart(2, '0')} - {item.label}</span>
                        <span aria-hidden="true">{active === index ? '●' : '→'}</span>
                    </button>
                ))}
            </div>
            <div id={`${id}-preview`} role="region" aria-label={`${label}: ${step.label}`}>
                {children(active)}
            </div>
            <div aria-live="polite" aria-atomic="true" className="grid gap-2 border-t-2 border-ink bg-[#fff2ed] px-5 py-4 sm:grid-cols-[80px_minmax(0,1fr)]">
                <p className="text-[11px] font-black text-accent">STEP {String(active + 1).padStart(2, '0')}</p>
                <p className="text-[13px] font-bold leading-6 text-ink/70">{step.description}</p>
            </div>
            <div className="grid border-t border-ink/15 bg-white sm:grid-cols-[repeat(2,minmax(0,190px))_1fr]">
                {scopeItems.map(item => (
                    <p key={item} className="border-b border-ink/10 px-5 py-3 text-[12px] font-black sm:border-b-0 sm:border-r">{item}</p>
                ))}
                <p className="px-5 py-3 text-[11px] leading-5 text-ink/45 sm:text-right">{scopeNote}</p>
            </div>
        </section>
    )
}
