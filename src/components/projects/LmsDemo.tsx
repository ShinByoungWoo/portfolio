import EvidenceDemo, { type DemoStep } from './EvidenceDemo'

const steps = [
    { label: '코스 선택', description: '선택한 단원을 공유 상태에 보관해 코스와 리포트 사이를 이동해도 학습 맥락이 이어집니다.' },
    { label: '리포트 갱신', description: '비동기로 생성되는 결과를 폴링하고, 단원 변경이나 재시작에도 조회 상태가 어긋나지 않도록 처리했습니다.' },
    { label: '수업 동기화', description: '학생이 늦게 입장해도 입장 응답의 잠금·동기화 상태를 먼저 반영한 뒤 실시간 이벤트를 이어받습니다.' },
] satisfies [DemoStep, ...DemoStep[]]

export default function LmsDemo() {
    return (
        <EvidenceDemo
            label="LMS interaction demo"
            steps={steps}
            scopeItems={['초등·중등 코스 컴포넌트 2개', '교사·학생 리포트 화면 2개']}
            scopeNote="코스↔리포트 상태 유지 커밋의 변경 파일 기준"
        >
            {active => (
                <div className="grid min-h-[360px] md:grid-cols-[190px_minmax(0,1fr)]">
                    <aside className="border-b border-ink/15 bg-[#f7f5ef] p-5 md:border-b-0 md:border-r">
                        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-ink/35">Class 3A - 화면 예시</p>
                        <p className="mt-3 text-lg font-black">AI·SW 기초</p>
                        <div className="mt-6 space-y-2 text-[12px] font-bold">
                            {['코스', '학습 리포트', '학습게시판'].map((item, index) => (
                                <div key={item} className={`px-3 py-2.5 ${active === index ? 'bg-ink text-paper' : 'text-ink/45'}`}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </aside>
                    <div className="pointer-events-none p-5 sm:p-7" aria-label="선택한 단계의 정적 화면 예시">
                        {active === 0 && <CourseState />}
                        {active === 1 && <ReportState />}
                        {active === 2 && <SyncState />}
                    </div>
                </div>
            )}
        </EvidenceDemo>
    )
}

function CourseState() {
    return <>
        <div className="flex items-end justify-between gap-4">
            <div>
                <p className="text-[11px] font-bold text-ink/40">선택한 단원</p>
                <h4 className="mt-1 text-2xl font-black">03 - 알고리즘</h4>
            </div>
            <span className="bg-[#dff3df] px-3 py-1 text-[11px] font-black text-[#256b38]">Pinia에 유지됨</span>
        </div>
        <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {['순차', '반복', '선택'].map((item, index) => <div key={item} className={`border-2 p-4 ${index === 2 ? 'border-accent bg-[#fff2ed]' : 'border-ink/15'}`}>
                <p className="text-[10px] font-bold text-ink/35">UNIT {index + 1}</p>
                <p className="mt-2 font-black">
                    {item}
                </p>
                <p className="mt-5 text-[11px] text-ink/45">진행 {index === 2 ? '42' : '100'}%</p>
            </div>)}
        </div>
        <div className="mt-6 h-2 bg-ink/10">
            <div className="h-full w-[72%] bg-accent" />
        </div>
    </>
}

function ReportState() {
    return <>
        <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
                <p className="text-[11px] font-bold text-ink/40">03 - 알고리즘</p>
                <h4 className="mt-1 text-2xl font-black">학습 리포트</h4>
            </div>
            <span className="border border-accent px-3 py-1 text-[11px] font-black text-accent">생성 상태 확인 중</span>
        </div>
        <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {[['학습 완료', '18명'], ['진행 중', '5명'], ['도움 필요', '3명']].map(([label, value]) => <div key={label} className="border border-ink/15 p-4">
                <p className="text-[11px] text-ink/45">
                    {label}
                </p>
                <p className="mt-2 text-2xl font-black">
                    {value}
                </p>
            </div>)}
        </div>
        <div className="mt-5 space-y-2">
            {[86, 64, 42].map((value, index) => <div key={value} className="grid grid-cols-[70px_1fr_36px] items-center gap-3 text-[11px]">
                <span>학생 {index + 1}</span>
                <div className="h-2 bg-ink/10">
                    <div className="h-full bg-ink" style={{ width: `${value}%` }} />
                </div>
                <b>{value}%</b>
            </div>)}
        </div>
    </>
}

function SyncState() {
    return <>
        <p className="text-[11px] font-bold text-ink/40">LIVE CLASS - 입장 직후 초기 상태</p>
        <h4 className="mt-1 text-2xl font-black">교사 화면 및 게시판과 실시간 동기화</h4>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="border-2 border-ink p-5">
                <p className="text-[11px] font-bold text-ink/40">LOCK STATUS</p>
                <p className="mt-3 text-xl font-black">화면 잠금 ON</p>
                <p className="mt-2 text-[12px] leading-5 text-ink/55">입장 응답의 기존 상태를 우선 반영</p>
            </div>
            <div className="border-2 border-accent bg-[#fff2ed] p-5">
                <p className="text-[11px] font-bold text-accent">SYNC STATUS</p>
                <p className="mt-3 text-xl font-black">/lesson/03</p>
                <p className="mt-2 text-[12px] leading-5 text-ink/55">현재 수업 경로로 이동 후 이벤트 수신</p>
            </div>
        </div>
    </>
}
