import type { CaseStudy } from '../../types'
import ProjectEvidence from './ProjectEvidence'
import InteractiveMedia from './InteractiveMedia'

export default function ProjectCaseStudy({ project }: { project: CaseStudy }) {
    return (
        <article
            id={project.id}
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
                    <p className="mt-2 text-[13px] font-bold text-ink/60">
                        {project.period}
                    </p>
                </aside>
                <div>
                    <header data-reveal className="max-w-5xl">
                        <p className="text-[13px] font-black text-accent">
                            {project.subtitle}
                        </p>
                        <h3 className="mt-3 max-w-[26ch] text-[28px] font-black leading-[1.35] tracking-[-0.035em] text-ink sm:text-4xl">
                            {project.title}
                        </h3>
                        <p className="mt-5 max-w-4xl text-base leading-8 text-ink/80">
                            {project.summary}
                        </p>
                        {project.scope && (
                            <p className="mt-5 border-l-2 border-accent pl-4 text-[15px] leading-7 text-ink/80">
                                <strong className="mr-2 text-ink">담당 범위</strong>
                                {project.scope}
                            </p>
                        )}
                    </header>
                    <ProjectEvidence projectId={project.id} />
                    <ol className="mt-8 border-t border-ink/30">
                        {project.decisions.map((decision, index) => (
                            <li
                                data-reveal
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
                                            <p className="mt-2 text-base leading-8 text-ink/80">
                                                {decision.reason}
                                            </p>
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
                    <div data-reveal className="mt-10 grid border-y border-ink/25 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)]">
                        <dl className="py-7 lg:pr-10">
                            {project.choices.map(choice => (
                                <div
                                    key={choice.name}
                                    className="grid gap-2 border-b border-ink/15 py-4 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[130px_minmax(0,1fr)] sm:gap-6"
                                >
                                    <dt className="text-[13px] font-black text-ink">
                                        {choice.name}
                                    </dt>
                                    <dd className="text-[15px] leading-7 text-ink/75">
                                        {choice.reason}
                                    </dd>
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
    )
}
