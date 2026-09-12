import type { CaseStudy, InteractiveClip } from '../types'

const publicAsset = (path: string) => `${import.meta.env?.BASE_URL ?? '/'}${path}`

export const profile = {
    name: '신병우',
    portfolioIntro: [
        '에듀테크에서 4년간 학습 콘텐츠와 웹 서비스를 개발해 온 프론트엔드 개발자 신병우입니다. 학생이 직접 사용하는 인터랙티브 콘텐츠부터 교사의 수업 관리, 운영자의 관리 도구까지 서로 다른 사용자를 위한 제품을 만들어 왔습니다.',
        '새로운 기능을 만드는 일뿐 아니라 출시 후 드러나는 사용상의 문제도 해결해 왔습니다. 학습을 이어갈 때의 상태 유지, 실시간 수업의 화면 동기화, 반복적인 콘텐츠 등록 작업을 개선하며 제품의 개발과 운영을 함께 경험했습니다.',
    ],
    resumeSummary:
        '에듀테크에서 4년간 학습 콘텐츠와 웹 서비스를 개발해 온 프론트엔드 개발자 신병우입니다. 학생이 직접 사용하는 인터랙티브 콘텐츠부터 교사의 수업 관리, 운영자의 관리 도구까지 서로 다른 사용자를 위한 제품을 만들어 왔습니다. 새로운 기능을 만드는 일뿐 아니라 출시 후 드러나는 사용상의 문제도 해결해 왔습니다. 학습을 이어갈 때의 상태 유지, 실시간 수업의 화면 동기화, 반복적인 콘텐츠 등록 작업을 개선하며 제품의 개발과 운영을 함께 경험했습니다.',
    email: 'sbw0121@naver.com',
    phone: '010-4901-2582',
    github: 'https://github.com/ShinByoungWoo',
    company: '로지브라더스 - CODMOS',
    companyIntro:
        '코딩·AI 교육 서비스 CODMOS를 개발·운영하는 에듀테크 기업입니다. 블록 코딩과 인터랙티브 학습 콘텐츠, 교사의 수업 준비·진도 관리를 지원하는 학교용 서비스를 제공합니다.',
    companySource: 'https://school.codmos.io/',
    period: '2022.06 - 현재',
    role: '프론트엔드 개발자',
    team: 'LMS·Admin 프론트엔드 3명',
}

export const experienceBullets = [
    '학습 콘텐츠 제작과 웹 기반 학습·운영 서비스의 프론트엔드 개발을 담당했습니다.',
    'LMS·Admin 개발에 프론트엔드 3명 중 한 명으로 참여했으며, 주요 기능 출시 이후 QA·CS 이슈 수정을 맡았습니다.',
    '개별 콘텐츠를 CMS로 통합하는 작업에 참여하고, 콘텐츠 가공·등록 자동화를 개발했습니다.',
]

export const education = [
    { school: '한국방송통신대학교', detail: '2025학번 - 재학 중' },
    { school: '전남과학대학교', detail: '호텔관광학과 졸업' },
]

export const proofPoints = [
    {
        value: '4+',
        label: '프론트엔드 개발 연차',
        detail: '2022년부터 사용자 서비스와 운영 도구를 개발했습니다.',
    },
    {
        value: '3개 역할',
        label: '사용자 관점',
        detail: '학생, 교사, 운영자의 서로 다른 학습 및 관리 흐름을 구현했습니다.',
    },
    {
        value: 'LMS / Admin',
        label: '제품 개발·운영',
        detail: '프론트엔드 3명 중 코스, 리포트, 게시판과 계정 관리 화면을 담당했습니다.',
    },
]

