import { aiExperience, experienceBullets, profile } from '../../data/portfolio'

const boundaries = [
    {
        label: 'Product surfaces',
        title: '역할, 데이터, 작업 흐름',
        description: '같은 데이터가 역할마다 다른 목적과 권한을 가질 때, 화면보다 먼저 진입 경계와 작업 순서를 정리합니다.',
    },
    {
        label: 'Product operations',
        title: '상태 유지, 목록 조회, QA',
        description: '페이지 이동과 새로고침, 계정 목록 검색, 수업 입장처럼 실제 사용 중 생기는 데이터·화면 상태 이슈를 수정합니다.',
    },
    {
        label: 'Interaction systems',
        title: '입력, 좌표, 렌더링',
        description: '한글 조합 입력부터 Canvas 프레임까지 사용자가 바로 체감하는 저수준 동작을 측정하고 조정합니다.',
    },
]

export default function Experience() {
    return (
        <section id="experience" className="bg-ink px-5 py-14 text-paper sm:px-8 sm:py-20">
            <div className="mx-auto max-w-[1200px]">
                <header className="grid gap-8 border-b border-paper/25 pb-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
                    <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.22em] text-accent">Experience</p>
                        <h2 className="mt-3 text-[32px] font-black tracking-[-0.04em] sm:text-[40px]">경력과 범위</h2>
                    </div>
                    <p className="max-w-3xl text-xl font-bold leading-8 tracking-[-0.025em] text-paper/88 lg:justify-self-end sm:text-2xl sm:leading-9">
                        학습 콘텐츠 제작부터 서비스 개발과 운영까지 경험했습니다.
                    </p>
                </header>

                <div className="grid border-b border-paper/25 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
                    <div className="border-b border-paper/20 py-10 lg:border-b-0 lg:py-14">
                        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-paper/40">2022.06 - Now</p>
                        <p className="mt-4 text-5xl font-black tracking-[-0.06em] text-accent">4+ years</p>
                    </div>

                    <div className="py-10 lg:border-l lg:border-paper/20 lg:py-14 lg:pl-16">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <h3 className="text-3xl font-black tracking-[-0.045em] sm:text-4xl">{profile.company}</h3>
                                <p className="mt-2 text-[14px] font-bold text-accent">Frontend Engineer</p>
                            </div>
                            <div className="max-w-md text-[14px] leading-6 text-paper/65 sm:text-right">
                                <p>{profile.companyIntro}</p>
                                <a href={profile.companySource} target="_blank" rel="noreferrer" className="mt-2 inline-block underline underline-offset-4">공식 서비스 소개 ↗</a>
                            </div>
                        </div>

                        <ul className="mt-8 max-w-4xl list-disc space-y-3 pl-5 text-[17px] leading-8 text-paper/68">
                            {experienceBullets.map(bullet => <li key={bullet}>{bullet}</li>)}
                        </ul>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3">
                    {boundaries.map((boundary, index) => (
                        <article
                            key={boundary.label}
                            className={`py-9 lg:px-8 lg:py-12 ${index > 0 ? 'border-t border-paper/20 lg:border-l lg:border-t-0' : ''}`}
                        >
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">{boundary.label}</p>
                            <h3 className="mt-4 text-xl font-black tracking-[-0.025em] text-paper">{boundary.title}</h3>
                            <p className="mt-4 text-[14px] leading-7 text-paper/58">{boundary.description}</p>
                        </article>
                    ))}
                </div>

                <section className="border-t border-paper/25 py-10 sm:py-14" aria-labelledby="ai-workflow-title">
                    <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">AI-assisted development</p>
                            <h3 id="ai-workflow-title" className="mt-4 text-2xl font-black tracking-[-0.03em]">Codex 활용 방식</h3>
                        </div>
                        <div>
                            <p className="max-w-3xl text-[16px] leading-8 text-paper/72">{aiExperience.summary}</p>
                            <ol className="mt-7 grid border-y border-paper/20 md:grid-cols-3">
                                {aiExperience.steps.map((step, index) => (
                                    <li key={step.title} className={`py-5 md:px-5 ${index > 0 ? 'border-t border-paper/20 md:border-l md:border-t-0' : ''}`}>
                                        <p className="text-[10px] font-black text-accent">{String(index + 1).padStart(2, '0')}</p>
                                        <h4 className="mt-3 text-[15px] font-black text-paper">{step.title}</h4>
                                        <p className="mt-2 text-[13px] leading-6 text-paper/55">{step.description}</p>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}
