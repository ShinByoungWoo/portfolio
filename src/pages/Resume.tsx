import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { additionalCaseStudies, education, experienceBullets, featuredCaseStudies, profile, skillGroups } from '../data/portfolio'

export default function Resume() {
    return (
        <main className="min-h-screen bg-paper px-4 py-6 text-ink print:bg-white print:px-0 print:py-0 sm:px-8 sm:py-10">
            <div className="mx-auto max-w-[960px]">
                <div className="mb-5 flex items-center justify-between gap-4 print:hidden">
                    <Link
                        to="/"
                        className="text-[13px] font-black underline decoration-2 underline-offset-4 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                        ← 포트폴리오
                    </Link>
                    <button
                        type="button"
                        onClick={() => window.print()}
                        className="bg-ink px-4 py-2.5 text-[13px] font-black text-white transition-colors hover:bg-accent hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                        PDF / 인쇄
                    </button>
                </div>

                <article className="bg-white px-6 py-8 shadow-[0_12px_36px_rgba(23,23,20,0.08)] print:px-0 print:py-0 print:shadow-none sm:px-10 sm:py-10 lg:px-14 lg:py-12">
                    <header className="grid gap-7 border-b-2 border-ink pb-8 md:grid-cols-[minmax(0,1fr)_240px] md:gap-10 print:grid-cols-[minmax(0,1fr)_220px] print:gap-8 print:pb-6">
                        <div>
                            <p className="text-[12px] font-black uppercase tracking-[0.16em] text-accent">Frontend Engineer</p>
                            <h1 className="mt-2 text-4xl font-black tracking-[-0.055em] sm:text-5xl print:text-4xl">{profile.name}</h1>
                            <div className="mt-4 max-w-2xl space-y-2 text-[14px] leading-6 text-ink/80">
                                {profile.portfolioIntro.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                            </div>
                            <p className="mt-4 text-[13px] font-bold text-ink">주력 실무 · {profile.primaryStack.join(' · ')}</p>
                        </div>

                        <address className="flex flex-col items-start gap-1 text-[13px] not-italic md:items-end md:text-right print:items-end print:text-right">
                            <a href={`tel:${profile.phone.replaceAll('-', '')}`} className="font-bold hover:text-accent">
                                {profile.phone}
                            </a>
                            <a href={`mailto:${profile.email}`} className="font-bold underline underline-offset-4 hover:text-accent">
                                {profile.email}
                            </a>
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noreferrer"
                                className="font-bold underline underline-offset-4 hover:text-accent"
                            >
                                github.com/ShinByoungWoo
                            </a>
                            <a href={profile.portfolioUrl} className="mt-2 break-all font-bold text-accent underline underline-offset-4">shinbyoungwoo.github.io/portfolio</a>
                        </address>
                    </header>

                    <ResumeSection title="경력">
                        <div className="grid gap-5 sm:grid-cols-[190px_minmax(0,1fr)] print:grid-cols-[170px_minmax(0,1fr)]">
                            <div>
                                <h3 className="text-lg font-black tracking-[-0.025em]">{profile.company}</h3>
                                <p className="mt-1 text-[12px] font-black text-accent">{profile.role}</p>
                                <p className="mt-1 text-[12px] font-bold text-ink/45">{profile.period}</p>
                            </div>
                            <div>
                                <p className="text-[13px] leading-6 text-ink/65">코딩·AI 교육 서비스 CODMOS 개발·운영</p>
                                <a href={profile.companySource} target="_blank" rel="noreferrer" className="mt-2 inline-block text-[12px] text-ink/65 underline underline-offset-4">공식 서비스 소개 ↗</a>
                                <ul className="mt-4 space-y-2.5">
                                    {experienceBullets.map(bullet => (
                                        <ResumeBullet key={bullet}>{bullet}</ResumeBullet>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </ResumeSection>

                    <ResumeSection title="주요 프로젝트">
                        <div className="space-y-7 print:space-y-5">
                            {featuredCaseStudies.map(project => (
                                <article key={project.id} className="break-inside-avoid border-t border-ink/25 pt-6 first:border-t-0 first:pt-0">
                                    <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between print:flex-row print:items-start print:justify-between">
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-accent">{project.category}</p>
                                            <h3 className="mt-1 text-lg font-black tracking-[-0.025em]"><a href={`${profile.portfolioUrl}work/${project.id}`} className="underline underline-offset-4">{project.subtitle} ↗</a></h3>
                                        </div>
                                        <p className="shrink-0 text-[12px] font-bold text-ink/45">{project.period}</p>
                                    </header>

                                    <p className="mt-2 text-[12px] font-bold text-ink/75">{project.stack.join(' · ')}</p>
                                    {project.scope && (
                                        <p className="mt-3 text-[12px] leading-6 text-ink/60">{project.scope}</p>
                                    )}
                                    <dl className="mt-5 space-y-4 print:mt-4 print:space-y-3">
                                        <ResumeDetail label="핵심 기여">
                                            <ul className="space-y-2">
                                                {project.resumeBullets.slice(0, 2).map(bullet => (
                                                    <ResumeBullet key={bullet}>{bullet}</ResumeBullet>
                                                ))}
                                            </ul>
                                        </ResumeDetail>
                                    </dl>
                                </article>
                            ))}
                        </div>
                    </ResumeSection>

                    <ResumeSection title="추가 경험">
                        <div className="grid gap-4">
                            {additionalCaseStudies.map(project => (
                                <article key={project.id} className="break-inside-avoid border-l-2 border-accent pl-4">
                                    <div className="flex items-start justify-between gap-3">
                                        <h3 className="text-[13px] font-black"><a href={`${profile.portfolioUrl}work/${project.id}`} className="underline underline-offset-4">{project.subtitle} ↗</a></h3>
                                        <p className="shrink-0 text-[11px] font-bold text-ink/40">{project.period}</p>
                                    </div>
                                    <p className="mt-2 text-[12px] leading-5 text-ink/62">{project.resumeBullets[0]}</p>
                                </article>
                            ))}
                        </div>
                    </ResumeSection>

                    <div className="grid gap-0 sm:grid-cols-2 sm:gap-10 print:grid-cols-2 print:gap-8">
                        <ResumeSection title="기술">
                            <div className="space-y-4">
                                {skillGroups.map(group => (
                                    <div key={group.category}>
                                        <p className="text-[12px] font-black">{group.category}</p>
                                        <p className="mt-1 text-[12px] leading-5 text-ink/58">{group.items.join(', ')}</p>
                                    </div>
                                ))}
                            </div>
                        </ResumeSection>

                        <ResumeSection title="학력">
                            <div className="space-y-4 text-[13px] leading-6 text-ink/65">
                                {education.map(item => (
                                    <p key={item.school}>
                                        <strong className="block font-black text-ink">{item.school}</strong>
                                        {item.detail}
                                    </p>
                                ))}
                            </div>
                        </ResumeSection>
                    </div>
                </article>
            </div>
        </main>
    )
}

function ResumeSection({ title, children }: { title: string; children: ReactNode }) {
    return (
        <section className="border-b border-ink/20 py-6 last:border-b-0 print:py-5">
            <h2 className="mb-5 text-[12px] font-black uppercase tracking-[0.16em] text-ink">{title}</h2>
            {children}
        </section>
    )
}

function ResumeDetail({ label, children }: { label: string; children: ReactNode }) {
    return (
        <div className="grid gap-1.5 text-[13px] leading-6 text-ink/65 sm:grid-cols-[78px_minmax(0,1fr)] print:grid-cols-[72px_minmax(0,1fr)]">
            <dt className="font-black text-ink">{label}</dt>
            <dd>{children}</dd>
        </div>
    )
}

function ResumeBullet({ children }: { children: ReactNode }) {
    return (
        <li className="grid grid-cols-[8px_minmax(0,1fr)] gap-2.5 text-[13px] leading-6 text-ink/65">
            <span className="mt-[10px] h-1 w-1 bg-accent" aria-hidden="true" />
            <span>{children}</span>
        </li>
    )
}
