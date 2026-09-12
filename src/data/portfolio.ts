import type { CaseStudy, InteractiveClip } from '../types'

const publicAsset = (path: string) => `${import.meta.env?.BASE_URL ?? '/'}${path}`

export const profile = {
    name: '신병우',
    portfolioIntro: [
        '교육 서비스의 LMS·Admin·콘텐츠 CMS를 개발하는 프론트엔드 개발자입니다.',
        'Vue·Nuxt를 주력으로 코스와 학습 리포트, 계정 관리, 실시간 게시판을 개발했습니다. 기능 구현 이후의 QA·CS 대응과 콘텐츠 등록 자동화, Canvas 성능 개선까지 맡아 왔습니다.',
    ],
    resumeSummary:
        '교육 서비스의 LMS·Admin·콘텐츠 CMS를 개발하는 프론트엔드 개발자입니다. Vue·Nuxt 기반 코스·학습 리포트·계정 관리 화면과 실시간 게시판을 개발하고, QA·CS 대응을 통해 화면 상태와 데이터 흐름을 개선해 왔습니다.',
    email: 'sbw0121@naver.com',
    phone: '010-4901-2582',
    github: 'https://github.com/ShinByoungWoo',
    company: 'codmos.io',
    companyIntro:
        'codmos.io (로지브라더스) — 초등 코딩·컴퓨팅 사고력 교육 에듀테크 스타트업, 900개 이상 교육기관 채택',
    period: '2022.06 — 현재',
    role: '프론트엔드 개발자',
    team: 'LMS·Admin 프론트엔드 3명',
}

export const experienceBullets = [
    '프론트엔드 3명으로 LMS·Admin을 개발하며 코스·리포트·게시판과 계정 관리 화면 및 API 연동을 담당했습니다.',
    '코스와 리포트 사이의 상태 유지, 실시간 수업 동기화, 계정 목록 페이지네이션을 구현하고 QA·CS 이슈를 수정했습니다.',
    '콘텐츠 CMS 통합 과정에서 콘텐츠 등록과 Canva HTML 가공을 개발하고, Phaser·Canvas 학습 콘텐츠를 제작·개선했습니다.',
]

