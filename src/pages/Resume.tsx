import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { caseStudies, profile, proofPoints, skillGroups } from '../data/portfolio'

const experienceBullets = [
    '역할별 라우팅과 사용자 서비스·운영 도구의 데이터 화면을 실제 업무 흐름에 맞게 구현했습니다.',
    '인증 만료, 공격 입력, 만료 URL, iframe 통신처럼 브라우저 경계에서 생기는 문제를 공통 흐름으로 정리했습니다.',
    'Phaser·Canvas 콘텐츠의 입력과 렌더링 병목을 분석해 40fps까지 떨어지던 화면을 60fps로 개선했습니다.',
]

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
                            <p className="mt-5 max-w-2xl text-[14px] leading-7 text-ink/70 print:mt-4 print:leading-6">
                                {profile.resumeSummary}
                            </p>
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
                        </address>
                    </header>

                    <dl className="grid border-b border-ink/20 sm:grid-cols-3 print:grid-cols-3">
                        {proofPoints.map(point => (
                            <div
                                key={point.label}
                                className="border-b border-ink/15 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0 print:border-b-0 print:border-r print:px-4 print:first:pl-0 print:last:border-r-0"
                            >
                                <dt className="text-[11px] font-black text-ink/50">{point.label}</dt>
                                <dd className="mt-1 text-xl font-black tracking-[-0.035em]">{point.value}</dd>
                            </div>
                        ))}
                    </dl>

                    <ResumeSection title="경력">
                        <div className="grid gap-5 sm:grid-cols-[190px_minmax(0,1fr)] print:grid-cols-[170px_minmax(0,1fr)]">
                            <div>
                                <h3 className="text-lg font-black tracking-[-0.025em]">{profile.company}</h3>
                                <p className="mt-1 text-[12px] font-black text-accent">Frontend Engineer</p>
                                <p className="mt-1 text-[12px] font-bold text-ink/45">{profile.period}</p>
                            </div>
                            <div>
                                <p className="text-[13px] leading-6 text-ink/65">{profile.companyIntro}</p>
                                <ul className="mt-4 space-y-2.5">
                                    {experienceBullets.map(bullet => (
                                        <ResumeBullet key={bullet}>{bullet}</ResumeBullet>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </ResumeSection>

                    <ResumeSection title="주요 프로젝트">
                        <div className="space-y-9 print:space-y-7">
                            {caseStudies.map(project => (
                                <article key={project.id} className="break-inside-avoid border-t border-ink/25 pt-6 first:border-t-0 first:pt-0">
                                    <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between print:flex-row print:items-start print:justify-between">
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-accent">{project.category}</p>
                                            <h3 className="mt-1 text-lg font-black tracking-[-0.025em]">{project.subtitle}</h3>
                                        </div>
                                        <p className="shrink-0 text-[12px] font-bold text-ink/45">{project.period}</p>
                                    </header>

                                    <dl className="mt-5 space-y-4 print:mt-4 print:space-y-3">
                                        <ResumeDetail label="문제">
                                            <p>{project.summary}</p>
                                        </ResumeDetail>
                                        <ResumeDetail label="선택 이유">
                                            <ul className="space-y-2">
                                                {project.choices.map(choice => (
                                                    <li key={choice.name}>
                                                        <strong className="font-black text-ink">{choice.name}</strong>
                                                        <span className="text-ink/40"> — </span>
                                                        {choice.reason}
                                                    </li>
                                                ))}
                                            </ul>
                                        </ResumeDetail>
                                        <ResumeDetail label="실행">
                                            <ul className="space-y-2">
                                                {project.resumeBullets.map(bullet => (
                                                    <ResumeBullet key={bullet}>{bullet}</ResumeBullet>
                                                ))}
                                            </ul>
                                        </ResumeDetail>
                                        <ResumeDetail label="결과">
                                            <p>
                                                <strong className="mr-2 font-black text-accent">{project.result.value}</strong>
                                                {project.result.label}
                                            </p>
                                        </ResumeDetail>
                                    </dl>
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
                                        <p className="mt-1 text-[12px] leading-5 text-ink/58">{group.items.join(' · ')}</p>
                                    </div>
                                ))}
                            </div>
                        </ResumeSection>

                        <ResumeSection title="학력">
                            <div className="space-y-4 text-[13px] leading-6 text-ink/65">
                                <p>
                                    <strong className="block font-black text-ink">한국방송통신대학교</strong>
                                    재학 중
                                </p>
                                <p>
                                    <strong className="block font-black text-ink">전남과학대학교</strong>
                                    호텔관광학과 졸업
                                </p>
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
        <section className="border-b border-ink/20 py-8 last:border-b-0 print:py-6">
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
