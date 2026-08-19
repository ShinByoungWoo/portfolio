import { profile } from '../../data/portfolio'

const boundaries = [
    {
        label: 'Product surfaces',
        title: '학생 · 교사 · 운영자',
        description: '같은 데이터가 역할마다 다른 목적과 권한을 가질 때, 화면보다 먼저 진입 경계와 작업 순서를 정리합니다.',
    },
    {
        label: 'Trust boundaries',
        title: '라우트 · 세션 · 암호화 · iframe',
        description: '외부 입력과 내부 상태가 만나는 지점을 찾아 검증, 오류 처리, 메시지 계약을 한 곳에 둡니다.',
    },
    {
        label: 'Interaction systems',
        title: '입력 · 좌표 · 렌더링',
        description: '한글 조합 입력부터 Canvas 프레임까지 사용자가 바로 체감하는 저수준 동작을 측정하고 조정합니다.',
    },
]

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
                        프레임워크보다 제품의 경계에서 반복해서 해결한 문제로 경험을 설명합니다.
                    </p>
                </header>

                <div className="grid border-b border-paper/25 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
                    <div className="border-b border-paper/20 py-10 lg:border-b-0 lg:py-14">
                        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-paper/40">2022.06 — Now</p>
                        <p className="mt-4 text-5xl font-black tracking-[-0.06em] text-accent">4+ years</p>
                    </div>

                    <div className="py-10 lg:border-l lg:border-paper/20 lg:py-14 lg:pl-16">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <h3 className="text-3xl font-black tracking-[-0.045em] sm:text-4xl">{profile.company}</h3>
                                <p className="mt-2 text-[14px] font-bold text-accent">Frontend Engineer</p>
                            </div>
                            <p className="max-w-md text-[14px] leading-6 text-paper/48 sm:text-right">{profile.companyIntro}</p>
                        </div>

                        <p className="mt-8 max-w-4xl text-[17px] leading-8 text-paper/68">
                            LMS와 운영 Admin을 병렬로 개발하고, 그 이전에는 보안 인증 대응과 Canvas 기반 학습 콘텐츠,
                            HTML 콘텐츠 배포 자동화를 맡았습니다. 기능 종류는 달랐지만 역할 경계와 브라우저 동작을 명시적으로
                            만드는 일은 계속 이어졌습니다.
                        </p>
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
            </div>
        </section>
    )
}
