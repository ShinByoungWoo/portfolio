import type { CaseStudy, InteractiveClip } from '../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const profile = {
    name: '신병우',
    role: '프론트엔드 개발자',
    portfolioIntro: [
        '2022년부터 사용자 서비스, 운영자 도구, 콘텐츠 배포 환경을 개발해 온 프론트엔드 개발자 신병우입니다.',
        '역할별 접근 제어, 대량 데이터 조회, 중단한 작업의 재개처럼 서비스 운영에서 반복되는 문제를 다뤘습니다. 파트너 진입부터 콘텐츠 실행·배포까지 이어지는 기능을 구현합니다.',
    ],
    resumeSummary:
        '4년 이상 사용자 서비스와 운영자 도구를 개발했습니다. TypeScript와 Vue/Nuxt를 주로 사용하며, 역할별 접근 제어·데이터 조회·콘텐츠 배포를 제품의 실제 사용 흐름에 맞게 구현해 왔습니다.',
    email: 'sbw0121@naver.com',
    phone: '010-4901-2582',
    github: 'https://github.com/ShinByoungWoo',
    portfolio: 'https://shinbyoungwoo.github.io/portfolio/',
    company: '로지브라더스 · CODMOS',
    companyIntro: 'SW·AI 교육 플랫폼 개발·운영. CODMOS는 900개 이상 교육기관에서 채택한 서비스입니다.',
    period: '2022.06 - 현재',
    updatedAt: '2026.09.29',
}

export const proofPoints = [
    {
        value: '4년+',
        label: '프론트엔드 실무',
        detail: '2022.06부터 사용자 서비스와 운영 도구를 개발·유지보수했습니다.',
    },
    {
        value: 'LMS · Admin',
        label: '제품 개발',
        detail: '역할별 진입, 조건별 데이터 조회, 학습 리포트를 구현했습니다.',
    },
    {
        value: '독립 배포',
        label: '콘텐츠 운영',
        detail: '서비스 코드와 콘텐츠를 분리하고 버전 배포·롤백을 구성했습니다.',
    },
]

export const experienceBullets = [
    '학생·교사 서비스, 관리자 도구, 파트너 웹의 화면과 API 연동을 개발·유지보수했습니다.',
    '콘텐츠 빌드·배포 자동화와 iframe 연동, CSAP 프론트엔드 요구사항 대응을 맡았습니다.',
]

const interactiveClips: InteractiveClip[] = [
    {
        id: 'typing-keys',
        title: '한글 타자 · 자리 연습',
        label: '한글 입력 처리',
        src: publicAsset('assets/game_video/typing_game_finger_position_practice.mp4'),
        description: '한글 조합 입력을 자모 단위로 해석하고 정확도·타수 계산, 단계 전환, 결과 리포트를 연결했습니다.',
    },
    {
        id: 'typing-words',
        title: '한글 타자 · 단어 연습',
        label: '입력과 결과 측정',
        src: publicAsset('assets/game_video/typing_game_word.mp4'),
        description: '자리 연습 이후 단어 입력으로 난이도를 전환하고, 오타·속도·완료 조건을 같은 측정 흐름으로 연결했습니다.',
    },
    {
        id: 'isometric',
        title: '컨베이어 분류 게임',
        label: '좌표와 경로 처리',
        src: publicAsset('assets/game_video/Isometric_game.mp4'),
        description: '분기 타일의 방향과 목적지를 상태로 관리하고, PathFollower가 선택한 경로를 따라가도록 이동 규칙을 분리했습니다.',
    },
    {
        id: 'laser',
        title: '레이저 반사 퍼즐',
        label: '그리드 충돌 판정',
        src: publicAsset('assets/game_video/laser_game.mp4'),
        description: '9×9 그리드에서 거울 방향에 따라 진행 벡터를 바꾸고, 충돌 지점과 목표 도달 여부를 판정했습니다.',
    },
]

