import { profile } from '../../data/portfolio'

const boundaries = [
    {
        label: 'Product surfaces',
        title: '역할 · 데이터 · 작업 흐름',
        description: '같은 데이터가 역할마다 다른 목적과 권한을 가질 때, 화면보다 먼저 진입 경계와 작업 순서를 정리합니다.',
    },
    {
        label: 'Product operations',
        title: '상태 유지 · 목록 조회 · QA',
        description: '페이지 이동과 새로고침, 계정 목록 검색, 수업 입장처럼 실제 사용 중 생기는 데이터·화면 상태 이슈를 수정합니다.',
    },
    {
        label: 'Interaction systems',
        title: '입력 · 좌표 · 렌더링',
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
                            LMS·Admin 프론트엔드 3명 중 코스·학습 리포트·게시판과 계정 관리 화면을 담당했습니다.
                            2026년 1~3월 주요 기능 개발 이후 QA·CS 대응을 이어갔으며, 콘텐츠 CMS 통합 과정의
                            콘텐츠 등록·Canva HTML 가공과 인터랙티브 콘텐츠 개발에도 참여했습니다.
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
