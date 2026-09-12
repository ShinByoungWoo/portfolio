import { useState, type ReactNode } from 'react'

const tabsClass = (active: boolean) =>
    `group flex min-h-14 cursor-pointer items-center justify-between gap-3 border-r border-ink/15 px-4 text-left text-[12px] font-black transition-colors last:border-r-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-accent ${
        active ? 'bg-accent text-ink' : 'bg-white text-ink/60 hover:bg-[#fff2ed] hover:text-ink'
    }`

export default function ProjectEvidence({ projectId }: { projectId: string }) {
    if (projectId === 'product-system') return <LmsDemo />
    if (projectId === 'admin-operations') return <AdminDemo />
    if (projectId === 'content-pipeline') return <CmsPlaygroundDemo />
    return null
}

function EvidenceFrame({ children, label }: { children: ReactNode; label: string }) {
    return (
        <section className="mt-10 overflow-hidden border-2 border-ink bg-white shadow-[8px_8px_0_#171714]">
            <header className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-ink bg-ink px-4 py-3 text-paper sm:px-5">
                <p className="text-[11px] font-black uppercase tracking-[0.16em]">{label}</p>
                <p className="text-[10px] font-bold text-paper/55">실제 구현 흐름 기반 - 데이터와 화면은 포트폴리오용 재구성</p>
            </header>
            <div className="flex items-center gap-2 border-b border-ink/15 bg-[#fff2ed] px-4 py-2.5 text-[11px] font-black text-ink/70 sm:px-5">
                <span className="border border-accent bg-white px-2 py-1 text-[9px] uppercase tracking-[0.12em] text-accent">Click</span>
                아래 단계 버튼을 눌러 구현 흐름을 확인해 보세요.
            </div>
            {children}
        </section>
    )
}

function LmsDemo() {
    const [active, setActive] = useState(0)
    const tabs = ['코스 선택', '리포트 갱신', '수업 동기화']

    return (
        <EvidenceFrame label="LMS interaction demo">
            <div className="grid border-b border-ink/20 sm:grid-cols-3">
                {tabs.map((tab, index) => (
                    <button key={tab} type="button" onClick={() => setActive(index)} className={tabsClass(active === index)} aria-pressed={active === index}>
                        <span>{String(index + 1).padStart(2, '0')} - {tab}</span><span aria-hidden="true">{active === index ? '●' : '→'}</span>
                    </button>
                ))}
            </div>
            <div className="grid min-h-[360px] md:grid-cols-[190px_minmax(0,1fr)]">
                <aside className="border-b border-ink/15 bg-[#f7f5ef] p-5 md:border-b-0 md:border-r">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-ink/35">Class 3A - 화면 예시</p>
                    <p className="mt-3 text-lg font-black">AI·SW 기초</p>
                    <div className="mt-6 space-y-2 text-[12px] font-bold">
                        {['코스', '학습 리포트', '학습게시판'].map((item, index) => (
                            <div key={item} className={`px-3 py-2.5 ${active === index ? 'bg-ink text-paper' : 'text-ink/45'}`}>{item}</div>
                        ))}
                    </div>
                </aside>
                <div className="pointer-events-none p-5 sm:p-7" aria-label="선택한 단계의 정적 화면 예시">
                    {active === 0 && <CourseState />}
                    {active === 1 && <ReportState />}
                    {active === 2 && <SyncState />}
                </div>
            </div>
            <DemoCaption step={active + 1} texts={[
                '선택한 단원을 공유 상태에 보관해 코스와 리포트 사이를 이동해도 학습 맥락이 이어집니다.',
                '비동기로 생성되는 결과를 폴링하고, 단원 변경이나 재시작에도 조회 상태가 어긋나지 않도록 처리했습니다.',
                '학생이 늦게 입장해도 입장 응답의 잠금·동기화 상태를 먼저 반영한 뒤 실시간 이벤트를 이어받습니다.',
            ]} />
            <VerifiedScope items={['초등·중등 코스 컴포넌트 2개', '교사·학생 리포트 화면 2개']} note="코스↔리포트 상태 유지 커밋의 변경 파일 기준" />
        </EvidenceFrame>
    )
}

