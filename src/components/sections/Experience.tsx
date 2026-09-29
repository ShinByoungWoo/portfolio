import { experienceBullets, profile } from '../../data/portfolio'

export default function Experience() {
    return (
        <section id="experience" className="bg-ink px-5 py-12 text-paper sm:px-8 sm:py-16">
            <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-16">
                <header data-reveal>
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-accent">Experience</p>
                    <h2 className="mt-3 text-3xl font-black tracking-[-0.04em]">개발과 운영을 함께</h2>
                    <p className="mt-5 text-base font-bold">{profile.company}</p>
                    <p className="mt-2 text-sm text-paper/75">{profile.period} · {profile.role}</p>
                    <a href={profile.companySource} target="_blank" rel="noreferrer" className="focus-ring mt-4 inline-block text-xs text-paper/75 underline underline-offset-4">CODMOS 서비스 소개 ↗</a>
                </header>
                <div data-reveal className="border-t border-paper/25 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                    <p className="text-sm leading-7 text-paper/75">코딩·AI 교육 서비스에서 학습 콘텐츠, 수업 관리, 운영 도구를 개발했습니다.</p>
                    <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-paper/90">
                        {experienceBullets.map(bullet => <li key={bullet}>{bullet}</li>)}
                    </ul>
                </div>
            </div>
        </section>
    )
}