const interactiveClips: InteractiveClip[] = [
    {
        id: 'typing-keys',
        title: '한글 타자 - 자리 연습',
        label: 'Korean IME 01',
        src: publicAsset('assets/game_video/typing_game_finger_position_practice.mp4'),
        description:
            '조합 중인 한글을 완성 문자처럼 세면 정확도와 WPM이 틀어집니다. 자모 단위 입력을 해석하고 단계 전환과 결과 리포트를 같은 흐름으로 묶었습니다.',
    },
    {
        id: 'typing-words',
        title: '한글 타자 - 단어 연습',
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
        period: '2026.06 - 2026.07',
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
            { name: 'Nuxt / Pinia', reason: '파트너·콘텐츠 경로와 학습 진입 상태를 관리' },
            { name: 'postMessage', reason: 'iframe 콘텐츠와 부모 화면 사이의 상태를 전달' },
        ],
        result: {
            value: '신규 학습 / 이어하기',
            label: '파트너별 진입 경로에서 콘텐츠 실행·재개와 iframe 상태 표시를 연결했습니다.',
        },
        resumeBullets: [
            '파트너별 콘텐츠 진입: partnerKey·contentSlug 기반 동적 라우팅과 유효성 검증으로 경로에 맞는 콘텐츠를 실행하도록 구현했습니다.',
            '중단한 학습 재개: 신규·이어하기 진입을 구분하고 복귀 경로를 보존해 미션을 이어서 진행하도록 연결했습니다.',
            '콘텐츠 상태 표시: iframe의 로딩·오류·완료 이벤트를 postMessage로 부모 화면에 전달하고, 세션 만료 시 캐시 정리를 보완했습니다.',
        ],
    },
    {
        id: 'product-system',
        number: '02',
        category: 'Product system',
        title: '코스·리포트·게시판을 수업의 흐름에 맞게 연결했습니다.',
        subtitle: 'CODMOS Web LMS',
        period: '2025.09 - 현재',
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
                    '클래스 입장 응답의 lockStatus와 syncStatus를 읽어 초기 잠금 상태와 이동 경로를 반영했습니다. 학습게시판과 클럽보드는 Socket.IO 이벤트, API, 파일 업로드, 수정·삭제 권한 UI를 함께 연동했습니다.',
            },
        ],
        choices: [
            {
                name: 'Nuxt / Pinia',
                reason: '교사·학생 화면의 경로를 구분하고 페이지 간 공유할 리포트 상태를 관리',
            },
            {
                name: 'Socket.IO',
                reason: '수업 중 화면 잠금과 동기화, 학습게시판과 클럽보드의 실시간 변경처럼 서버가 먼저 보내야 하는 상태를 전달하기 위해',
            },
        ],
        result: {
            value: '학습 흐름과 실시간 수업 연결',
            label: '페이지 이동 시 선택 상태를 유지하고, 수업 입장과 게시판에서 Socket.IO 기반 실시간 상태를 반영했습니다.',
        },
        resumeBullets: [
            '화면 이동 시 학습 상태 유지: 리포트 상태를 Pinia 스토어로 옮겨 코스와 리포트 사이에서 선택한 단원을 유지하고, 새로고침·단원 변경 시 표시 데이터가 어긋나는 문제를 수정했습니다.',
            '리포트와 실시간 수업 연결: 비동기 리포트 결과를 폴링으로 갱신하고, 학습게시판·클럽보드의 Socket.IO 이벤트와 에디터·파일 업로드를 연동했습니다. 늦게 입장한 학생에게도 기존 화면 잠금과 동기화 상태가 적용되도록 초기 응답을 반영했습니다.',
        ],
    },
    {
        id: 'admin-operations',
        number: '03',
        category: 'Admin operations',
        title: '계정 목록부터 등록·상세·수정까지 운영 화면을 개발했습니다.',
        subtitle: 'CODMOS Admin Web v2',
        period: '2025.09 - 현재',
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
            { name: 'Nuxt / TypeScript', reason: '계정 유형별 페이지와 API 데이터 모델을 관리' },
            { name: 'PrimeVue', reason: '테이블, 페이지네이션, 폼, 기관 선택 UI를 구성' },
        ],
        result: {
            value: '6개 계정 목록의 조회 흐름 개선',
            label: '검색, 페이지 이동, 기관 선택이 데이터 규모와 관계없이 일관되게 동작하도록 조회 흐름을 정리했습니다.',
        },
        resumeBullets: [
            '계정 유형별 관리 화면 개발: 본부·기관·교사·학생의 등록·상세·수정 화면을 API와 연결하고, 유형마다 다른 입력 조건과 유효성 검사를 반영했습니다.',
            '목록 조회 방식 개선: 계정 목록 화면 6개와 API 모듈 3개를 서버 페이지네이션 기준으로 전환했습니다. 검색 조건 변경 시 첫 페이지로 이동하고, 연속 입력에는 디바운스를 적용했습니다.',
            '긴 기관 목록의 선택 UI 개선: 가상 스크롤과 100개 단위 점진 표시를 적용했습니다. 수정 화면의 기존 선택 기관이 초기 표시 범위 밖에 있어도 이름을 확인하도록 보완했습니다.',
        ],
    },
    {
        id: 'security-flow',
        number: '04',
        category: 'Trust boundary',
        title: '접근 권한과 세션 만료에 따른 화면 처리를 정리했습니다.',
        subtitle: 'Spark EDU - CSAP 대응',
        period: '2024.12 - 2025.07',
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
            value: '라우트 / 세션',
            label: 'CSAP 대응 중 프론트엔드 접근 처리와 세션 만료 흐름을 구현했습니다.',
        },
        resumeBullets: [
            '화면 접근 처리: CSAP 대응 과정에서 역할 기반 라우트 가드와 비허용 경로의 진입 처리를 구현했습니다. 서버 API 권한 검증과 구분되는 프론트엔드 담당 범위입니다.',
            '세션 만료 처리: 인증 만료 감지와 자동 로그아웃을 공통 인증 흐름에 구현해 페이지마다 별도로 처리하지 않도록 정리했습니다.',
        ],
    },
    {
        id: 'content-pipeline',
        number: '05',
        category: 'Content delivery',
        title: '다양한 학습 콘텐츠를 CMS에 모으고 등록 과정을 자동화했습니다.',
        subtitle: 'CODMOS CMS - 콘텐츠 통합 및 Canva 등록',
        period: '2026.03 - 2026.06',
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
            value: '콘텐츠 통합 / 다중 등록',
            label: 'CMS에 콘텐츠를 통합 등록하고, Canva HTML 수집·이미지 가공·언어별 등록을 스크립트로 처리하도록 구현했습니다.',
        },
        resumeBullets: [
            '콘텐츠 통합 관리에 참여: Phaser·CreateJS·Vue 등으로 개별 제작한 콘텐츠를 CMS에 이관·등록하고, 기존 콘텐츠의 실행과 학습 저장 연동을 수정했습니다.',
            '등록 준비 작업 자동화: Puppeteer로 Canva HTML 수집, 이미지 다운로드·WebP 변환·배포 경로 치환을 처리하고 다중 등록으로 확장했습니다. 초기 등록 샘플의 Git 스냅샷에서 15개 언어별 산출물과 253개 WebP 이미지 자산을 확인했습니다.',
            '학습 서비스와 실행 콘텐츠 연결: 언어별 HTML 선택과 iframe의 페이지 이동·완료 이벤트 전달을 구현하고, 기존 S3/CDN 배포 흐름에 연결했습니다.',
        ],
    },
    {
        id: 'interactive-systems',
        number: '06',
        category: 'Interaction systems',
        title: '학습 콘텐츠의 입력과 렌더링 동작을 구현했습니다.',
        subtitle: 'Phaser / Canvas 기반 학습 콘텐츠',
        period: '2022.06 - 2026.05',
        summary:
            '타자 연습과 퍼즐 등 학생이 직접 조작하는 학습 콘텐츠를 개발했습니다. 한글 입력을 해석하고 게임의 이동·충돌 규칙을 구현하는 작업과 함께, 반복 생성과 그리기로 발생하는 렌더링 비용을 개선했습니다.',
        decisions: [
            {
                question: '학습 콘텐츠의 입력과 이동 규칙을 어떻게 구현했나',
                reason:
                    '한글은 입력 중 조합 상태가 바뀌고, 퍼즐은 타일의 방향과 충돌 위치에 따라 다음 동작이 달라집니다.',
                implementation:
                    '한글 자모 입력을 해석하는 타자 연습과 아이소메트릭 경로 분기, 그리드 반사 로직을 적용한 콘텐츠를 구현했습니다.',
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
            value: '입력 / 렌더링 개선',
            label: '학습 콘텐츠의 입력·이동 규칙을 구현하고, 오브젝트 재사용과 이미지 리소스 전환으로 반복 생성·그리기 비용을 줄였습니다.',
        },
        media: interactiveClips,
        resumeBullets: [
            '학습 인터랙션 구현: 한글 자모 입력, 아이소메트릭 경로 분기, 그리드 반사 로직을 활용해 타자 연습과 퍼즐 콘텐츠를 개발했습니다.',
            '렌더링 개선: 오브젝트를 비활성화해 재사용하고 반복 도형을 이미지 리소스로 전환해, 매번 생성하거나 다시 그리는 작업을 줄였습니다.',
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
]

const featuredProjectIds = ['product-system', 'admin-operations', 'content-pipeline', 'interactive-systems']

export const featuredCaseStudies = featuredProjectIds.map((id, index) => {
    const project = caseStudies.find(item => item.id === id)
    if (!project) throw new Error(`Missing featured case study: ${id}`)
    return { ...project, number: String(index + 1).padStart(2, '0') }
})

export const additionalCaseStudies = caseStudies.filter(project =>
    ['partner-web', 'security-flow'].includes(project.id),
)
