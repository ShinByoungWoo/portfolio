import { useState } from 'react'
import { caseStudies } from '../../data/portfolio'
import type { InteractiveClip } from '../../types'

export default function Projects() {
    return (
        <section id="work" className="bg-paper px-5 py-20 sm:px-8 sm:py-28">
            <div className="mx-auto max-w-[1440px]">
                <header className="grid gap-8 border-b-4 border-ink pb-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
                    <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.22em] text-accent">Selected work</p>
                        <h2 className="mt-3 text-5xl font-black tracking-[-0.055em] text-ink sm:text-6xl">대표 프로젝트</h2>
                    </div>
                    <div className="max-w-3xl lg:justify-self-end">
                        <p className="text-xl font-bold leading-8 tracking-[-0.025em] text-ink sm:text-2xl sm:leading-9">
                            사용자 진입부터 조회·실행·배포까지.
                        </p>
                        <p className="mt-3 max-w-2xl text-[15px] leading-7 text-ink/60">
                            프로젝트별 담당 범위와 구현 결과를 먼저 확인하고, 세부 설계와 선택 이유를 이어서 읽을 수 있습니다.
                        </p>
                    </div>
                </header>

                <nav className="border-b border-ink/20" aria-label="작업 목록">
                    {caseStudies.map(project => (
                        <a
                            key={project.id}
                            href={`#${project.id}`}
                            className="group grid gap-2 border-t border-ink/15 py-5 transition-colors first:border-t-0 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-accent sm:grid-cols-[40px_minmax(0,1fr)_minmax(0,1fr)] sm:items-center sm:gap-6 sm:px-3"
                        >
                            <span className="text-[11px] font-black text-accent">{project.number}</span>
                            <span className="text-[15px] font-black leading-6">{project.subtitle}</span>
                            <span className="text-[14px] leading-6 text-ink/65">{project.result.value} ↗</span>
                        </a>
                    ))}
                </nav>

                <div>
                    {caseStudies.map(project => (
                        <article
                            id={project.id}
                            key={project.id}
                            className="scroll-mt-24 border-b border-ink/25 py-14 sm:py-20"
                        >
                            <div className="grid gap-10 lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[260px_minmax(0,1fr)]">
                                <aside className="lg:sticky lg:top-28 lg:self-start">
                                    <p className="text-7xl font-black leading-none tracking-[-0.08em] text-accent">
                                        {project.number}
                                    </p>
                                    <p className="mt-5 text-[11px] font-black uppercase tracking-[0.2em] text-ink/45">
                                        {project.category}
                                    </p>
                                    <p className="mt-2 text-[13px] font-bold text-ink/60">{project.period}</p>
                                </aside>

                                <div>
                                    <header className="max-w-5xl">
                                        <p className="text-[13px] font-black text-accent">{project.subtitle}</p>
                                        <h3 className="mt-4 text-3xl font-black leading-[1.25] tracking-[-0.045em] text-ink sm:text-4xl lg:text-5xl">
                                            {project.title}
                                        </h3>
                                        <dl className="mt-6 space-y-2 border-l-2 border-accent pl-5 text-[14px] leading-7">
                                            <div>
                                                <dt className="font-black text-ink">담당 범위</dt>
                                                <dd className="text-ink/70">{project.role}</dd>
                                            </div>
                                            <div>
                                                <dt className="font-black text-ink">사용 기술</dt>
                                                <dd className="text-ink/70">{project.stack.join(' · ')}</dd>
                                            </div>
                                        </dl>
                                        <p className="mt-6 max-w-4xl text-[16px] leading-8 text-ink/70 sm:text-[17px]">
                                            {project.summary}
                                        </p>
                                    </header>

                                    <div className="mt-8 border-y border-ink/25 bg-ink px-6 py-6 text-paper sm:px-8">
                                        <p className="text-[11px] font-black text-paper/65">구현 결과</p>
                                        <p className="mt-2 text-2xl font-black tracking-[-0.035em] text-accent sm:text-3xl">{project.result.value}</p>
                                        <p className="mt-3 text-[15px] leading-7 text-paper/85">{project.result.label}</p>
                                    </div>

                                    <details className="mt-6">
                                        <summary className="cursor-pointer py-4 text-[15px] font-black text-ink underline decoration-ink/30 underline-offset-4 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                                            설계와 선택 이유 읽기
                                        </summary>
                                        <ol className="mt-4 border-t border-ink/30">
                                            {project.decisions.map((decision, index) => (
                                                <li
                                                    key={decision.question}
                                                    className="grid gap-5 border-b border-ink/20 py-8 md:grid-cols-[52px_minmax(0,1fr)] md:gap-8"
                                                >
                                                    <span className="text-[12px] font-black text-accent">
                                                        {String(index + 1).padStart(2, '0')}
                                                    </span>
                                                    <div>
                                                        <h4 className="max-w-4xl text-xl font-black leading-8 tracking-[-0.025em] text-ink sm:text-2xl">
                                                            {decision.question}
                                                        </h4>
                                                        <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-10">
                                                            <div>
                                                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-ink/40">
                                                                    선택 이유
                                                                </p>
                                                                <p className="mt-2 text-[15px] leading-7 text-ink/65">{decision.reason}</p>
                                                            </div>
                                                            <div>
                                                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-ink/40">
                                                                    구현
                                                                </p>
                                                                <p className="mt-2 text-[15px] leading-7 text-ink/65">
                                                                    {decision.implementation}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ol>

                                        <dl className="mt-6 border-b border-ink/25 py-6">
                                            {project.choices.map(choice => (
                                                <div
                                                    key={choice.name}
                                                    className="grid gap-2 border-b border-ink/15 py-4 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[130px_minmax(0,1fr)] sm:gap-6"
                                                >
                                                    <dt className="text-[13px] font-black text-ink">{choice.name}</dt>
                                                    <dd className="text-[14px] leading-6 text-ink/58">{choice.reason}</dd>
                                                </div>
                                            ))}
                                        </dl>
                                    </details>

                                    {project.media && <InteractiveMedia clips={project.media} />}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

function InteractiveMedia({ clips }: { clips: InteractiveClip[] }) {
    const [activeId, setActiveId] = useState(clips[0].id)
    const activeClip = clips.find(clip => clip.id === activeId) ?? clips[0]

    return (
        <div className="mt-14 border-y-4 border-ink bg-ink text-paper">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_340px]">
                <div className="border-b border-paper/20 lg:border-b-0 lg:border-r">
                    <video
                        key={activeClip.src}
                        src={activeClip.src}
                        controls
                        playsInline
                        preload="metadata"
                        className="aspect-video h-full w-full bg-black object-contain"
                    />
                </div>

                <div className="flex flex-col">
                    <div className="p-6 sm:p-8">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">
                            {activeClip.label}
                        </p>
                        <h4 className="mt-3 text-2xl font-black tracking-[-0.035em] text-paper">
                            {activeClip.title}
                        </h4>
                        <p className="mt-4 text-[14px] leading-7 text-paper/65">{activeClip.description}</p>
                    </div>

                    <div className="mt-auto border-t border-paper/20">
                        {clips.map((clip, index) => (
                            <button
                                key={clip.id}
                                type="button"
                                onClick={() => setActiveId(clip.id)}
                                aria-pressed={clip.id === activeClip.id}
                                className={`flex w-full items-center justify-between gap-5 border-b border-paper/15 px-6 py-4 text-left text-[13px] font-bold transition-colors last:border-b-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-accent sm:px-8 ${
                                    clip.id === activeClip.id
                                        ? 'bg-accent text-ink'
                                        : 'text-paper/65 hover:bg-paper/10 hover:text-paper'
                                }`}
                            >
                                <span>{clip.title}</span>
                                <span className="text-[10px]">{String(index + 1).padStart(2, '0')}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
