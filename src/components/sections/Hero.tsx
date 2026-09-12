import { Link } from 'react-router-dom'
import { profile, proofPoints } from '../../data/portfolio'

export default function Hero() {
    return (
        <section id="hero" className="border-b border-ink/20 bg-paper px-5 pb-12 pt-28 sm:px-8 sm:pb-16 sm:pt-32">
            <div className="mx-auto max-w-[1200px]">
                <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-20">
                    <div>
                        <p className="mb-7 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.22em] text-accent">
                            <span className="h-2 w-2 bg-accent" aria-hidden="true" />
                            Frontend engineer · Seoul
                        </p>

                        <h1 className="max-w-5xl text-[clamp(2.5rem,5.2vw,4.5rem)] font-black leading-[1.15] tracking-[-0.05em] text-ink">
                            학습의 경험부터
                            <span className="block text-accent">서비스 운영까지.</span>
                        </h1>
                    </div>

                    <aside className="border-t-4 border-ink pt-6">
                        <p className="text-[12px] font-black uppercase tracking-[0.18em] text-ink/45">
                            Currently
                        </p>
                        <p className="mt-4 text-2xl font-black leading-tight tracking-[-0.03em] text-ink">
                            {profile.company}
                        </p>
                        <p className="mt-1 text-[14px] font-bold text-accent">{profile.period}</p>
                        <p className="mt-6 text-[16px] leading-7 text-ink/70">
                            코딩·AI 교육 서비스의 프론트엔드를 개발하고 있습니다.
                        </p>
                    </aside>
                </div>

                <div className="mt-16 grid gap-10 border-t border-ink/20 pt-9 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-20">
                    <div className="max-w-3xl space-y-4 text-base leading-8 text-ink/80 sm:text-lg">
                        {profile.portfolioIntro.map(paragraph => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-start gap-x-6 gap-y-4 lg:flex-col lg:gap-3">
                        <a
                            href="#work"
                            className="inline-flex min-h-12 items-center bg-ink px-5 text-[13px] font-black text-paper transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                        >
                            선택한 작업 보기 ↓
                        </a>
                        <Link
                            to="/resume"
                            className="inline-flex min-h-12 items-center border-b-2 border-ink px-1 text-[13px] font-black text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                        >
                            전체 이력서 읽기 ↗
                        </Link>
                    </div>
                </div>

                <dl className="mt-16 grid border-y border-ink/20 sm:grid-cols-3">
                    {proofPoints.map((point, index) => (
                        <div
                            key={point.label}
                            className={`py-6 sm:px-7 ${index > 0 ? 'border-t border-ink/20 sm:border-l sm:border-t-0' : ''}`}
                        >
                            <dt className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                                <span className="text-3xl font-black tracking-[-0.04em] text-ink sm:text-4xl">
                                    {point.value}
                                </span>
                                <span className="text-[12px] font-black uppercase tracking-[0.12em] text-accent">
                                    {point.label}
                                </span>
                            </dt>
                            <dd className="mt-3 max-w-sm text-[15px] leading-7 text-ink/75">{point.detail}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}
