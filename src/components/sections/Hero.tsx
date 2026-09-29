import { Link } from 'react-router-dom'
import { profile, proofPoints } from '../../data/portfolio'

export default function Hero() {
    return (
        <section id="hero" className="border-b border-ink/20 bg-paper px-5 pb-12 pt-28 sm:px-8 sm:pb-16 sm:pt-32">
            <div className="mx-auto max-w-[1440px]">
                <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-20">
                    <div>
                        <p className="mb-7 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.22em] text-accent">
                            <span className="h-2 w-2 bg-accent" aria-hidden="true" />
                            {profile.name} · {profile.role}
                        </p>

                        <h1 className="max-w-5xl text-[clamp(3rem,6.5vw,7rem)] font-black leading-[1.12] tracking-[-0.065em] text-ink">
                            사용자 화면부터
                            <span className="block text-accent">운영 도구까지.</span>
                        </h1>
                    </div>

                    <aside className="border-t-4 border-ink pt-6">
                        <p className="text-[12px] font-black uppercase tracking-[0.18em] text-ink/45">
                            현재 경력
                        </p>
                        <p className="mt-4 text-2xl font-black leading-tight tracking-[-0.03em] text-ink">
                            {profile.company}
                        </p>
                        <p className="mt-1 text-[14px] font-bold text-accent">{profile.period}</p>
                        <p className="mt-6 text-[16px] leading-7 text-ink/70">
                            사용자·관리자 서비스 개발부터 콘텐츠 배포 자동화까지 맡았습니다.
                        </p>
                    </aside>
                </div>

                <div className="mt-10 grid gap-8 border-t border-ink/20 pt-7 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-20">
                    <div className="max-w-3xl space-y-4 text-[17px] leading-8 text-ink/68 sm:text-[19px] sm:leading-9">
                        {profile.portfolioIntro.map(paragraph => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-start gap-x-6 gap-y-4 lg:flex-col lg:gap-3">
                        <a
                            href="#work"
                            className="inline-flex min-h-12 items-center bg-ink px-5 text-[13px] font-black text-paper transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                        >
                            대표 프로젝트 보기 ↓
                        </a>
                        <Link
                            to="/resume"
                            className="inline-flex min-h-12 items-center border-b-2 border-ink px-1 text-[13px] font-black text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                        >
                            이력서 · PDF 보기 ↗
                        </Link>
                    </div>
                </div>

                <dl className="mt-10 grid border-y border-ink/20 sm:grid-cols-3">
                    {proofPoints.map((point, index) => (
                        <div
                            key={point.label}
                            className={`py-6 sm:px-7 ${index > 0 ? 'border-t border-ink/20 sm:border-l sm:border-t-0' : ''}`}
                        >
                            <dt className="text-[12px] font-black tracking-[0.08em] text-accent">{point.label}</dt>
                            <dd className="mt-2 text-3xl font-black tracking-[-0.05em] text-ink sm:text-4xl">{point.value}</dd>
                            <dd className="mt-3 max-w-sm text-[14px] leading-6 text-ink/65">{point.detail}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}
