import type { CaseStudy, InteractiveClip } from '../types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const profile = {
    name: '신병우',
    portfolioIntro: [
        '복잡한 권한과 데이터 흐름을 사용자가 이해하기 쉬운 화면으로 정리합니다.',
        '서비스 UI부터 인증·실시간 통신·콘텐츠 배포·Canvas 성능까지 브라우저에서 발생하는 문제를 분석하고 제품 흐름에 맞는 구조로 해결해 왔습니다.',
    ],
    resumeSummary:
        '복잡한 권한과 데이터 흐름을 사용자가 이해하기 쉬운 화면으로 정리하는 프론트엔드 개발자입니다. 서비스 UI부터 인증·실시간 통신·콘텐츠 배포·Canvas 성능까지 브라우저에서 발생하는 문제를 분석하고 제품 흐름에 맞는 구조로 해결해 왔습니다.',
    email: 'sbw0121@naver.com',
    phone: '010-4901-2582',
    github: 'https://github.com/ShinByoungWoo',
    company: 'codmos.io',
    companyIntro:
        'codmos.io (로지브라더스) — 초등 코딩·컴퓨팅 사고력 교육 에듀테크 스타트업, 900개 이상 교육기관 채택',
    period: '2022.06 — 현재',
}

export const proofPoints = [
    {
        value: '4+',
        label: '프론트엔드 개발 연차',
        detail: '2022년부터 사용자 서비스와 운영 도구를 개발했습니다.',
    },
    {
        value: '40→60',
        label: 'Canvas FPS',
        detail: '생성 비용과 렌더링 병목을 줄여 프레임을 회복했습니다.',
    },
    {
        value: 'CSAP',
        label: '보안 요구사항 구현',
        detail: '접근 제어, 암호화, 세션 만료를 실제 사용자 흐름에 적용했습니다.',
    },
]

const interactiveClips: InteractiveClip[] = [
    {
        id: 'typing-keys',
        title: '한글 타자 · 자리 연습',
        label: 'Korean IME 01',
        src: publicAsset('assets/game_video/typing_game_finger_position_practice.mp4'),
        description:
            '조합 중인 한글을 완성 문자처럼 세면 정확도와 WPM이 틀어집니다. 자모 단위 입력을 해석하고 단계 전환과 결과 리포트를 같은 흐름으로 묶었습니다.',
    },
    {
        id: 'typing-words',
        title: '한글 타자 · 단어 연습',
        label: 'Korean IME 02',
        src: publicAsset('assets/game_video/typing_game_word.mp4'),
        description:
            '손가락 자리 학습 이후 실제 단어 입력으로 난이도를 전환하고, 오타·속도·완료 조건을 같은 측정 규칙으로 이어지게 했습니다.',
    },
    {
        id: 'isometric',
        title: '컨베이어 분류 게임',
        label: 'Tilemap',
        src: publicAsset('assets/game_video/Isometric_game.mp4'),
        description:
            '아이소메트릭 공간에서 분기 타일의 방향과 목적지를 상태로 관리하고, PathFollower가 선택된 경로를 따라가도록 이동 규칙을 분리했습니다.',
    },
    {
        id: 'laser',
        title: '레이저 반사 퍼즐',
        label: 'Grid logic',
        src: publicAsset('assets/game_video/laser_game.mp4'),
        description:
            '9×9 그리드에서 거울 방향에 따라 진행 벡터를 바꾸고, 충돌 지점과 배터리 도달 여부를 매 이동마다 판정하도록 구현했습니다.',
    },
]

