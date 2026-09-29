import EvidenceDemo, { type DemoStep } from './EvidenceDemo'

const steps = [
    { label: '계정 목록', description: '검색·페이지 조건을 API 요청과 함께 관리하고 연속 입력에는 디바운스를 적용했습니다.' },
    { label: '등록·수정', description: '계정 유형별 필드와 검증 규칙, 수정 시 기존 값을 하나의 폼 흐름에 반영했습니다.' },
    { label: '기관 선택', description: '긴 기관 목록은 가상 스크롤과 점진 표시로 나누고, 기존 선택값은 표시 범위 밖에서도 보존했습니다.' },
] satisfies [DemoStep, ...DemoStep[]]

export default function AdminDemo() {
    return (
        <EvidenceDemo
            label="Admin workflow demo"
            steps={steps}
            scopeItems={['계정 목록 화면 6개', '계정 API 모듈 3개']}
            scopeNote="서버 페이지네이션 전환 커밋의 변경 파일 기준"
        >
            {active => (
                <div className="pointer-events-none min-h-[360px] bg-[#f7f8fa] p-5 sm:p-7" aria-label="선택한 단계의 정적 화면 예시">
                    {active === 0 && <AccountList />}
                    {active === 1 && <AccountForm />}
                    {active === 2 && <InstitutionSelect />}
                </div>
            )}
        </EvidenceDemo>
    )
}

function AdminHeader({ title, action }: { title: string; action: string }) {
    return <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-ink/35">Account management - 화면 예시</p>
            <h4 className="mt-1 text-2xl font-black">
                {title}
            </h4>
        </div>
        <span className="bg-[#3157d5] px-4 py-2 text-[12px] font-black text-white">
            {action}
        </span>
    </div>
}

function AccountList() {
    return <>
        <AdminHeader title="교사 계정" action="계정 등록" />
        <div className="mt-6 flex gap-2">
            <div className="flex-1 border border-ink/15 bg-white px-4 py-2.5 text-[12px] text-ink/35">이름 또는 이메일 검색</div>
            <div className="bg-ink px-5 py-2.5 text-[12px] font-bold text-white">검색</div>
        </div>
        <div className="mt-4 overflow-hidden border border-ink/15 bg-white">
            <div className="grid grid-cols-[1fr_1.4fr_0.7fr] bg-[#eef0f4] px-4 py-3 text-[10px] font-black text-ink/45">
                <span>이름</span>
                <span>기관</span>
                <span>상태</span>
            </div>
            {[['김교사', '새봄초등학교', '활성'], ['이교사', '한빛중학교', '활성'], ['박교사', '미래교육원', '대기']].map(row => <div key={row[0]} className="grid grid-cols-[1fr_1.4fr_0.7fr] border-t border-ink/10 px-4 py-3 text-[12px]">
                <b>
                    {row[0]}
                </b>
                <span>
                    {row[1]}
                </span>
                <span>
                    {row[2]}
                </span>
            </div>)}
        </div>
        <div className="mt-4 flex justify-end gap-1 text-[11px] font-bold">
            <span className="border bg-white px-3 py-2">이전</span>
            <span className="bg-[#3157d5] px-3 py-2 text-white">1</span>
            <span className="border bg-white px-3 py-2">2</span>
            <span className="border bg-white px-3 py-2">다음</span>
        </div>
    </>
}

function AccountForm() {
    return <>
        <AdminHeader title="교사 계정 수정" action="저장" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[['이름', '김교사'], ['이메일', 'teacher@example.com'], ['연락처', '010-0000-0000'], ['소속 기관', '새봄초등학교']].map(([label, value]) => <div key={label} className="text-[11px] font-black text-ink/55">
                {label}
                <span className="mt-2 block border border-ink/15 bg-white px-4 py-3 text-[12px] font-medium text-ink">
                    {value}
                </span>
            </div>)}
        </div>
        <div className="mt-5 border-l-4 border-[#3157d5] bg-white p-4 text-[12px] leading-6 text-ink/60">수정 화면에서는 기존 계정과 기관 값을 초기 상태에 복원하고, 계정 유형에 맞는 필드와 유효성 규칙을 적용합니다.</div>
    </>
}

function InstitutionSelect() {
    return <>
        <AdminHeader title="소속 기관 선택" action="선택 완료" />
        <div className="mt-6 grid gap-4 md:grid-cols-[1fr_220px]">
            <div className="overflow-hidden border border-ink/15 bg-white">
                <div className="border-b bg-[#eef0f4] px-4 py-3 text-[11px] font-black">기관 목록 - 100개씩 표시</div>
                {['가람초등학교', '나래초등학교', '다온교육원', '라온중학교', '마루초등학교'].map((name, index) => <div key={name} className={`flex items-center justify-between border-b border-ink/10 px-4 py-3 text-[12px] last:border-b-0 ${index === 2 ? 'bg-[#edf1ff] font-black text-[#3157d5]' : ''}`}>
                    <span>
                        {name}
                    </span>
                    <span>
                        {index === 2 ? '선택됨' : '○'}
                    </span>
                </div>)}
            </div>
            <div className="border-2 border-[#3157d5] bg-white p-4">
                <p className="text-[10px] font-black text-[#3157d5]">기존 선택값</p>
                <p className="mt-2 font-black">다온교육원</p>
                <p className="mt-3 text-[11px] leading-5 text-ink/50">현재 표시 구간 밖이어도 선택한 기관의 이름을 유지합니다.</p>
            </div>
        </div>
    </>
}
