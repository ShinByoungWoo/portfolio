import type { GameMeta } from '../types'

export const profile = {
  name: '신병우',
  role: 'Frontend Developer',
  headline: '복잡한 권한·상태·데이터 흐름을 사용자 화면으로 정리하는 프론트엔드 개발자',
  summary:
    'Vue/Nuxt와 TypeScript를 중심으로 서비스 화면, 관리자 도구, 데이터 리포트, 인터랙티브 콘텐츠를 개발했습니다. 교육 도메인에서 쌓은 경험을 바탕으로 역할 기반 접근 제어, 상태 관리, 성능 개선, 보안 대응, 운영 자동화처럼 다양한 제품에 필요한 프론트엔드 문제를 다룹니다.',
  email: 'sbw0121@naver.com',
  phone: '010-4901-2582',
  github: 'https://github.com/ShinByoungWoo',
  company: 'codmos.io',
  period: '2022.06 ~ 현재',
}

export const heroStats = [
  { value: '4년', label: '서비스 개발 경험' },
  { value: 'Nuxt 3/4', label: 'Vue 기반 제품 개발' },
  { value: '60fps', label: '렌더링 성능 개선' },
  { value: 'CSAP', label: '보안/운영 대응' },
]

export const skillGroups = [
  {
    category: 'Frontend',
    items: ['Vue 2/3', 'Nuxt 3/4', 'TypeScript', 'JavaScript', 'Pinia', 'PrimeVue', 'SCSS'],
  },
  {
    category: 'Product UI',
    items: ['권한 분기', '상태 관리', '데이터 시각화', '게시판/협업', '반응형 UI', '다국어 i18n'],
  },
  {
    category: 'Game / Interactive',
    items: ['Phaser 3', 'Canvas 2D', 'Fabric.js', 'Tilemap', 'Blockly'],
  },
  {
    category: 'Editor / Content',
    items: ['EditorJS', 'iframe', 'postMessage', 'MutationObserver'],
  },
  {
    category: 'Auth / Security',
    items: ['JWT', 'AES-256-GCM', 'Web Crypto API', 'RBAC', 'CSAP 대응'],
  },
  {
    category: 'Automation / Quality',
    items: ['Puppeteer', 'AWS S3/CDN', 'Firebase Hosting', 'Playwright', 'WCAG'],
  },
]

