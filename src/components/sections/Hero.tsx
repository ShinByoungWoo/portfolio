import { Link } from 'react-router-dom'
import { profile } from '../../data/portfolio'

export default function Hero() {
    return (
        <section id="hero" className="border-b border-ink/20 px-5 pb-9 pt-28 sm:px-8 sm:pb-10 sm:pt-32">
            <div className="mx-auto max-w-[1200px]">
                <p data-reveal className="text-[11px] font-black uppercase tracking-[0.2em] text-accent">Frontend engineer · Seoul</p>
                <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end lg:gap-16">
                    <div>
                        <h1 data-reveal className="text-[clamp(2.1rem,4.5vw,3.7rem)] font-black leading-tight tracking-[-0.05em]">신병우 <span className="text-accent">·</span> 프론트엔드 개발자</h1>
                        <p data-reveal data-reveal-delay="70" className="mt-5 max-w-[42ch] text-xl font-bold leading-8 tracking-[-0.025em] sm:text-2xl sm:leading-9">Vue·Nuxt로 학습 서비스와<br className="hidden sm:block" /> 운영 도구를 개발해 왔습니다.</p>
                        <p data-reveal data-reveal-delay="140" className="mt-3 max-w-2xl text-[15px] leading-7 text-ink/75">화면 간 상태 유지, 실시간 수업 동기화, 콘텐츠 등록 자동화를 구현했습니다.</p>
                        <ul aria-label="주력 실무 기술" className="mt-5 flex flex-wrap gap-2">
                            {profile.primaryStack.map(item => <li key={item} className="border border-ink/25 px-3 py-1 text-xs font-bold">{item}</li>)}
                        </ul>
                    </div>
                    <aside data-reveal className="border-t-4 border-ink pt-5">
                        <p className="text-xs font-bold text-ink/65">{profile.period}</p>
                        <p className="mt-2 text-lg font-black">{profile.company}</p>
                        <p className="mt-2 text-sm leading-6 text-ink/75">학생의 학습 콘텐츠부터 교사·운영자의 관리 화면까지 개발·운영</p>
                        <div className="mt-5 flex flex-wrap gap-3">
                            <Link to="/resume" className="focus-ring bg-ink px-5 py-3 text-sm font-bold text-paper transition-colors hover:bg-accent hover:text-ink">이력서 읽기 ↗</Link>
                            <a href="#work" className="focus-ring border border-ink/25 px-4 py-3 text-sm font-bold transition-colors hover:border-accent">대표 작업 ↓</a>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}