export const education = [
    { school: '한국방송통신대학교', detail: '재학 중' },
    { school: '전남과학대학교', detail: '호텔관광학과 졸업' },
]

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
        value: 'LMS · Admin',
        label: '제품 개발·운영',
        detail: '프론트엔드 3명 중 코스·리포트·게시판과 계정 관리 화면을 담당했습니다.',
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
        id: 'partner-web',
        number: '01',
        category: 'Partner integration',
        title: '파트너별 진입과 콘텐츠 이어하기 흐름을 연결했습니다.',
        subtitle: 'Codmos Partner Web',
        period: '2026.06 — 2026.07',
        scope: '파트너별 라우팅, 신규·이어하기 상태, iframe 진행 상태 연동 담당.',
        summary: '파트너별 진입 경로에서 학습 콘텐츠를 실행하는 서비스입니다. 파트너와 콘텐츠를 경로로 구분하고, 신규 학습과 중단한 미션의 재개 흐름을 연결했습니다.',
        decisions: [
            {
                question: '파트너와 콘텐츠별 진입 경로를 어떻게 관리했나',
                reason: '파트너와 콘텐츠 조합마다 진입 화면과 실행 대상을 일관되게 결정해야 했습니다.',
                implementation: 'partnerKey·contentSlug 기반 동적 라우팅과 콘텐츠 유효성 검증을 구현했습니다. 신규·이어하기 진입과 복귀 경로를 보존하도록 연결했습니다.',
            },
            {
                question: 'iframe 콘텐츠의 진행 상태를 어떻게 화면에 반영했나',
                reason: '별도 문맥에서 실행되는 콘텐츠의 로딩·오류·완료 상태를 부모 화면에서 처리해야 했습니다.',
                implementation: 'postMessage로 iframe 상태를 동기화하고 세션 만료 시 캐시 데이터를 정리하는 등 운영 이슈를 수정했습니다.',
            },
        ],
        choices: [
            { name: 'Nuxt · Pinia', reason: '파트너·콘텐츠 경로와 학습 진입 상태를 관리' },
            { name: 'postMessage', reason: 'iframe 콘텐츠와 부모 화면 사이의 상태를 전달' },
        ],
        result: {
            value: '신규 학습 · 이어하기',
            label: '파트너별 진입 경로에서 콘텐츠 실행·재개와 iframe 상태 표시를 연결했습니다.',
        },
        resumeBullets: [
            'partnerKey·contentSlug 기반 동적 라우팅과 콘텐츠 유효성 검증 구현',
            '신규·이어하기 진입과 복귀 경로 보존을 구현해 중단한 미션을 재개하도록 연결',
            'iframe의 로딩·오류·완료 상태를 postMessage로 부모 화면과 동기화하고 세션 만료 시 캐시 정리',
        ],
    },
    {
        id: 'product-system',
        number: '02',
        category: 'Product system',
        title: '코스·리포트·게시판을 수업의 흐름에 맞게 연결했습니다.',
        subtitle: 'CODMOS Web LMS',
        period: '2025.09 — 현재',
        scope: '프론트엔드 3명 중 코스·학습 리포트·학습게시판·클럽보드 화면과 API 연동 담당. 2026년 1~3월 주요 기능 개발, 이후 QA·CS 대응.',
        summary:
            '교사와 학생이 코스, 학습 리포트, 게시판을 오가며 수업을 진행하는 LMS입니다. 화면 이동 시 선택한 단원과 학습 상태가 이어지고, 수업에 늦게 입장해도 교사의 동기화 상태를 반영해야 했습니다.',
        decisions: [
            {
                question: '코스에서 리포트로 이동해도 선택한 단원을 유지하려면',
                reason:
                    '페이지마다 상태를 따로 관리하면 이동하거나 새로고침할 때 선택한 단원과 표시 데이터가 달라질 수 있었습니다.',
                implementation:
                    'AI 리포트 상태를 Pinia 스토어로 옮기고 코스↔리포트 이동 시 선택 상태 유지와 새로고침 대응을 구현했습니다. 교사·학생 화면에서 공통 상태를 사용하도록 연동했습니다.',
            },
            {
                question: '화면을 연 뒤 바뀌는 학습 결과를 어떻게 반영했나',
                reason:
                    '학습 결과와 AI 리포트 생성 상태가 초기 조회 이후에도 바뀌므로, 한 번의 API 요청만으로는 최신 상태를 보여줄 수 없었습니다.',
                implementation:
                    '리포트 API 연동과 주기적 폴링을 구현하고, 단원 변경에 따른 데이터 초기화·갱신과 폴링 재시작 이슈를 수정했습니다. 모델 개발이 아닌 결과 조회·표시와 학습 관리 UI를 담당했습니다.',
            },
            {
                question: '교사가 먼저 동기화한 수업에 학생이 늦게 입장하면',
                reason:
                    '입장 이후의 이벤트만 수신하면 교사가 이미 설정한 화면 잠금과 이동 상태를 놓칠 수 있었습니다.',
                implementation:
                    '클래스 입장 응답의 lockStatus와 syncStatus를 읽어 초기 잠금 상태와 이동 경로를 반영했습니다. 학습게시판·클럽보드의 API, 파일 업로드, 수정·삭제 권한 UI도 연동했습니다.',
            },
        ],
        choices: [
            {
                name: 'Nuxt · Pinia',
                reason: '교사·학생 화면의 경로를 구분하고 페이지 간 공유할 리포트 상태를 관리',
            },
            {
                name: 'Socket.IO',
                reason: '수업 중 화면 잠금과 동기화처럼 서버가 먼저 보내야 하는 상태를 전달하기 위해',
            },
        ],
        result: {
            value: '코스 ↔ 리포트',
            label: '페이지 이동 시 선택 상태를 유지하고, 수업 입장 시 기존 잠금·동기화 상태를 반영했습니다.',
        },
        resumeBullets: [
            '초등·중등 코스, 학습 리포트·학생 관리 화면 및 API 연동. Pinia 기반 리포트 상태 공유와 코스↔리포트 이동 상태 유지 구현',
            '리포트 생성 상태 폴링과 재시작 처리, 단원 변경·새로고침 시 데이터 갱신 이슈 대응',
            '학습게시판·클럽보드 CRUD, EditorJS·파일 업로드 연동 및 클래스 입장 시 잠금·동기화 상태 반영',
        ],
    },
    {
        id: 'admin-operations',
        number: '03',
        category: 'Admin operations',
        title: '계정 목록부터 등록·상세·수정까지 운영 화면을 개발했습니다.',
        subtitle: 'CODMOS Admin Web v2',
        period: '2025.09 — 현재',
        scope: '프론트엔드 3명 중 계정 목록·등록·상세·수정 화면과 API 연동 담당. 2026년 1~3월 목록·폼 개선, 이후 QA·CS 대응.',
        summary: '본부·기관·교사·학생 등 계정 유형마다 입력 조건과 조회 범위가 다른 운영 도구입니다. 계정 관리 화면과 API를 연결하고, 목록 조회 및 기관 선택 방식을 개선했습니다.',
        decisions: [
            {
                question: '계정 목록을 서버 페이지네이션으로 바꾼 이유',
                reason: '브라우저가 받은 목록을 필터링하는 방식에서 페이지·검색 조건을 서버 조회와 함께 관리하는 방식으로 전환해야 했습니다.',
                implementation: '계정 목록에 page·limit·search 파라미터와 total 기반 페이지 이동을 연동했습니다. 검색과 페이지 크기 변경 시 첫 페이지로 초기화하고 검색 요청에 디바운스를 적용했습니다.',
            },
            {
                question: '기관 선택 목록을 나눠 표시하면서 선택값을 유지하려면',
                reason: '긴 기관 목록을 한꺼번에 표시하는 부담을 줄이면서, 수정 화면의 기존 선택 기관이 초기 표시 범위 밖에 있어도 이름을 보여줘야 했습니다.',
                implementation: '기관 선택 UI에 가상 스크롤과 100개 단위 점진 표시를 적용하고, 선택된 항목을 표시 목록에 보완했습니다. 전체 기관 데이터 조회와 화면 표시 범위를 구분했습니다.',
            },
            {
                question: '계정 유형마다 다른 등록·수정 조건은 어떻게 처리했나',
                reason: '본부·기관·교사·학생 계정의 필드와 유효성 규칙, 수정 시 기본값이 서로 달랐습니다.',
                implementation: '계정 폼과 유형별 API 매핑을 연동하고 이메일·전화번호 유효성 검사, 기존 기관 선택값, 상위 기관 정보 자동 등록을 보완했습니다.',
            },
        ],
        choices: [
            { name: 'Nuxt · TypeScript', reason: '계정 유형별 페이지와 API 데이터 모델을 관리' },
            { name: 'PrimeVue', reason: '테이블·페이지네이션·폼·기관 선택 UI를 구성' },
        ],
        result: {
            value: '서버 페이지네이션',
            label: '계정 목록의 조회·검색·페이지 이동을 서버 응답 기준으로 전환하고, 기관 선택 UI의 표시 범위를 나눴습니다.',
        },
        resumeBullets: [
            '본부·기관·교사·학생 등 계정 목록·등록·상세·수정 화면과 유형별 API 매핑 구현',
            '계정 목록의 서버 페이지네이션·검색 연동, 조건 변경 시 페이지 초기화와 검색 디바운스 적용',
            '기관 선택 UI에 가상 스크롤·100개 단위 점진 표시 적용 및 기존 선택값 표시 보완',
        ],
    },
    {
        id: 'security-flow',
        number: '04',
        category: 'Trust boundary',
        title: '보안 요구사항을 체크리스트가 아닌 사용자 흐름으로 만들었습니다.',
        subtitle: 'Spark EDU · CSAP 대응',
        period: '2024.12 — 2025.07',
        summary:
            'CSAP 대응 과정에서 프론트엔드의 라우트 접근 처리와 세션 만료 흐름을 구현했습니다. 페이지별 예외 처리 대신 공통 인증 흐름으로 연결했습니다.',
        decisions: [
            {
                question: '허용되지 않은 경로의 화면 진입을 어떻게 처리했나',
                reason:
                    '페이지마다 접근 조건을 따로 두면 화면별 동작이 달라지고 누락이 생길 수 있었습니다.',
                implementation:
                    '허용 경로와 역할에 따른 라우트 가드를 적용했습니다. 담당 범위는 프론트엔드의 화면 진입 처리이며 서버 API의 권한 검증과는 구분됩니다.',
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
                name: '공통 인증 흐름',
                reason: '페이지마다 다른 만료 처리를 한 곳에서 관리하기 위해',
            },
        ],
        result: {
            value: '라우트 · 세션',
            label: 'CSAP 대응 중 프론트엔드 접근 처리와 세션 만료 흐름을 구현했습니다.',
        },
        resumeBullets: [
            'CSAP 대응 과정에서 역할 기반 라우트 가드와 비허용 경로의 화면 진입 처리 구현',
            '인증 만료 감지와 자동 로그아웃 흐름을 공통 인증 계층에 구현',
        ],
    },
    {
        id: 'content-pipeline',
        number: '05',
        category: 'Content delivery',
        title: '다양한 학습 콘텐츠를 CMS에 모으고 등록 과정을 자동화했습니다.',
        subtitle: 'CODMOS CMS · 콘텐츠 통합·Canva 등록',
        period: '2026.03 — 2026.06',
        scope: '팀의 콘텐츠 통합 작업에 참여. 콘텐츠 이관·등록과 Canva HTML 수집·가공 스크립트 및 다중 등록 기능 담당.',
        summary:
            'Phaser 3, CreateJS, Vue·SVG 등 서로 다른 방식으로 만든 학습 콘텐츠를 CMS에서 유형별로 모아 관리하는 작업입니다. S3 업로드와 CDN 실행 구조 안에서 콘텐츠를 이관·등록하고 Canva HTML 처리 과정을 자동화했습니다.',
        decisions: [
            {
                question: '서로 다른 방식으로 만든 콘텐츠를 어떻게 함께 관리했나',
                reason:
                    '콘텐츠마다 구현 라이브러리와 실행 방식이 달라, 유형과 실행 대상을 한곳에서 확인할 수 있는 관리 흐름이 필요했습니다.',
                implementation:
                    '팀의 CMS 구조에 맞춰 콘텐츠와 메타데이터를 등록하고 기존 콘텐츠의 실행·언어·학습 저장 연동을 수정했습니다. 등록한 콘텐츠는 S3/CDN 배포 흐름으로 연결했습니다.',
            },
            {
                question: 'Canva HTML과 이미지 가공을 어떻게 자동화했나',
                reason:
                    '외부 HTML을 CMS에 등록하려면 페이지와 이미지 자산을 확보하고 배포 가능한 경로로 바꾸는 작업이 필요했습니다.',
                implementation:
                    'Puppeteer로 HTML을 수집하고 이미지 다운로드·WebP 변환·경로 치환을 수행하는 스크립트를 작성했습니다. 이후 다중 등록과 언어별 HTML 선택을 지원하도록 확장했습니다.',
            },
            {
                question: '왜 iframe 내부 상태를 postMessage로 전달했나',
                reason:
                    'iframe 안에서 실행하는 HTML의 페이지 이동과 완료 상태를 바깥 서비스에 전달해야 했습니다.',
                implementation:
                    'HTML에 브리지 스크립트를 넣어 페이지 이동과 완료 이벤트를 postMessage로 부모 화면에 전달했습니다.',
            },
        ],
        choices: [
            {
                name: 'Puppeteer',
                reason: '브라우저에서 렌더링된 HTML을 수집해 CMS 등록용 산출물로 가공',
            },
            {
                name: 'postMessage',
                reason: 'iframe의 페이지 이동·완료 이벤트를 부모 화면에 전달',
            },
        ],
        result: {
            value: '콘텐츠 통합 · 다중 등록',
            label: 'CMS에 콘텐츠를 통합 등록하고, Canva HTML 수집·이미지 가공·언어별 등록을 스크립트로 처리하도록 구현했습니다.',
        },
        resumeBullets: [
            'Phaser·CreateJS·Vue 기반 콘텐츠를 모아 관리하는 CMS에서 콘텐츠 이관·등록 및 실행·학습 저장 연동 수정',
            'Puppeteer 기반 Canva HTML 수집, 이미지 다운로드·WebP 변환·경로 치환 및 다중 등록 스크립트 개발',
            '언어별 HTML 선택과 iframe 페이지 이동·완료 이벤트 전달을 구현하고 S3/CDN 배포 흐름에 연결',
        ],
    },
    {
        id: 'interactive-systems',
        number: '06',
        category: 'Interaction systems',
        title: '학습 콘텐츠의 입력과 렌더링 동작을 구현했습니다.',
        subtitle: 'Phaser · Canvas 기반 학습 콘텐츠',
        period: '2022.06 — 2026.05',
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
        category: '주력 실무',
        items: ['JavaScript', 'TypeScript', 'Vue 2/3', 'Nuxt 3/4', 'Pinia', 'PrimeVue'],
    },
    {
        category: '브라우저·데이터 연동',
        items: ['iframe', 'postMessage', 'Socket.IO', 'EditorJS'],
    },
    {
        category: 'Interaction',
        items: ['Phaser 3', 'Canvas 2D', 'Tilemap', 'Fabric.js', 'Blockly'],
    },
    {
        category: '콘텐츠·배포',
        items: ['Puppeteer', 'AWS S3/CDN'],
    },
    {
        category: '테스트',
        items: ['Playwright'],
    },
    {
        category: '개인 프로젝트 · 현재 포트폴리오',
        items: ['React', 'TypeScript', 'Vite', 'GitHub Actions'],
    },
]