export const caseStudies = [
  {
    id: 'codmos-lms',
    title: 'CODMOS Web LMS',
    subtitle: '교사·학생 학습 관리 시스템',
    period: '2025.10 ~ 2026.03',
    domain: 'LMS',
    summary:
      'Nuxt 4 기반의 사용자별 학습 관리 서비스입니다. 역할별 화면, 학습 데이터 리포트, 게시판/협업 기능, AI 채팅 UI처럼 복잡한 상태와 권한이 얽힌 화면 흐름을 구현했습니다.',
    problem: '역할별 접근 제어, 학습 상태, AI 리포트, 게시판/협업 기능이 한 서비스 안에서 일관되게 맞물려야 했습니다.',
    role: '라우팅/권한 미들웨어, 학습관리 플로우, 게시판/함께보드 CRUD, AI 채팅·리포트 UI, 입력 검증과 비속어 필터링을 담당했습니다.',
    outcomes: [
      '학생/교사 역할별 라우팅과 강제 URL 접근 방지 미들웨어 구현',
      '학생별 데이터를 개념/실습/평가/추천 콘텐츠 단위로 구조화한 AI 리포트 구현',
      '게시글, 댓글, 좋아요, 이미지·파일 업로드, 권한 처리까지 포함한 협업 기능 구현',
      'blacklist/whitelist 기반 입력 검증과 관리자 알림 페이지/API 연동',
    ],
    stack: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Pinia', 'PrimeVue', 'EditorJS', 'Socket.io', 'Phaser 3'],
    proof: '복잡한 사용자 역할, 데이터 상태, 협업 기능을 하나의 제품 흐름으로 연결한 대표 프로젝트입니다.',
  },
  {
    id: 'admin-v2',
    title: 'Codmos Admin Web v2',
    subtitle: '운영 관리자 시스템',
    period: '2025.09 ~ 2026.05',
    domain: 'Admin',
    summary:
      '계정, 기관, 콘텐츠, 학습 관리 도메인을 다루는 Nuxt 4 기반 백오피스입니다. 운영자가 반복적으로 쓰는 관리 화면을 빠르고 안정적으로 구현했습니다.',
    problem: '대용량 목록, 권한별 UI, 연동 셀렉트, 콘텐츠 관리가 운영 업무와 직접 연결되어 있어 빠른 탐색성과 안정성이 필요했습니다.',
    role: '계정/기관/콘텐츠 CRUD, 서버사이드 페이지네이션, lazy load 드롭다운, 인증 플로우, 공통 컴포넌트를 구현했습니다.',
    outcomes: [
      '본부/기관/교사/학생 계정 관리 CRUD 및 권한별 UI 분기 처리',
      '대용량 목록에 서버사이드 페이지네이션, 스켈레톤 로딩, lazy load 드롭다운 적용',
      '기관 재계약, 플랜 선택, 지역 관리, 본부-기관 연동 셀렉트 구현',
      'EditorJS, 다국어, 테마/다크모드, Playwright 테스트 환경 개선',
    ],
    stack: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Pinia', 'PrimeVue', 'SCSS', 'EditorJS', 'Playwright'],
    proof: '운영자가 매일 사용하는 백오피스의 목록, 권한, 인증, 콘텐츠 관리 경험을 보여주는 프로젝트입니다.',
  },
  {
    id: 'spark-edu',
    title: 'Spark EDU',
    subtitle: '보안 요구사항이 강한 서비스 화면',
    period: '2024.12 ~ 2025.07',
    domain: 'Security',
    summary:
      'Nuxt 3 기반 서비스에서 KISA CSAP 클라우드 보안 인증 취득 프로젝트에 참여했습니다. 접근 제어, 인증 만료, 민감 데이터 처리, 에러 리포팅 등 보안 요구사항을 프론트엔드 코드에 반영했습니다.',
    problem: '사용자 접근 제어, 민감 데이터 보호, 인증 만료 처리, 취약점 대응이 실제 운영 플로우와 함께 동작해야 했습니다.',
    role: 'JWT/역할 분리 미들웨어, Path Traversal 차단, 자동 로그아웃, Web Crypto API 기반 암호화를 구현했습니다.',
    outcomes: [
      'JWT 및 역할 분리 미들웨어 기반 접근 제어 구현',
      'Path Traversal 공격 차단, 인증 만료 처리, 자동 로그아웃 등 보안 레이어 개선',
      'AES-256-GCM Web Crypto API 기반 민감 데이터 암호화 처리',
      '웹 접근성, 로깅, 에러 리포팅 등 CSAP 요구사항 대응',
    ],
    stack: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Pinia', 'JWT', 'PrimeVue', 'Web Crypto API'],
    proof: '보안 인증 요구사항을 사용자 화면과 인증 흐름에 반영한 경험입니다.',
  },
  {
    id: 'canva-pipeline',
    title: 'AIDT 콘텐츠 플랫폼',
    subtitle: 'HTML 임베드 리소스 파이프라인',
    period: '2024.03 ~ 2024.12',
    domain: 'Automation',
    summary:
      'Canva export HTML을 iframe으로 서비스하는 환경에서 signed URL 만료로 이미지가 깨지는 문제를 CDN 파이프라인으로 해결했습니다.',
    problem: '만료되는 이미지 URL 때문에 장기 서비스 중 콘텐츠 이미지가 깨졌고, base64 삽입은 HTML 용량을 과도하게 키웠습니다.',
    role: 'Puppeteer 리소스 수집, AWS S3/CDN 업로드 자동화, HTML 경로 치환, iframe 진행 상태 동기화를 구현했습니다.',
    outcomes: [
      'Puppeteer로 HTML 내 이미지 리소스를 수집하고 AWS S3/CDN 업로드 자동화',
      'HTML 리소스 경로를 CDN URL로 치환하여 장기 서비스 가능한 구조로 개선',
      'MutationObserver로 동적 링크를 감지하고 외부 모달 재생 기능과 연동',
      'iframe 내부 페이지 이동 및 진행 상태를 postMessage로 외부 웹과 동기화',
    ],
    stack: ['Nuxt 3', 'Puppeteer', 'AWS S3/CDN', 'iframe', 'postMessage', 'Blockly'],
    proof: '운영 중 발생한 콘텐츠 깨짐 문제를 자동화 파이프라인으로 해결한 사례입니다.',
  },
  {
    id: 'phaser-optimization',
    title: 'Interactive Contents',
    subtitle: 'Canvas 기반 인터랙션과 성능 개선',
    period: '2022 ~ 2025',
    domain: 'Interactive',
    summary:
      'Phaser 3, Canvas API, Blockly 기반 콘텐츠를 개발하고 성능 및 크로스 플랫폼 이슈를 개선했습니다. 렌더링, 입력, 실행 순서처럼 웹 인터랙션의 저수준 문제를 직접 다뤘습니다.',
    problem: '모바일/태블릿에서도 안정적인 프레임과 정확한 입력·실행 흐름이 필요했습니다.',
    role: '오브젝트 풀링, path 갱신, 렌더링 최적화, Promise 기반 Blockly 실행 제어, iOS 대응을 구현했습니다.',
    outcomes: [
      '종스크롤 수집형 게임에서 오브젝트 풀링을 도입해 FPS 40에서 60으로 개선',
      'path 객체 재생성 대신 curve 좌표 직접 갱신 방식으로 프레임 연산 비용 감소',
      'Phaser.Graphics 다중 렌더링을 이미지 리소스 방식으로 전환해 60fps 복구',
      'Blockly 블록 순차 실행 버그를 Promise + callback resolve 패턴으로 해결',
    ],
    stack: ['Phaser 3', 'TypeScript', 'Canvas 2D', 'Tilemap', 'Blockly', 'Vue 2', 'SCSS'],
    proof: '프론트엔드와 인터랙티브 콘텐츠 양쪽의 성능, 입력, 렌더링 문제 해결 경험입니다.',
  },
]