export const caseStudies: CaseStudy[] = [
    {
        id: 'partner-web',
        number: '01',
        category: '파트너 서비스',
        title: '파트너별 진입을 나누고, 중단한 미션으로 돌아오도록 구현했습니다.',
        subtitle: 'Codmos Partner Web',
        period: '2026.06 - 2026.07',
        role: '파트너별 라우팅, 신규·이어하기 상태, iframe 진행 상태 연동',
        stack: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Pinia', 'postMessage'],
        summary: '파트너와 체험 콘텐츠마다 진입 조건이 달랐습니다. 같은 학습 화면을 재사용하면서 신규 이용자, 이어하기 이용자, 세션 만료 후 재방문을 구분해야 했습니다.',
        decisions: [
            {
                question: '파트너가 늘어날 때 화면 복제를 어떻게 줄였나',
                reason: '파트너별로 화면을 복사하면 공통 기능을 고칠 때 같은 변경을 반복해야 합니다. 진입 조건과 콘텐츠 식별을 공통 실행 화면에서 분리했습니다.',
                implementation: 'partnerKey·contentSlug 기반 동적 라우팅과 URL 유효성 검증을 구성했습니다. 파트너와 콘텐츠를 확인한 뒤 공통 맵·미션 실행 화면으로 연결했습니다.',
            },
            {
                question: '중단한 학습을 다시 시작할 때 어떤 상태를 복원했나',
                reason: '신규 시작과 이어하기를 같은 초기화로 처리하면 진행 중이던 위치를 잃습니다. 진입 모드와 돌아갈 경로를 함께 다뤄야 했습니다.',
                implementation: '신규·이어하기 진입과 복귀 경로 보존을 구현하고, iframe의 로딩·오류·완료 메시지를 부모 화면의 진행 상태에 연결했습니다.',
            },
        ],
        choices: [
            { name: '동적 라우팅', reason: '파트너별 식별·진입 조건과 공통 학습 화면을 분리하기 위해' },
            { name: 'postMessage', reason: '실행 문맥이 다른 콘텐츠와 부모 화면 사이에 진행 상태를 전달하기 위해' },
        ],
        result: {
            value: '신규 · 이어하기 · 재방문',
            label: '진입 상태별로 시작 위치를 결정하고, 파트너별 경로에서 같은 미션 실행 화면을 재사용하도록 구성했습니다.',
        },
        resumeBullets: [
            '파트너별 화면 복제를 줄이기 위해 partnerKey·contentSlug 기반 동적 라우팅과 콘텐츠 유효성 검증을 구현했습니다.',
            '신규·이어하기 진입과 복귀 경로 보존을 구현해 중단한 미션을 재개하도록 연결했습니다.',
            'iframe의 로딩·오류·완료 상태를 postMessage로 부모 화면과 동기화했습니다.',
        ],
    },
    {
        id: 'content-pipeline',
        number: '02',
        category: '콘텐츠 배포',
        title: '콘텐츠를 서비스 코드와 분리해 버전별로 배포했습니다.',
        subtitle: 'Codmos CMS',
        period: '2026.03 - 2026.06',
        role: '콘텐츠 빌드 산출물 통합, 메타데이터 관리, 버전 배포·이력·롤백',
        stack: ['Nuxt 4', 'Vue 2/3', 'Node.js', 'npm Workspaces', 'AWS S3/CDN'],
        summary: 'Vue 2·Vue 3·Nuxt·정적 HTML 등 제작 방식이 다른 콘텐츠를 여러 서비스에서 실행해야 했습니다. 96개 콘텐츠 유형·2,128개 미션 파일을 다루는 제작·배포 환경에서 작업했습니다.',
        decisions: [
            {
                question: '제작 방식이 다른 콘텐츠를 어떻게 같은 절차로 배포했나',
                reason: '콘텐츠마다 빌드 산출물 위치와 형식이 달라, 서비스가 개별 제작 환경까지 알면 배포 의존성이 커집니다.',
                implementation: 'Workspace에서 콘텐츠 유형별 빌드 산출물을 판별하고 메타데이터로 관리했습니다. 정적 산출물은 S3/CDN으로 배포하고 서비스는 URL을 iframe에서 실행하도록 분리했습니다.',
            },
            {
                question: '새 버전에 문제가 생기면 어떻게 이전 상태로 돌아가게 했나',
                reason: '최신 파일만 덮어쓰면 이전에 배포한 내용을 찾거나 복원하기 어렵습니다. 배포 단위와 되돌릴 버전을 함께 관리해야 했습니다.',
                implementation: '콘텐츠명·버전을 배포 단위로 두고 중복 버전을 차단했습니다. 배포 이력과 버전 아카이브, 이전 버전으로 되돌리는 롤백 절차를 구성했습니다.',
            },
            {
                question: '여러 Canva 문서에서 사용하는 같은 이미지는 어떻게 저장했나',
                reason: '문서마다 이미지를 따로 저장하면 같은 이미지가 반복해서 쌓입니다. 다운로드한 파일 내용으로 중복을 판별하고 공용 에셋을 참조하도록 구성했습니다.',
                implementation: '원본 바이트의 MD5 앞 12자리를 파일명으로 사용하고, 래스터 이미지를 sharp로 WebP 품질 85로 변환했습니다. SVG·GIF는 원본을 유지했습니다.',
            },
        ],
        choices: [
            { name: 'Workspaces', reason: '서로 다른 콘텐츠 제작 환경을 한 저장소에서 관리하기 위해' },
            { name: 'S3/CDN · iframe', reason: '콘텐츠 산출물의 배포 주기를 서비스 코드의 배포 주기와 분리하기 위해' },
        ],
        result: {
            value: '이미지 용량 62.8% 절감 추정',
            label: '2026.09.23 집계한 Canva 10개 폴더·208개 HTML의 참조 이미지 기준입니다. 현재 형식으로 페이지마다 저장하는 가정 1,128.21 MiB 대비 고유 이미지 419.41 MiB로, 약 708.80 MiB 절감을 추산했습니다. WebP 변환 전 원본과의 비교는 포함하지 않았습니다. 콘텐츠별 버전 배포·롤백도 구성했습니다.',
        },
        resumeBullets: [
            '96개 콘텐츠 유형·2,128개 미션 파일을 다루는 환경에서 빌드 산출물 판별과 메타데이터 기반 관리 흐름을 구현했습니다.',
            'S3/CDN 정적 배포와 iframe 실행 구조로 서비스 코드와 콘텐츠의 배포 주기를 분리했습니다.',
            '콘텐츠명·버전 기준 배포, 중복 버전 차단, 배포 이력·롤백을 구성했습니다.',
            'Canva 이미지에 MD5 기반 중복 제거·WebP 변환을 적용했습니다. 10개 폴더·208개 HTML의 참조 이미지 기준, 같은 형식으로 페이지마다 저장하는 가정 대비 용량을 약 62.8% 절감한 것으로 추산했습니다(1,128.21 → 419.41 MiB, 2026.09.23 집계).',
        ],
    },
    {
        id: 'product-system',
        number: '03',
        category: '사용자 서비스 · 운영 도구',
        title: '전체 조회를 필요한 페이지 조회로 바꾸고, 역할별 접근을 정리했습니다.',
        subtitle: 'Codmos LMS · Admin Web v2',
        period: '2025.09 - 2026.03',
        role: '역할별 화면·라우팅, 운영 목록의 조회 흐름, 학습 리포트 구현',
        stack: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Pinia', 'PrimeVue'],
        summary: '학생·교사 서비스와 운영자 도구를 함께 개발했습니다. 계정·기관·콘텐츠·학습 데이터가 늘어나면서, 역할별 접근 규칙과 목록의 조회 범위를 정리해야 했습니다.',
        decisions: [
            {
                question: '데이터가 늘어나는 운영 목록은 어디서 나눠 조회했나',
                reason: '전체 데이터를 받은 뒤 화면에서만 나누면 보지 않는 데이터도 전송·처리해야 합니다. 검색 조건과 페이지를 서버 요청에 반영했습니다.',
                implementation: '전체 조회를 서버 페이지네이션·조건 기반 조회로 전환했습니다. 계정·기관·콘텐츠·학습 도메인의 조회 조건과 상태를 공통화했습니다.',
            },
            {
                question: '역할별 진입과 학습 지표를 어떻게 구분했나',
                reason: '메뉴 노출만 바꾸면 직접 URL로 진입하는 흐름이 남습니다. 리포트에서도 콘텐츠 길이와 실제 학습 시간은 의미가 다른 데이터였습니다.',
                implementation: '역할별 라우트 가드를 구현하고 duration과 timeSpent를 구분했습니다. 개념·실습·평가·추천 단위의 리포트로 학생별 학습 상태를 표시했습니다.',
            },
        ],
        choices: [
            { name: '서버 페이지네이션', reason: '현재 조건과 페이지에 필요한 데이터만 요청하기 위해' },
            { name: 'Nuxt 미들웨어', reason: '페이지 진입 시 역할을 확인하는 공통 지점을 두기 위해' },
        ],
        result: {
            value: '필요한 범위만 조회',
            label: '운영 목록의 요청 범위를 조건·페이지 단위로 바꾸고, LMS와 Admin에서 역할별 진입과 학습 데이터의 의미를 구분했습니다.',
        },
        resumeBullets: [
            '운영 목록을 전체 조회에서 서버 페이지네이션·조건 기반 조회로 전환하고, 도메인별 조회 조건과 상태를 공통화했습니다.',
            '역할별 라우트 가드를 구현하고, 콘텐츠 재생 시간과 실제 학습 시간을 구분한 리포트를 구성했습니다.',
            '개념·실습·평가·추천 콘텐츠 단위로 학습 데이터를 표시해 교사가 학생별 학습 상태를 확인하도록 구현했습니다.',
        ],
    },
    {
        id: 'security-flow',
        number: '04',
        category: '인증 · 보안 요구사항',
        title: '접근 경로와 세션 만료 처리를 공통 인증 흐름으로 모았습니다.',
        subtitle: 'Spark EDU · CSAP 대응',
        period: '2024.12 - 2025.07',
        role: 'CSAP 대응 중 프론트엔드 접근 제어, 세션 만료, 민감정보 처리 구현',
        stack: ['Nuxt 3', 'Vue 3', 'TypeScript', 'JWT', 'Web Crypto API'],
        summary: 'CSAP 인증 대응이 필요한 교사·학생 통합 LMS에서 프론트엔드 요구사항 구현에 참여했습니다. 역할별 접근과 만료된 세션의 처리, 민감정보 암호화를 실제 화면 흐름에 연결했습니다.',
        decisions: [
            {
                question: '인증 만료를 페이지마다 처리하지 않은 이유는 무엇인가',
                reason: '각 페이지에서 만료를 처리하면 로그인 화면으로 돌아가는 동작과 세션 정리 시점이 달라질 수 있습니다.',
                implementation: '역할별 접근 경로를 구분하고 공통 인증 흐름에서 만료를 감지해 세션 정리와 로그인 화면 이동을 처리했습니다.',
            },
            {
                question: '민감정보 암호화에는 어떤 구현을 사용했나',
                reason: '브라우저에서 암호화 처리가 필요한 요구사항에 맞춰, 별도 암호화 구현 대신 브라우저 기본 API를 사용했습니다.',
                implementation: 'Web Crypto API 기반 AES-256-GCM 암호화를 적용했습니다. 요구사항에 따른 로깅·오류 보고·접근성 기능도 구현했습니다.',
            },
        ],
        choices: [
            { name: '공통 인증 처리', reason: '접근 경로와 세션 만료 시의 화면 전환을 같은 기준으로 처리하기 위해' },
            { name: 'Web Crypto API', reason: '요구된 AES-GCM 암호화를 브라우저 기본 구현으로 처리하기 위해' },
        ],
        result: {
            value: '프론트엔드 요구사항 구현',
            label: 'CSAP 대응 과정에서 담당한 접근 제어·세션 만료·암호화 항목을 구현했습니다.',
        },
        resumeBullets: [
            'CSAP 대응에 참여해 교사·학생의 접근 경로를 구분하고, 공통 인증 흐름에서 세션 만료와 로그인 화면 이동을 처리했습니다.',
            'Web Crypto API 기반 AES-256-GCM 암호화와 요구사항에 따른 로깅·오류 보고·접근성 기능을 구현했습니다.',
        ],
    },
    {
        id: 'interactive-systems',
        number: '05',
        category: '인터랙티브 콘텐츠',
        title: '한글 입력과 Canvas 렌더링, 콘텐츠 리소스 전달을 다뤘습니다.',
        subtitle: '인터랙티브 콘텐츠 · 리소스 파이프라인',
        period: '2022.06 - 2026.05',
        role: '한글 입력·좌표·충돌 처리, 렌더링 개선, HTML 리소스 수집·치환',
        stack: ['Phaser 3', 'TypeScript', 'Canvas 2D', 'Puppeteer', 'AWS S3/CDN'],
        summary: '한글 입력과 실시간 좌표 처리가 필요한 학습 콘텐츠를 개발했습니다. 오브젝트의 반복 생성·렌더링 비용과 외부 HTML 리소스의 URL 만료 문제도 함께 다뤘습니다.',
        decisions: [
            {
                question: 'Phaser를 쓰는 화면과 일반 UI를 어떤 기준으로 나눴나',
                reason: '충돌·Tilemap·실시간 위치 계산과 텍스트·폼 중심 화면은 필요한 기능이 다릅니다. 화면의 핵심 동작에 맞춰 구현 방식을 나눴습니다.',
                implementation: '한글 타자, 경로 분기, 그리드 반사 로직을 구현했습니다. Canvas 장면에는 오브젝트 풀링과 화면 밖 비활성화를 적용해 반복 생성·갱신을 줄였습니다.',
            },
            {
                question: '외부 HTML의 이미지 URL이 만료되는 문제는 어떻게 처리했나',
                reason: '원본 URL을 그대로 쓰면 이미지가 만료되고, base64로 넣으면 HTML이 커졌습니다. 문서와 리소스를 따로 관리해야 했습니다.',
                implementation: 'Puppeteer로 리소스를 수집해 S3/CDN에 올리고 HTML 경로를 치환했습니다. iframe의 페이지 이동·진행 상태는 postMessage로 서비스에 전달했습니다.',
            },
        ],
        choices: [
            { name: 'Phaser · Canvas', reason: '충돌·타일맵·다수 오브젝트의 실시간 상호작용을 처리하기 위해' },
            { name: 'Puppeteer', reason: 'HTML 콘텐츠가 사용하는 리소스의 수집·주소 치환을 자동화하기 위해' },
        ],
        result: {
            value: '입력 · 렌더링 · 전달',
            label: '오브젝트 재사용과 비활성화를 적용하고, HTML 리소스를 직접 관리하는 CDN 주소로 옮겼습니다. 아래 영상에서 입력·좌표 처리 결과를 볼 수 있습니다.',
        },
        media: interactiveClips,
        resumeBullets: [
            '한글 조합 입력·정확도 계산, 경로 분기·충돌 로직을 구현하고 오브젝트 풀링과 화면 밖 비활성화로 반복 생성·갱신을 줄였습니다.',
            '만료 URL과 base64 용량 문제에 대응해 Puppeteer로 HTML 리소스를 수집하고 S3/CDN 경로로 치환하는 작업을 자동화했습니다.',
        ],
    },
]

export const skillGroups = [
    { category: '주요 실무', items: ['TypeScript', 'JavaScript', 'Vue 2/3', 'Nuxt 3/4', 'Pinia', 'REST API'] },
    { category: '제품·브라우저', items: ['PrimeVue', 'iframe / postMessage', 'Web Crypto API', 'Phaser 3 / Canvas'] },
    { category: '테스트·운영', items: ['Playwright', 'Puppeteer', 'Node.js', 'AWS S3/CDN', 'Git'] },
    { category: '포트폴리오 제작', items: ['React', 'TypeScript', 'Vite', 'GitHub Actions'] },
]

export const education = [
    { school: '한국방송통신대학교', detail: '재학 중' },
    { school: '전남과학대학교', detail: '호텔관광학과 졸업' },
]