function CourseState() {
    return <>
        <div className="flex items-end justify-between gap-4"><div><p className="text-[11px] font-bold text-ink/40">선택한 단원</p><h4 className="mt-1 text-2xl font-black">03 - 알고리즘</h4></div><span className="bg-[#dff3df] px-3 py-1 text-[11px] font-black text-[#256b38]">Pinia에 유지됨</span></div>
        <div className="mt-7 grid gap-3 sm:grid-cols-3">{['순차', '반복', '선택'].map((item, index) => <div key={item} className={`border-2 p-4 ${index === 2 ? 'border-accent bg-[#fff2ed]' : 'border-ink/15'}`}><p className="text-[10px] font-bold text-ink/35">UNIT {index + 1}</p><p className="mt-2 font-black">{item}</p><p className="mt-5 text-[11px] text-ink/45">진행 {index === 2 ? '42' : '100'}%</p></div>)}</div>
        <div className="mt-6 h-2 bg-ink/10"><div className="h-full w-[72%] bg-accent" /></div>
    </>
}

function ReportState() {
    return <>
        <div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-[11px] font-bold text-ink/40">03 - 알고리즘</p><h4 className="mt-1 text-2xl font-black">학습 리포트</h4></div><span className="border border-accent px-3 py-1 text-[11px] font-black text-accent">생성 상태 확인 중</span></div>
        <div className="mt-7 grid gap-3 sm:grid-cols-3">{[['학습 완료','18명'],['진행 중','5명'],['도움 필요','3명']].map(([label,value]) => <div key={label} className="border border-ink/15 p-4"><p className="text-[11px] text-ink/45">{label}</p><p className="mt-2 text-2xl font-black">{value}</p></div>)}</div>
        <div className="mt-5 space-y-2">{[86,64,42].map((value,index) => <div key={value} className="grid grid-cols-[70px_1fr_36px] items-center gap-3 text-[11px]"><span>학생 {index + 1}</span><div className="h-2 bg-ink/10"><div className="h-full bg-ink" style={{width:`${value}%`}} /></div><b>{value}%</b></div>)}</div>
    </>
}

function SyncState() {
    return <>
        <p className="text-[11px] font-bold text-ink/40">LIVE CLASS - 입장 직후 초기 상태</p><h4 className="mt-1 text-2xl font-black">교사 화면 및 게시판과 실시간 동기화</h4>
        <div className="mt-7 grid gap-4 sm:grid-cols-2"><div className="border-2 border-ink p-5"><p className="text-[11px] font-bold text-ink/40">LOCK STATUS</p><p className="mt-3 text-xl font-black">화면 잠금 ON</p><p className="mt-2 text-[12px] leading-5 text-ink/55">입장 응답의 기존 상태를 우선 반영</p></div><div className="border-2 border-accent bg-[#fff2ed] p-5"><p className="text-[11px] font-bold text-accent">SYNC STATUS</p><p className="mt-3 text-xl font-black">/lesson/03</p><p className="mt-2 text-[12px] leading-5 text-ink/55">현재 수업 경로로 이동 후 이벤트 수신</p></div></div>
    </>
}