export const achievements = [
  {
    title: 'Role Guard',
    label: '권한/라우팅',
    detail: '역할별 라우팅, 권한 분기, 강제 URL 접근 방지 미들웨어 구현',
  },
  {
    title: 'Data Report',
    label: '데이터 화면',
    detail: '사용자별 데이터를 학습/실습/평가/추천 단위로 구조화하고 리포트 UI로 시각화',
  },
  {
    title: 'Security Layer',
    label: '보안 대응',
    detail: 'Path Traversal 차단, 자동 로그아웃, AES-256-GCM 암호화 처리',
  },
  {
    title: 'CDN Pipeline',
    label: '자동화',
    detail: 'HTML 리소스 수집, S3/CDN 업로드, URL 치환 자동화',
  },
  {
    title: '60fps Recovery',
    label: '성능 개선',
    detail: '오브젝트 풀링과 렌더링 구조 개선으로 Canvas 콘텐츠 프레임 안정화',
  },
  {
    title: 'Realtime UX',
    label: '협업/채팅',
    detail: '게시판, 협업 보드, 챗봇, 채팅 폴링 및 iOS 대응 처리',
  },
]

export const gameShowcases: GameMeta[] = [
  {
    id: 'typing',
    title: 'Typing Challenge',
    description:
      '한글/영문 타자 학습 콘텐츠입니다. 자모 분해 기반 WPM 계산, 정확도 측정, 단계별 문제 전환, 결과 리포트 흐름을 구현했습니다.',
    videos: [
      { label: '자리 연습', src: '/assets/game_video/typing_game_finger_position_practice.mp4' },
      { label: '단어 연습', src: '/assets/game_video/typing_game_word.mp4' },
    ],
    tags: ['Phaser 3', 'Korean IME', 'WPM'],
  },
  {
    id: 'isometric',
    title: 'Conveyor Line',
    description:
      '박스를 올바른 목적지로 분류하는 컨베이어 콘텐츠입니다. 아이소메트릭 타일맵, 분기 타일 클릭, PathFollower 이동 로직을 구현했습니다.',
    videos: [{ label: '게임 플레이', src: '/assets/game_video/Isometric_game.mp4' }],
    tags: ['Phaser 3', 'Tilemap', 'PathFollower'],
  },
  {
    id: 'spaceshooter',
    title: 'Laser Puzzle',
    description:
      '레이저 발사대와 거울을 이용해 배터리를 켜는 퍼즐입니다. 9x9 그리드 이동, 거울 반사, 충돌 판정, 성공 조건 검사를 구현했습니다.',
    videos: [{ label: '게임 플레이', src: '/assets/game_video/laser_game.mp4' }],
    tags: ['Phaser 3', 'Algorithm', 'Grid'],
  },
]
