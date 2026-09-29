import { Link } from 'react-router-dom'
import { additionalCaseStudies, featuredCaseStudies, projectOverviews } from '../../data/portfolio'

export default function Projects() {
    return (
        <section id="work" className="px-5 py-12 sm:px-8 sm:py-16">
            <div className="mx-auto max-w-[1200px]">
                <header data-reveal className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-ink pb-6">
                    <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-accent">Selected work</p>
                        <h2 className="mt-2 text-3xl font-black tracking-[-0.04em]">세 가지 문제, 세 가지 경험</h2>
                    </div>
                    <p className="max-w-sm text-sm leading-6 text-ink/70">상태 관리, 운영 화면, 콘텐츠 자동화.<br />담당 범위와 구현 과정을 사례별로 정리했습니다.</p>
                </header>
                <div className="mt-6 grid gap-4 lg:grid-cols-3">
                    {featuredCaseStudies.map((project, index) => {
                        const overview = projectOverviews[project.id]
                        return (
                            <article key={project.id} data-reveal data-reveal-delay={index * 70} className="motion-card flex border border-ink/25 bg-white">
                                <Link to={`/work/${project.id}`} aria-label={`${project.subtitle} 상세 보기`} className="focus-ring group flex w-full flex-col p-6 sm:p-7">
                                    <div className="flex items-center justify-between gap-3 text-xs font-bold">
                                        <span className="text-accent">0{index + 1} / {project.category}</span>
                                        <span aria-hidden="true" className="text-xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
                                    </div>
                                    <p className="mt-6 text-xs font-bold text-ink/65">{project.subtitle}</p>
                                    <h3 className="mt-2 text-2xl font-black leading-8 tracking-[-0.035em]">{overview.focus}</h3>
                                    <dl className="mt-6 space-y-4 text-sm leading-6">
                                        <div><dt className="text-xs font-bold text-ink/60">문제</dt><dd className="mt-1">{overview.problem}</dd></div>
                                        <div><dt className="text-xs font-bold text-ink/60">내 기여</dt><dd className="mt-1">{overview.contribution}</dd></div>
                                        <div><dt className="text-xs font-bold text-ink/60">변경 결과</dt><dd className="mt-1 font-bold">{overview.outcome}</dd></div>
                                    </dl>
                                    <p className="mt-auto border-t border-ink/15 pt-5 text-xs font-bold leading-6 text-ink/70"><span className="mt-6 block">{project.stack.join(' · ')}</span></p>
                                    <span className="mt-4 text-sm font-black group-hover:text-accent">{project.id === 'product-system' ? '사례와 동작 시연 보기' : '구현 과정 자세히 보기'} →</span>
                                </Link>
                            </article>
                        )
                    })}
                </div>
                <div className="mt-10 border-t border-ink/25 pt-6">
                    <h3 className="text-sm font-black">함께한 작업</h3>
                    <div className="mt-4 grid gap-3 md:grid-cols-3">
                        {additionalCaseStudies.map(project => (
                            <Link key={project.id} to={`/work/${project.id}`} className="focus-ring border-b border-ink/20 py-4 pr-4 transition-colors hover:text-accent">
                                <p className="text-xs text-ink/65">{project.period}</p>
                                <h4 className="mt-2 text-sm font-bold">{project.subtitle} ↗</h4>
                                <p className="mt-2 text-xs leading-6 text-ink/70">{project.stack.join(' · ')}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