function AdminDemo() {
    const [active, setActive] = useState(0)
    const tabs = ['계정 목록', '등록·수정', '기관 선택']
    return <EvidenceFrame label="Admin workflow demo">
        <div className="grid border-b border-ink/20 sm:grid-cols-3">{tabs.map((tab,index)=><button key={tab} type="button" onClick={()=>setActive(index)} className={tabsClass(active===index)} aria-pressed={active===index}><span>{String(index+1).padStart(2,'0')} - {tab}</span><span aria-hidden="true">{active===index?'●':'→'}</span></button>)}</div>
        <div className="pointer-events-none min-h-[360px] bg-[#f7f8fa] p-5 sm:p-7" aria-label="선택한 단계의 정적 화면 예시">
            {active===0 && <AccountList />}{active===1 && <AccountForm />}{active===2 && <InstitutionSelect />}
        </div>
        <DemoCaption step={active+1} texts={['검색·페이지 조건을 API 요청과 함께 관리하고 연속 입력에는 디바운스를 적용했습니다.','계정 유형별 필드와 검증 규칙, 수정 시 기존 값을 하나의 폼 흐름에 반영했습니다.','긴 기관 목록은 가상 스크롤과 점진 표시로 나누고, 기존 선택값은 표시 범위 밖에서도 보존했습니다.']} />
        <VerifiedScope items={['계정 목록 화면 6개', '계정 API 모듈 3개']} note="서버 페이지네이션 전환 커밋의 변경 파일 기준" />
    </EvidenceFrame>
}

function AdminHeader({ title, action }: { title: string; action: string }) {
    return <div className="flex flex-wrap items-center justify-between gap-4"><div><p className="text-[10px] font-black uppercase tracking-[0.14em] text-ink/35">Account management - 화면 예시</p><h4 className="mt-1 text-2xl font-black">{title}</h4></div><span className="bg-[#3157d5] px-4 py-2 text-[12px] font-black text-white">{action}</span></div>
}

function AccountList() {
    return <><AdminHeader title="교사 계정" action="계정 등록"/><div className="mt-6 flex gap-2"><div className="flex-1 border border-ink/15 bg-white px-4 py-2.5 text-[12px] text-ink/35">이름 또는 이메일 검색</div><div className="bg-ink px-5 py-2.5 text-[12px] font-bold text-white">검색</div></div><div className="mt-4 overflow-hidden border border-ink/15 bg-white"><div className="grid grid-cols-[1fr_1.4fr_0.7fr] bg-[#eef0f4] px-4 py-3 text-[10px] font-black text-ink/45"><span>이름</span><span>기관</span><span>상태</span></div>{[['김교사','새봄초등학교','활성'],['이교사','한빛중학교','활성'],['박교사','미래교육원','대기']].map(row=><div key={row[0]} className="grid grid-cols-[1fr_1.4fr_0.7fr] border-t border-ink/10 px-4 py-3 text-[12px]"><b>{row[0]}</b><span>{row[1]}</span><span>{row[2]}</span></div>)}</div><div className="mt-4 flex justify-end gap-1 text-[11px] font-bold"><span className="border bg-white px-3 py-2">이전</span><span className="bg-[#3157d5] px-3 py-2 text-white">1</span><span className="border bg-white px-3 py-2">2</span><span className="border bg-white px-3 py-2">다음</span></div></>
}

function AccountForm() {
    return <><AdminHeader title="교사 계정 수정" action="저장"/><div className="mt-6 grid gap-4 sm:grid-cols-2">{[['이름','김교사'],['이메일','teacher@example.com'],['연락처','010-0000-0000'],['소속 기관','새봄초등학교']].map(([label,value])=><label key={label} className="text-[11px] font-black text-ink/55">{label}<span className="mt-2 block border border-ink/15 bg-white px-4 py-3 text-[12px] font-medium text-ink">{value}</span></label>)}</div><div className="mt-5 border-l-4 border-[#3157d5] bg-white p-4 text-[12px] leading-6 text-ink/60">수정 화면에서는 기존 계정과 기관 값을 초기 상태에 복원하고, 계정 유형에 맞는 필드와 유효성 규칙을 적용합니다.</div></>
}