export const caseStudies: CaseStudy[] = [
    {
        id: 'product-system',
        number: '01',
        category: 'Product system',
        title: '역할·데이터·실시간 상태를 하나의 제품 흐름으로 정리했습니다.',
        subtitle: 'CODMOS Web LMS · Admin Web v2',
        period: '2025.09 — 2026.05',
        summary:
            '하나의 데이터가 역할마다 다른 화면과 권한으로 작동해야 했습니다. 사용자 서비스와 운영 도구를 함께 개발했기 때문에 기능 수보다 진입 경계와 데이터 흐름이 어긋나지 않는 구조가 중요했습니다.',
        decisions: [
            {
                question: '왜 권한 분기를 버튼 노출 여부가 아니라 라우트 계층에서 처리했나',
                reason:
                    '화면에서 메뉴를 숨겨도 주소를 직접 입력하면 접근할 수 있습니다. 권한은 표현 문제가 아니라 진입 경계의 문제라고 판단했습니다.',
                implementation:
                    '역할별 경로를 분리하고 전역 미들웨어에서 권한을 검사해 강제 URL 접근을 차단했습니다. 인증 만료와 토큰 갱신도 공통 API 흐름에서 처리했습니다.',
            },
            {
                question: '왜 학습 데이터를 하나의 점수로 합치지 않았나',
                reason:
                    '로그인해 있던 시간은 실제 학습 시간과 다르고, 빨리 푼 학생에게 긴 학습 시간을 좋은 지표로 적용할 수도 없습니다.',
                implementation:
                    '체류 시간과 순수 학습 시간을 분리하고, 성실도는 소요 시간이 아닌 완료 미션 수를 중심으로 읽도록 리포트 구조를 설계했습니다.',
            },
            {
                question: '왜 실시간 상태를 일반 API 호출과 분리했나',
                reason:
                    '화면 잠금·이동 동기화와 협업 보드는 요청 이후에도 연결된 사용자에게 상태가 계속 전파돼야 했습니다.',
                implementation:
                    'Socket.IO 연결과 클래스 입장·퇴장 생명주기를 별도 계층으로 두고, 화면에서는 수신한 이벤트를 역할별 UI 상태로 변환했습니다.',
            },
        ],
        choices: [
            {
                name: 'Nuxt 4',
                reason: '역할별 경로, 레이아웃, 미들웨어를 같은 파일 구조에서 추적하기 위해',
            },
            {
                name: 'Socket.IO',
                reason: '수업 중 화면 잠금과 동기화처럼 서버가 먼저 보내야 하는 상태를 전달하기 위해',
            },
        ],
        result: {
            value: '2개 제품 · 3개 역할',
            label: 'LMS와 운영 Admin에서 역할별 진입 경계와 데이터 흐름을 분리했습니다.',
        },
        resumeBullets: [
            '역할별 라우팅과 강제 URL 접근 방지 미들웨어 구현',
            '학습 시간, 완료 미션, 평가 데이터를 목적별로 구분한 AI 리포트 화면 구현',
            '게시판·협업 보드와 역할 간 화면 동기화를 위한 CRUD 및 실시간 이벤트 처리',
        ],
    },
    {
        id: 'security-flow',
        number: '02',
        category: 'Trust boundary',
        title: '보안 요구사항을 체크리스트가 아닌 사용자 흐름으로 만들었습니다.',
        subtitle: 'Spark EDU · CSAP 대응',
        period: '2024.12 — 2025.08',
        summary:
            '보안 문서에 적힌 요구사항은 실제 로그인, 라우팅, 민감정보 전송 흐름에서 작동해야 의미가 있습니다. 공격 입력을 받는 경계와 이미 검증된 내부 흐름을 구분해 필요한 위치에만 방어 로직을 두었습니다.',
        decisions: [
            {
                question: '왜 Path Traversal 대응을 라우팅 경계에서 시작했나',
                reason:
                    '악의적인 경로 문자열이 내부 화면 로직까지 들어온 뒤 처리하면 컴포넌트마다 방어 코드가 중복되고 빠지는 경로가 생깁니다.',
                implementation:
                    '외부에서 들어오는 경로를 검증하고 허용된 라우트와 역할을 통과한 요청만 화면 흐름으로 넘겼습니다.',
            },
            {
                question: '왜 별도 암호화 패키지 대신 Web Crypto API를 사용했나',
                reason:
                    '브라우저가 제공하는 검증된 구현으로 의존성을 늘리지 않으면서, 암호화와 변조 검증을 함께 처리할 수 있었습니다.',
                implementation:
                    '민감정보를 전송하기 전에 AES-256-GCM으로 암호화하고, 브라우저별 인코딩 차이까지 실제 로그인 환경에서 확인했습니다.',
            },
            {
                question: '왜 인증 만료를 각 페이지에서 처리하지 않았나',
                reason:
                    '페이지별 예외 처리는 만료된 화면이 남거나 서로 다른 로그아웃 경험을 만들 수 있습니다.',
                implementation:
                    '공통 인증 흐름에서 만료를 감지해 세션을 정리하고 로그인 화면으로 이동하도록 한 곳에서 처리했습니다.',
            },
        ],
        choices: [
            {
                name: 'Web Crypto API',
                reason: '브라우저 기본 구현으로 AES-GCM의 암호화와 인증 태그 검증을 함께 처리하기 위해',
            },
        ],
        result: {
            value: 'CSAP',
            label: '접근 제어, 암호화, 세션 만료 요구사항을 실제 화면 경계에 연결했습니다.',
        },
        resumeBullets: [
            '역할 기반 라우트 가드와 Path Traversal 공격 입력 차단',
            'Web Crypto API 기반 AES-256-GCM 민감정보 암호화 및 브라우저 호환 이슈 대응',
            '인증 만료 감지와 자동 로그아웃 흐름을 공통 인증 계층에 구현',
        ],
    },
    {
        id: 'content-pipeline',
        number: '03',
        category: 'Content delivery',
        title: '만료되는 HTML 리소스를 다시 배포 가능한 파이프라인으로 바꿨습니다.',
        subtitle: 'AIDT HTML 콘텐츠 · CDN 자동화',
        period: '2024.03 — 2024.12',
        summary:
            '외부 도구에서 내보낸 HTML은 시간이 지나면 이미지 URL이 만료됐습니다. 이미지를 base64로 넣으면 파일이 지나치게 커졌기 때문에, 원본 HTML과 장기 운영 가능한 리소스 주소를 분리했습니다.',
        decisions: [
            {
                question: '왜 이미지를 HTML 안에 base64로 넣지 않았나',
                reason:
                    'URL 만료 문제는 없어지지만 콘텐츠 크기가 커지고, 같은 이미지를 여러 콘텐츠가 재사용할 수 없었습니다.',
                implementation:
                    '이미지를 S3/CDN으로 옮기고 HTML의 리소스 경로만 CDN URL로 치환해 문서와 자산의 배포 주기를 분리했습니다.',
            },
            {
                question: '왜 수작업 다운로드 대신 Puppeteer를 사용했나',
                reason:
                    '내보낸 HTML마다 리소스 수와 경로가 달라 사람이 확인하면 누락 여부를 보장하기 어려웠습니다.',
                implementation:
                    '브라우저가 실제로 요청하는 리소스를 수집해 업로드하고, 치환 결과를 다시 확인하는 반복 작업을 자동화했습니다.',
            },
            {
                question: '왜 iframe 내부 상태를 postMessage로 전달했나',
                reason:
                    '콘텐츠와 서비스는 실행 문맥이 분리돼 있어 부모 화면이 내부 페이지 이동과 완료 상태를 직접 읽을 수 없습니다.',
                implementation:
                    'iframe 내부 이벤트를 명시적인 메시지 계약으로 바꾸고, 부모 서비스가 학습 진행 상태로 저장하도록 연결했습니다.',
            },
        ],
        choices: [
            {
                name: 'Puppeteer',
                reason: '정적 HTML 분석이 아니라 브라우저가 실제 요청한 리소스를 빠짐없이 수집하기 위해',
            },
            {
                name: 'postMessage',
                reason: '서로 분리된 iframe과 부모 서비스 사이에 허용된 상태만 전달하기 위해',
            },
        ],
        result: {
            value: 'HTML → CDN',
            label: '만료 URL과 문서 용량 문제를 콘텐츠 업로드 과정에서 함께 제거했습니다.',
        },
        resumeBullets: [
            'Puppeteer로 HTML 리소스를 수집하고 S3/CDN 업로드 및 URL 치환 자동화',
            'base64 삽입 없이 장기 서비스 가능한 콘텐츠 자산 구조로 전환',
            'iframe 페이지 이동과 학습 진행 상태를 postMessage로 서비스와 동기화',
        ],
    },
    {
        id: 'interactive-systems',
        number: '04',
        category: 'Interaction systems',
        title: '게임을 만든 것이 아니라 입력과 렌더링 규칙을 설계했습니다.',
        subtitle: 'Phaser · Canvas 기반 학습 콘텐츠',
        period: '2022 — 2025',
        summary:
            '인터랙션이 있다는 이유만으로 게임 엔진을 사용하지 않았습니다. 충돌, Tilemap, 다수 오브젝트의 실시간 위치 계산이 필요한 콘텐츠에만 Phaser를 선택하고 HTML 중심 화면은 일반 UI로 구현하는 기준을 세웠습니다.',
        decisions: [
            {
                question: '왜 모든 인터랙티브 콘텐츠를 Phaser로 만들지 않았나',
                reason:
                    'HTML 요소가 많은 화면까지 Canvas에 넣으면 접근성과 개발 편의가 낮아지고 DOMElement 레이어 제약이 생깁니다.',
                implementation:
                    '충돌·Tilemap·실시간 좌표 계산이 핵심이면 Phaser, 텍스트와 폼이 중심이면 Nuxt를 사용하는 선택 기준을 팀 문서로 정리했습니다.',
            },
            {
                question: '왜 오브젝트 풀링과 이미지 리소스로 렌더링 방식을 바꿨나',
                reason:
                    '반복 생성·해제와 매 프레임 Graphics를 다시 그리는 비용이 모바일에서 프레임 저하로 바로 드러났습니다.',
                implementation:
                    '사용하지 않는 오브젝트는 비활성화해 재사용하고, 반복 도형은 미리 만든 이미지로 교체해 생성과 드로우 호출을 줄였습니다.',
            },
        ],
        choices: [
            {
                name: 'Phaser 3',
                reason: '충돌, Tilemap, PathFollower처럼 프레임마다 계산해야 하는 상호작용을 일관되게 관리하기 위해',
            },
            {
                name: 'Canvas 2D',
                reason: 'DOM보다 많은 오브젝트를 한 렌더링 문맥에서 갱신해야 하는 장면을 위해',
            },
        ],
        result: {
            value: '40 → 60 fps',
            label: '생성·해제와 반복 드로우 병목을 줄여 목표 프레임을 회복했습니다.',
        },
        media: interactiveClips,
        resumeBullets: [
            'Phaser 도입 기준을 충돌·Tilemap·실시간 위치 계산 필요 여부로 명문화',
            '오브젝트 풀링과 렌더링 리소스 전환으로 Canvas 콘텐츠 FPS 40에서 60으로 개선',
            '한글 자모 입력, 아이소메트릭 분기, 그리드 반사 로직을 적용한 학습 콘텐츠 구현',
        ],
    },
]

export const skillGroups = [
    {
        category: 'Product UI',
        items: ['TypeScript', 'Vue 2/3', 'Nuxt 3/4', 'React', 'PrimeVue'],
    },
    {
        category: 'Browser boundary',
        items: ['Web Crypto API', 'iframe', 'postMessage', 'Socket.IO', 'EditorJS'],
    },
    {
        category: 'Interaction',
        items: ['Phaser 3', 'Canvas 2D', 'Tilemap', 'Fabric.js', 'Blockly'],
    },
    {
        category: 'Delivery',
        items: ['Puppeteer', 'Playwright', 'AWS S3/CDN', 'GitHub Actions'],
    },
]
