import { experienceBullets, profile, skillGroups } from '../../data/portfolio'

export default function Experience() {
    return (
        <section id="experience" className="bg-ink px-5 py-20 text-paper sm:px-8 sm:py-28">
            <div className="mx-auto max-w-[1440px]">
                <header className="grid gap-8 border-b border-paper/25 pb-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
                    <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.22em] text-accent">Experience</p>
                        <h2 className="mt-3 text-5xl font-black tracking-[-0.055em] sm:text-6xl">경력과 범위</h2>
                    </div>
                    <p className="max-w-3xl text-xl font-bold leading-8 tracking-[-0.025em] text-paper/88 lg:justify-self-end sm:text-2xl sm:leading-9">
                        사용자 서비스, 운영 도구, 콘텐츠 제작·배포 환경을 함께 개발했습니다.
                    </p>
                </header>

                <div className="grid border-b border-paper/25 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
                    <div className="border-b border-paper/20 py-10 lg:border-b-0 lg:py-14">
                        <p className="text-[11px] font-black tracking-[0.12em] text-paper/65">{profile.period}</p>
                        <p className="mt-4 text-5xl font-black tracking-[-0.06em] text-accent">4+ years</p>
                    </div>

                    <div className="py-10 lg:border-l lg:border-paper/20 lg:py-14 lg:pl-16">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <h3 className="text-3xl font-black tracking-[-0.045em] sm:text-4xl">{profile.company}</h3>
                                <p className="mt-2 text-[14px] font-bold text-accent">{profile.role}</p>
                            </div>
                            <p className="max-w-md text-[14px] leading-6 text-paper/48 sm:text-right">{profile.companyIntro}</p>
                        </div>

                        <ul className="mt-8 max-w-4xl space-y-3 text-[16px] leading-8 text-paper/80">
                            {experienceBullets.map(bullet => <li key={bullet}>{bullet}</li>)}
                        </ul>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                    {skillGroups.map(group => (
                        <article
                            key={group.category}
                            className="border-b border-paper/20 py-8 sm:px-5"
                        >
                            <h3 className="text-[13px] font-black text-accent">{group.category}</h3>
                            <p className="mt-3 text-[14px] leading-7 text-paper/80">{group.items.join(' · ')}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