function InstitutionSelect() {
    return <><AdminHeader title="소속 기관 선택" action="선택 완료"/><div className="mt-6 grid gap-4 md:grid-cols-[1fr_220px]"><div className="overflow-hidden border border-ink/15 bg-white"><div className="border-b bg-[#eef0f4] px-4 py-3 text-[11px] font-black">기관 목록 - 100개씩 표시</div>{['가람초등학교','나래초등학교','다온교육원','라온중학교','마루초등학교'].map((name,index)=><div key={name} className={`flex items-center justify-between border-b border-ink/10 px-4 py-3 text-[12px] last:border-b-0 ${index===2?'bg-[#edf1ff] font-black text-[#3157d5]':''}`}><span>{name}</span><span>{index===2?'선택됨':'○'}</span></div>)}</div><div className="border-2 border-[#3157d5] bg-white p-4"><p className="text-[10px] font-black text-[#3157d5]">기존 선택값</p><p className="mt-2 font-black">다온교육원</p><p className="mt-3 text-[11px] leading-5 text-ink/50">현재 표시 구간 밖이어도 선택한 기관의 이름을 유지합니다.</p></div></div></>
}

function CmsPlaygroundDemo() {
    const [active, setActive] = useState(0)
    const tabs = ['콘텐츠 목록', '미션 상세', '등록 자동화']
    const contents = [
        { title: '한글 타자 연습', tags: ['타자', 'Canvas'], files: '12개 미션', status: '배포 완료' },
        { title: '레이저 반사 퍼즐', tags: ['퍼즐', 'Phaser'], files: '8개 미션', status: '배포 완료' },
        { title: '알고리즘 카드', tags: ['Canva', '다국어'], files: '15개 언어', status: '업로드됨' },
    ]
    return <EvidenceFrame label="CMS playground demo">
        <div className="grid border-b border-ink/20 sm:grid-cols-3">{tabs.map((tab,index)=><button key={tab} type="button" onClick={()=>setActive(index)} className={tabsClass(active===index)} aria-pressed={active===index}><span>{String(index+1).padStart(2,'0')} - {tab}</span><span aria-hidden="true">{active===index?'●':'→'}</span></button>)}</div>
        <div className="pointer-events-none min-h-[390px] bg-[#0f1d28] p-5 text-white sm:p-7" aria-label="선택한 단계의 정적 화면 예시">
            {active===0 && <><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#7dd3fc]">Contents playground - 화면 예시</p><h4 className="mt-2 text-2xl font-black">콘텐츠 검색</h4></div><span className="border border-white/25 px-3 py-2 text-[11px]">이름, 설명, 라벨 검색</span></div><div className="mt-5 flex flex-wrap gap-2">{['전체','Phaser','Canvas','Canva','배포필요'].map((tag,index)=><span key={tag} className={`rounded-full border px-3 py-1.5 text-[10px] font-black ${index===0?'border-[#38bdf8] bg-[#38bdf8] text-[#10202d]':'border-white/20 text-white/65'}`}>{tag}</span>)}</div><div className="mt-5 grid gap-3 md:grid-cols-3">{contents.map(item=><div key={item.title} className="border border-white/15 bg-white/[0.06] p-4"><div className="aspect-[16/8] bg-gradient-to-br from-[#233c55] to-[#152431] p-3 text-[10px] text-white/45">콘텐츠 썸네일</div><h5 className="mt-4 font-black">{item.title}</h5><div className="mt-2 flex flex-wrap gap-1">{item.tags.map(tag=><span key={tag} className="rounded-full bg-white/10 px-2 py-1 text-[9px] text-white/65">{tag}</span>)}</div><div className="mt-4 flex justify-between text-[10px] text-white/50"><span>{item.files}</span><span>{item.status}</span></div></div>)}</div></>}
            {active===1 && <><div className="flex items-center justify-between border-b border-white/15 pb-4"><div><p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#7dd3fc]">레이저 반사 퍼즐 - 화면 예시</p><h4 className="mt-2 text-2xl font-black">콘텐츠 상세와 미션</h4></div><span className="rounded-full bg-[#22c55e]/15 px-3 py-1.5 text-[10px] font-black text-[#86efac]">운영 v12</span></div><div className="mt-5 grid gap-4 md:grid-cols-[260px_minmax(0,1fr)]"><aside className="border border-white/15 bg-black/15 p-4"><p className="text-[10px] font-black text-white/40">파일 / 미션 (8)</p><div className="mt-3 space-y-2">{['mission-01.html  |  빛의 방향','mission-02.html  |  거울 배치','mission-03.html  |  목표 도달','mission-04.html  |  복합 반사'].map((mission,index)=><div key={mission} className={`px-3 py-3 text-[11px] ${index===1?'border-l-2 border-[#38bdf8] bg-[#38bdf8]/10 font-black text-white':'text-white/55'}`}>{mission}</div>)}</div></aside><div className="grid min-h-56 place-items-center border border-white/15 bg-[#050b10]"><div className="text-center"><div className="mx-auto h-16 w-16 rotate-45 border-4 border-[#38bdf8]"/><p className="mt-7 text-sm font-black">미션 02 - 거울 배치</p><p className="mt-2 text-[11px] text-white/45">선택한 미션을 CDN 주소로 미리보기</p></div></div></div></>}
            {active===2 && <><p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#7dd3fc]">Canva registration - 화면 예시</p><h4 className="mt-2 text-2xl font-black">외부 HTML을 등록 가능한 형태로 가공</h4><div className="mt-7 grid gap-2 sm:grid-cols-3">{['HTML 수집','이미지 다운로드','WebP 변환','CDN 경로 치환','언어별 산출물','다중 등록'].map((item,index)=><div key={item} className="border border-white/15 bg-white/[0.06] p-4"><span className="text-[10px] font-black text-[#7dd3fc]">{String(index+1).padStart(2,'0')}</span><p className="mt-2 text-[12px] font-black">{item}</p></div>)}</div><p className="mt-6 border-l-2 border-[#38bdf8] pl-4 text-[12px] leading-6 text-white/55">Puppeteer 수집부터 이미지 변환, 경로 치환, 다중 등록까지 연결했습니다. 시간 단축률은 재현 측정 전까지 사용하지 않습니다.</p></>}
        </div>
        <DemoCaption step={active+1} texts={['콘텐츠를 썸네일과 라벨로 목록화하고 검색과 태그 필터로 실행 대상을 찾도록 구성했습니다.','콘텐츠별 파일을 미션 라벨과 함께 확인하고 선택한 미션을 테스트 또는 운영 CDN 주소로 미리봅니다.','Canva HTML과 이미지 자산을 수집·변환하고 언어별 산출물과 다중 등록으로 이어지는 준비 작업을 자동화했습니다.']} />
        <VerifiedScope items={['언어별 산출물 15개', 'WebP 이미지 자산 253개']} note="초기 Canva 등록 샘플의 Git 스냅샷 기준 - 처리 시간 단축률이 아님" />
    </EvidenceFrame>
}

function DemoCaption({ step, texts }: { step: number; texts: string[] }) {
    return <div className="grid gap-2 border-t-2 border-ink bg-[#fff2ed] px-5 py-4 sm:grid-cols-[80px_minmax(0,1fr)]"><p className="text-[11px] font-black text-accent">STEP {String(step).padStart(2,'0')}</p><p className="text-[13px] font-bold leading-6 text-ink/70">{texts[step-1]}</p></div>
}

function VerifiedScope({ items, note }: { items: string[]; note: string }) {
    return <div className="grid border-t border-ink/15 bg-white sm:grid-cols-[repeat(2,minmax(0,190px))_1fr]">
        {items.map(item => <p key={item} className="border-b border-ink/10 px-5 py-3 text-[12px] font-black sm:border-b-0 sm:border-r">{item}</p>)}
        <p className="px-5 py-3 text-[11px] leading-5 text-ink/45 sm:text-right">{note}</p>
    </div>
}
