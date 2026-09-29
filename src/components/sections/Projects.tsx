import { additionalCaseStudies, featuredCaseStudies } from '../../data/portfolio'
import ProjectCaseStudy from '../projects/ProjectCaseStudy'

const productMap = [
    { user: '학생', flow: '학습 콘텐츠 → 이어하기', project: 'LMS / Canvas' },
    { user: '교사', flow: '코스 → 리포트 → 수업 제어', project: 'Web LMS' },
    { user: '운영자', flow: '계정 관리 → 콘텐츠 등록', project: 'Admin / CMS' },
]

export default function Projects() {
    return (
        <section id="work" className="bg-paper px-5 py-14 sm:px-8 sm:py-20">
            <div className="mx-auto max-w-[1200px]">
                <header data-reveal className="grid gap-8 border-b-4 border-ink pb-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
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
                        <div data-reveal data-reveal-delay={index * 70} key={item.user} className={`py-6 md:px-6 ${index > 0 ? 'border-t border-ink/20 md:border-l md:border-t-0' : ''}`}>
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
                            data-reveal
                            data-reveal-delay={index * 55}
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
                        <ProjectCaseStudy key={project.id} project={project} />
                    ))}
                </div>

                <aside className="border-b border-ink/25 py-12 sm:py-16" aria-labelledby="additional-work-title">
                    <div className="grid gap-8 lg:grid-cols-[150px_minmax(0,1fr)] lg:gap-10">
                        <div>
                            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-accent">Additional</p>
                            <h3 id="additional-work-title" className="mt-2 text-2xl font-black">함께한 작업</h3>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                            {additionalCaseStudies.map((project, index) => (
                                <article data-reveal data-reveal-delay={index * 80} key={project.id} className="motion-card border border-ink/25 bg-white p-5 sm:p-6">
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
