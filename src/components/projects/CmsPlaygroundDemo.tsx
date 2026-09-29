import EvidenceDemo, { type DemoStep } from './EvidenceDemo'

const steps = [
    { label: '콘텐츠 목록', description: '콘텐츠를 썸네일과 라벨로 목록화하고 검색과 태그 필터로 실행 대상을 찾도록 구성했습니다.' },
    { label: '미션 상세', description: '콘텐츠별 파일을 미션 라벨과 함께 확인하고 선택한 미션을 테스트 또는 운영 CDN 주소로 미리봅니다.' },
    { label: '등록 자동화', description: 'Canva HTML과 이미지 자산을 수집·변환하고 언어별 산출물과 다중 등록으로 이어지는 준비 작업을 자동화했습니다.' },
] satisfies [DemoStep, ...DemoStep[]]

export default function CmsPlaygroundDemo() {
    return (
        <EvidenceDemo label="CMS playground demo" steps={steps}
            scopeItems={['언어별 산출물 15개', 'WebP 이미지 자산 253개']}
            scopeNote="초기 Canva 등록 샘플의 Git 스냅샷 기준 - 처리 시간 단축률이 아님">
            {active => (
                <div className="pointer-events-none min-h-[390px] bg-[#0f1d28] p-5 text-white sm:p-7" aria-label="선택한 단계의 정적 화면 예시">
                    {active === 0 && <ContentList />}
                    {active === 1 && <ContentDetail />}
                    {active === 2 && <RegistrationPipeline />}
                </div>
            )}
        </EvidenceDemo>
    )
}

function ContentList() {
    const contents = [
        { title: '한글 타자 연습', tags: ['타자', 'Canvas'], files: '12개 미션', status: '배포 완료' },
        { title: '레이저 반사 퍼즐', tags: ['퍼즐', 'Phaser'], files: '8개 미션', status: '배포 완료' },
        { title: '알고리즘 카드', tags: ['Canva', '다국어'], files: '15개 언어', status: '업로드됨' },
    ]
    return (<>
        <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#7dd3fc]">Contents playground - 화면 예시</p>
                <h4 className="mt-2 text-2xl font-black">콘텐츠 검색</h4>
            </div>
            <span className="border border-white/25 px-3 py-2 text-[11px]">이름, 설명, 라벨 검색</span>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
            {['전체', 'Phaser', 'Canvas', 'Canva', '배포필요'].map((tag, index) => <span key={tag} className={`rounded-full border px-3 py-1.5 text-[10px] font-black ${index === 0 ? 'border-[#38bdf8] bg-[#38bdf8] text-[#10202d]' : 'border-white/20 text-white/65'}`}>
                {tag}
            </span>)}
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
            {contents.map(item => <div key={item.title} className="border border-white/15 bg-white/[0.06] p-4">
                <div className="aspect-[16/8] bg-gradient-to-br from-[#233c55] to-[#152431] p-3 text-[10px] text-white/45">콘텐츠 썸네일</div>
                <h5 className="mt-4 font-black">
                    {item.title}
                </h5>
                <div className="mt-2 flex flex-wrap gap-1">
                    {item.tags.map(tag => <span key={tag} className="rounded-full bg-white/10 px-2 py-1 text-[9px] text-white/65">
                        {tag}
                    </span>)}
                </div>
                <div className="mt-4 flex justify-between text-[10px] text-white/50">
                    <span>
                        {item.files}
                    </span>
                    <span>
                        {item.status}
                    </span>
                </div>
            </div>)}
        </div>
    </>)
}

function ContentDetail() {
    return (<>
        <div className="flex items-center justify-between border-b border-white/15 pb-4">
            <div>
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#7dd3fc]">레이저 반사 퍼즐 - 화면 예시</p>
                <h4 className="mt-2 text-2xl font-black">콘텐츠 상세와 미션</h4>
            </div>
            <span className="rounded-full bg-[#22c55e]/15 px-3 py-1.5 text-[10px] font-black text-[#86efac]">운영 v12</span>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-[260px_minmax(0,1fr)]">
            <aside className="border border-white/15 bg-black/15 p-4">
                <p className="text-[10px] font-black text-white/40">파일 / 미션 (8)</p>
                <div className="mt-3 space-y-2">
                    {['mission-01.html  |  빛의 방향', 'mission-02.html  |  거울 배치', 'mission-03.html  |  목표 도달', 'mission-04.html  |  복합 반사'].map((mission, index) => <div key={mission} className={`px-3 py-3 text-[11px] ${index === 1 ? 'border-l-2 border-[#38bdf8] bg-[#38bdf8]/10 font-black text-white' : 'text-white/55'}`}>
                        {mission}
                    </div>)}
                </div>
            </aside>
            <div className="grid min-h-56 place-items-center border border-white/15 bg-[#050b10]">
                <div className="text-center">
                    <div className="mx-auto h-16 w-16 rotate-45 border-4 border-[#38bdf8]" />
                    <p className="mt-7 text-sm font-black">미션 02 - 거울 배치</p>
                    <p className="mt-2 text-[11px] text-white/45">선택한 미션을 CDN 주소로 미리보기</p>
                </div>
            </div>
        </div>
    </>)
}

function RegistrationPipeline() {
    return (<>
        <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#7dd3fc]">Canva registration - 화면 예시</p>
        <h4 className="mt-2 text-2xl font-black">외부 HTML을 등록 가능한 형태로 가공</h4>
        <div className="mt-7 grid gap-2 sm:grid-cols-3">
            {['HTML 수집', '이미지 다운로드', 'WebP 변환', 'CDN 경로 치환', '언어별 산출물', '다중 등록'].map((item, index) => <div key={item} className="border border-white/15 bg-white/[0.06] p-4">
                <span className="text-[10px] font-black text-[#7dd3fc]">
                    {String(index + 1).padStart(2, '0')}
                </span>
                <p className="mt-2 text-[12px] font-black">
                    {item}
                </p>
            </div>)}
        </div>
        <p className="mt-6 border-l-2 border-[#38bdf8] pl-4 text-[12px] leading-6 text-white/55">Puppeteer 수집부터 이미지 변환, 경로 치환, 다중 등록까지 연결했습니다. 시간 단축률은 재현 측정 전까지 사용하지 않습니다.</p>
    </>)
}
