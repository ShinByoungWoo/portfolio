import { useState } from 'react'
import { additionalCaseStudies, featuredCaseStudies } from '../../data/portfolio'
import type { InteractiveClip } from '../../types'
import ProjectEvidence from './ProjectEvidence'

const productMap = [
    { user: '학생', flow: '학습 콘텐츠 → 이어하기', project: 'LMS / Canvas' },
    { user: '교사', flow: '코스 → 리포트 → 수업 제어', project: 'Web LMS' },
    { user: '운영자', flow: '계정 관리 → 콘텐츠 등록', project: 'Admin / CMS' },
]

export default function Projects() {
    return (
        <section id="work" className="bg-paper px-5 py-14 sm:px-8 sm:py-20">
            <div className="mx-auto max-w-[1200px]">
                <header className="grid gap-8 border-b-4 border-ink pb-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
                    <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.22em] text-accent">Selected work</p>
                        <h2 className="mt-3 text-[32px] font-black tracking-[-0.04em] text-ink sm:text-[40px]">작업 기록</h2>
                    </div>
                    <div className="max-w-3xl lg:justify-self-end">
                        <p className="text-xl font-bold leading-8 tracking-[-0.025em] text-ink sm:text-2xl sm:leading-9">
                            개발과 운영에서 해결한 문제들입니다.
                        </p>
                        <p className="mt-3 max-w-2xl text-base leading-7 text-ink/75">
                            각 프로젝트에서 맡은 범위와 구현 과정, 사용 중 발견한 문제를 어떻게 개선했는지 정리했습니다.
                        </p>
                    </div>
                </header>

                <div className="grid border-b-4 border-ink md:grid-cols-3" aria-label="제품 사용자와 담당 영역">
                    {productMap.map((item, index) => (
                        <div key={item.user} className={`py-6 md:px-6 ${index > 0 ? 'border-t border-ink/20 md:border-l md:border-t-0' : ''}`}>
                            <div className="flex items-baseline justify-between gap-4">
                                <p className="text-xl font-black">{item.user}</p>
                                <p className="text-[10px] font-black uppercase tracking-[0.12em] text-accent">{item.project}</p>
                            </div>
                            <p className="mt-3 text-[14px] leading-6 text-ink/65">{item.flow}</p>
                        </div>
                    ))}
                </div>

                <nav className="grid border-b border-ink/20 md:grid-cols-2 xl:grid-cols-4" aria-label="작업 목록">
                    {featuredCaseStudies.map((project, index) => (
                        <a
                            key={project.id}
                            href={`#${project.id}`}
                            className={`group flex min-h-28 items-end justify-between gap-5 py-5 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-accent md:px-5 ${
                                index > 0 ? 'border-t border-ink/20' : ''
                            } ${index === 1 ? 'md:border-t-0' : ''} ${index % 2 === 1 ? 'md:border-l' : ''} xl:border-t-0 ${index === 0 ? 'xl:border-l-0' : 'xl:border-l'}`}
                        >
                            <span className="max-w-[12rem] text-[13px] font-black leading-5">{project.subtitle}</span>
                            <span className="text-[11px] font-black text-ink/35 transition-colors group-hover:text-accent">
                                {project.number}
                            </span>
                        </a>
                    ))}
                </nav>

                <div>
                    {featuredCaseStudies.map(project => (
                        <article
                            id={project.id}
                            key={project.id}
                            className="scroll-mt-24 border-b border-ink/25 py-12 sm:py-16"
                        >
                            <div className="grid gap-6 lg:grid-cols-[150px_minmax(0,1fr)] lg:gap-10">
                                <aside className="lg:sticky lg:top-28 lg:self-start">
                                    <p className="text-4xl font-black leading-none tracking-[-0.04em] text-accent">
                                        {project.number}
                                    </p>
                                    <p className="mt-4 text-[13px] font-bold uppercase tracking-[0.08em] text-ink/70">
                                        {project.category}
                                    </p>
                                    <p className="mt-2 text-[13px] font-bold text-ink/60">{project.period}</p>
                                </aside>

                                <div>
                                    <header className="max-w-5xl">
                                        <p className="text-[13px] font-black text-accent">{project.subtitle}</p>
                                        <h3 className="mt-3 max-w-[26ch] text-[28px] font-black leading-[1.35] tracking-[-0.035em] text-ink sm:text-4xl">
                                            {project.title}
                                        </h3>
                                        <p className="mt-5 max-w-4xl text-base leading-8 text-ink/80">
                                            {project.summary}
                                        </p>
                                        {project.scope && (
                                            <p className="mt-5 border-l-2 border-accent pl-4 text-[15px] leading-7 text-ink/80">
                                                <strong className="mr-2 text-ink">담당 범위</strong>{project.scope}
                                            </p>
                                        )}
                                    </header>

                                    <ProjectEvidence projectId={project.id} />

                                    <ol className="mt-8 border-t border-ink/30">
                                        {project.decisions.map((decision, index) => (
                                            <li
                                                key={decision.question}
                                                className="grid gap-5 border-b border-ink/20 py-8 md:grid-cols-[52px_minmax(0,1fr)] md:gap-8"
                                            >
                                                <span className="text-[12px] font-black text-accent">
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                                <div>
                                                    <h4 className="max-w-4xl text-lg font-bold leading-8 tracking-[-0.02em] text-ink sm:text-xl">
                                                        {decision.question}
                                                    </h4>
                                                    <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-10">
                                                        <div>
                                                            <p className="text-[13px] font-bold text-ink/70">
                                                                문제와 판단
                                                            </p>
                                                            <p className="mt-2 text-base leading-8 text-ink/80">{decision.reason}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-[13px] font-bold text-ink/70">
                                                                구현
                                                            </p>
                                                            <p className="mt-2 text-base leading-8 text-ink/80">
                                                                {decision.implementation}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ol>

                                    {project.media && <InteractiveMedia clips={project.media} />}

                                    <div className="mt-10 grid border-y border-ink/25 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)]">
                                        <dl className="py-7 lg:pr-10">
                                            {project.choices.map(choice => (
                                                <div
                                                    key={choice.name}
                                                    className="grid gap-2 border-b border-ink/15 py-4 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[130px_minmax(0,1fr)] sm:gap-6"
                                                >
                                                    <dt className="text-[13px] font-black text-ink">{choice.name}</dt>
                                                    <dd className="text-[15px] leading-7 text-ink/75">{choice.reason}</dd>
                                                </div>
                                            ))}
                                        </dl>

                                        <div className="bg-ink px-7 py-8 text-paper lg:px-9">
                                            <p className="text-[13px] font-bold text-paper/75">
                                                결과
                                            </p>
                                            <p className="mt-3 text-2xl font-bold tracking-[-0.03em] text-accent sm:text-[28px]">
                                                {project.result.value}
                                            </p>
                                            <p className="mt-4 max-w-lg text-[15px] leading-7 text-paper/72">
                                                {project.result.label}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <aside className="border-b border-ink/25 py-12 sm:py-16" aria-labelledby="additional-work-title">
                    <div className="grid gap-8 lg:grid-cols-[150px_minmax(0,1fr)] lg:gap-10">
                        <div>
                            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-accent">Additional</p>
                            <h3 id="additional-work-title" className="mt-2 text-2xl font-black">함께한 작업</h3>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                            {additionalCaseStudies.map(project => (
                                <article key={project.id} className="border border-ink/25 bg-white p-5 sm:p-6">
                                    <div className="flex items-start justify-between gap-4">
                                        <h4 className="font-black">{project.subtitle}</h4>
                                        <p className="shrink-0 text-[11px] font-bold text-ink/40">{project.period}</p>
                                    </div>
                                    <p className="mt-4 text-[14px] leading-7 text-ink/70">{project.resumeBullets[0]}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </aside>
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
                        muted
                        playsInline
                        preload="metadata"
                        onLoadedMetadata={event => {
                            event.currentTarget.volume = 0.1
                        }}
                        onVolumeChange={event => {
                            if (!event.currentTarget.muted && event.currentTarget.volume > 0.1) {
                                event.currentTarget.volume = 0.1
                            }
                        }}
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
