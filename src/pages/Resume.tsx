import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { caseStudies, profile, skillGroups } from '../data/portfolio'

const experienceBullets = [
    '학생·교사·운영자 역할이 분리된 LMS와 운영 Admin의 라우팅, 권한, 데이터 화면 개발',
    'CSAP 요구사항에 맞춘 접근 제어, 세션 만료, Web Crypto 기반 민감정보 암호화 대응',
    'Phaser 3 기반 학습 콘텐츠와 한글 입력·Tilemap·Canvas 렌더링 문제 해결',
    '외부 HTML 리소스 수집, S3/CDN 업로드, iframe 상태 연동 자동화',
]

export default function Resume() {
    return (
        <main className="min-h-screen bg-paper px-5 py-8 text-ink print:bg-white print:px-0 print:py-0 sm:px-8 sm:py-12">
            <div className="mx-auto max-w-5xl">
                <div className="mb-10 flex items-center justify-between gap-4 print:hidden">
                    <Link
                        to="/"
                        className="border-b-2 border-ink pb-1 text-[13px] font-black transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                        ← 포트폴리오
                    </Link>
                    <button
                        type="button"
                        onClick={() => window.print()}
                        className="bg-ink px-5 py-3 text-[13px] font-black text-paper transition-colors hover:bg-accent hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                        PDF / 인쇄
                    </button>
                </div>

                <article className="border-t-8 border-ink bg-paper print:border-t-4 print:bg-white">
                    <header className="grid gap-8 border-b border-ink/30 py-10 md:grid-cols-[minmax(0,1fr)_260px] md:gap-12 print:py-6">
                        <div>
                            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-accent">Frontend engineer</p>
                            <h1 className="mt-3 text-5xl font-black tracking-[-0.06em] sm:text-6xl">{profile.name}</h1>
                            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-ink/65">{profile.resumeSummary}</p>
                        </div>
                        <address className="not-italic md:text-right">
                            <p className="text-[13px] font-bold text-ink/55">{profile.phone}</p>
                            <a
                                href={`mailto:${profile.email}`}
                                className="mt-1 block text-[13px] font-bold underline underline-offset-4 hover:text-accent"
                            >
                                {profile.email}
                            </a>
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-1 block text-[13px] font-bold underline underline-offset-4 hover:text-accent"
                            >
                                github.com/ShinByoungWoo
                            </a>
                        </address>
                    </header>

                    <ResumeSection number="01" title="경력">
                        <div className="grid gap-6 md:grid-cols-[180px_minmax(0,1fr)]">
                            <div>
                                <h3 className="text-xl font-black tracking-[-0.025em]">{profile.company}</h3>
                                <p className="mt-1 text-[12px] font-black text-accent">{profile.period}</p>
                            </div>
                            <div>
                                <p className="text-[14px] leading-7 text-ink/60">{profile.companyIntro}</p>
                                <ul className="mt-5 space-y-3">
                                    {experienceBullets.map(bullet => (
                                        <ResumeBullet key={bullet}>{bullet}</ResumeBullet>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </ResumeSection>

                    <ResumeSection number="02" title="주요 프로젝트">
                        <div className="space-y-12">
                            {caseStudies.map(project => (
                                <section key={project.id} className="border-t border-ink/25 pt-6 first:border-t-0 first:pt-0">
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-accent">
                                                {project.category}
                                            </p>
                                            <h3 className="mt-2 text-xl font-black tracking-[-0.025em]">{project.subtitle}</h3>
                                        </div>
                                        <p className="shrink-0 text-[12px] font-bold text-ink/45">{project.period}</p>
                                    </div>
                                    <p className="mt-4 max-w-3xl text-[14px] leading-7 text-ink/60">{project.summary}</p>
                                    <ul className="mt-5 space-y-3">
                                        {project.resumeBullets.map(bullet => (
                                            <ResumeBullet key={bullet}>{bullet}</ResumeBullet>
                                        ))}
                                    </ul>
                                    <p className="mt-5 text-[12px] font-bold text-ink/42">
                                        {project.choices.map(choice => choice.name).join(' · ')}
                                    </p>
                                </section>
                            ))}
                        </div>
                    </ResumeSection>

                    <ResumeSection number="03" title="기술 범위">
                        <div className="space-y-5">
                            {skillGroups.map(group => (
                                <div key={group.category} className="grid gap-2 sm:grid-cols-[180px_minmax(0,1fr)]">
                                    <p className="text-[13px] font-black">{group.category}</p>
                                    <p className="text-[13px] leading-6 text-ink/58">{group.items.join(' · ')}</p>
                                </div>
                            ))}
                        </div>
                    </ResumeSection>

                    <ResumeSection number="04" title="학력">
                        <div className="space-y-3 text-[14px] leading-6 text-ink/60">
                            <p>
                                <span className="font-black text-ink">전남과학대학교</span> · 호텔관광학과 졸업
                            </p>
                            <p>
                                <span className="font-black text-ink">한국방송통신대학교</span> · 재학 중
                            </p>
                        </div>
                    </ResumeSection>
                </article>
            </div>
        </main>
    )
}

function ResumeSection({ number, title, children }: { number: string; title: string; children: ReactNode }) {
    return (
        <section className="grid gap-7 border-b border-ink/30 py-10 last:border-b-0 md:grid-cols-[180px_minmax(0,1fr)] print:py-7">
            <div>
                <p className="text-[10px] font-black text-accent">{number}</p>
                <h2 className="mt-2 text-[13px] font-black uppercase tracking-[0.16em]">{title}</h2>
            </div>
            <div>{children}</div>
        </section>
    )
}

function ResumeBullet({ children }: { children: ReactNode }) {
    return (
        <li className="grid grid-cols-[12px_minmax(0,1fr)] gap-3 text-[13px] leading-6 text-ink/62">
            <span className="mt-[9px] h-1.5 w-1.5 bg-accent" aria-hidden="true" />
            <span>{children}</span>
        </li>
    )
}
