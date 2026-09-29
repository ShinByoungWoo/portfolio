import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { caseStudies, education, experienceBullets, profile, skillGroups } from '../data/portfolio'

export default function Resume() {
    return (
        <main className="min-h-screen bg-paper px-4 py-6 text-ink print:bg-white print:px-0 print:py-0 sm:px-8 sm:py-10">
            <div className="mx-auto max-w-[960px]">
                <div className="mb-5 flex items-center justify-between gap-4 print:hidden">
                    <Link
                        to="/"
                        className="text-[13px] font-black underline decoration-2 underline-offset-4 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                        ← 포트폴리오
                    </Link>
                    <button
                        type="button"
                        onClick={() => window.print()}
                        className="bg-ink px-4 py-2.5 text-[13px] font-black text-white hover:bg-accent hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                        PDF / 인쇄
                    </button>
                </div>

                <article className="resume-document bg-white px-6 py-8 shadow-[0_12px_36px_rgba(23,23,20,0.08)] sm:px-10 sm:py-10 lg:px-14 lg:py-12 print:px-0 print:py-0 print:shadow-none">
                    <header className="border-b-2 border-ink pb-6">
                        <p className="text-[13px] font-bold text-ink/65">{profile.role} · {profile.period}</p>
                        <h1 className="mt-2 text-4xl font-black tracking-[-0.045em]">{profile.name}</h1>
                        <p className="mt-4 text-[14px] leading-7 text-ink/80">{profile.resumeSummary}</p>
                        <address className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[12px] not-italic text-ink/80">
                            <a href={`tel:${profile.phone.replaceAll('-', '')}`} className="hover:text-accent">{profile.phone}</a>
                            <a href={`mailto:${profile.email}`} className="underline underline-offset-4 hover:text-accent">{profile.email}</a>
                            <a href={profile.github} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-accent">github.com/ShinByoungWoo</a>
                            <a href={profile.portfolio} target="_blank" rel="noreferrer" className="break-all underline underline-offset-4 hover:text-accent">shinbyoungwoo.github.io/portfolio</a>
                        </address>
                    </header>

                    <ResumeSection title="경력">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1">
                            <h3 className="text-[17px] font-black">{profile.company}</h3>
                            <p className="text-[12px] text-ink/65">{profile.role} · {profile.period}</p>
                        </div>
                        <p className="mt-2 text-[13px] leading-6 text-ink/70">{profile.companyIntro}</p>
                        <ul className="mt-3 space-y-1.5">
                            {experienceBullets.map(bullet => <ResumeBullet key={bullet}>{bullet}</ResumeBullet>)}
                        </ul>
                    </ResumeSection>

                    <ResumeSection title="주요 프로젝트">
                        <div className="space-y-7 print:space-y-5">
                            {caseStudies.map(project => (
                                <article key={project.id} className="resume-project break-inside-avoid border-t border-ink/20 pt-5 first:border-t-0 first:pt-0">
                                    <header className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1">
                                        <h3 className="text-[17px] font-black tracking-[-0.025em]">{project.subtitle}</h3>
                                        <p className="text-[12px] text-ink/65">{project.period}</p>
                                    </header>
                                    <p className="mt-1 text-[12px] leading-5 text-ink/65">{project.stack.join(' · ')}</p>
                                    <p className="mt-2 text-[13px] leading-6 text-ink/80">
                                        <strong className="font-bold">담당: </strong>{project.role}
                                    </p>
                                    <ul className="mt-2 space-y-1.5">
                                        {project.resumeBullets.map(bullet => <ResumeBullet key={bullet}>{bullet}</ResumeBullet>)}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </ResumeSection>

                    <ResumeSection title="기술">
                        <dl className="space-y-2">
                            {skillGroups.map(group => (
                                <div key={group.category} className="grid gap-1 text-[12px] leading-5 sm:grid-cols-[120px_minmax(0,1fr)] print:grid-cols-[120px_minmax(0,1fr)]">
                                    <dt className="font-bold">{group.category}</dt>
                                    <dd className="text-ink/70">{group.items.join(' · ')}</dd>
                                </div>
                            ))}
                        </dl>
                    </ResumeSection>

                    <ResumeSection title="학력">
                        <ul className="space-y-2 text-[13px] leading-6 text-ink/70">
                            {education.map(item => (
                                <li key={item.school}><strong className="font-bold text-ink">{item.school}</strong> · {item.detail}</li>
                            ))}
                        </ul>
                    </ResumeSection>
                    <p className="mt-4 text-[11px] text-ink/60">최종 업데이트 {profile.updatedAt}</p>
                </article>
            </div>
        </main>
    )
}

function ResumeSection({ title, children }: { title: string; children: ReactNode }) {
    return (
        <section className="resume-section border-b border-ink/20 py-6 last:border-b-0 print:py-4">
            <h2 className="mb-4 text-[14px] font-black text-ink print:mb-3">{title}</h2>
            {children}
        </section>
    )
}

function ResumeBullet({ children }: { children: ReactNode }) {
    return (
        <li className="grid grid-cols-[8px_minmax(0,1fr)] gap-2 text-[13px] leading-6 text-ink/80">
            <span className="mt-[10px] h-1 w-1 bg-ink" aria-hidden="true" />
            <span>{children}</span>
        </li>
    )
}
