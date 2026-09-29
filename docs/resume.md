# 신병우 | 프론트엔드 개발자

010-4901-2582 · sbw0121@naver.com

[GitHub](https://github.com/ShinByoungWoo) · [포트폴리오](https://shinbyoungwoo.github.io/portfolio/)

## 소개

4년 이상 사용자 서비스와 운영자 도구를 개발했습니다. TypeScript와 Vue/Nuxt를 주로 사용하며, 역할별 접근 제어·데이터 조회·콘텐츠 배포를 제품의 실제 사용 흐름에 맞게 구현해 왔습니다.

## 경력

### 로지브라더스 · CODMOS

프론트엔드 개발자 · 2022.06 - 현재

SW·AI 교육 플랫폼 개발·운영. CODMOS는 900개 이상 교육기관에서 채택한 서비스입니다.

- 학생·교사 서비스, 관리자 도구, 파트너 웹의 화면과 API 연동을 개발·유지보수했습니다.
- 콘텐츠 빌드·배포 자동화와 iframe 연동, CSAP 프론트엔드 요구사항 대응을 맡았습니다.

## 주요 프로젝트

### Codmos Partner Web

2026.06 - 2026.07

Nuxt 4 · Vue 3 · TypeScript · Pinia · postMessage

**담당:** 파트너별 라우팅, 신규·이어하기 상태, iframe 진행 상태 연동

- 파트너별 화면 복제를 줄이기 위해 partnerKey·contentSlug 기반 동적 라우팅과 콘텐츠 유효성 검증을 구현했습니다.
- 신규·이어하기 진입과 복귀 경로 보존을 구현해 중단한 미션을 재개하도록 연결했습니다.
- iframe의 로딩·오류·완료 상태를 postMessage로 부모 화면과 동기화했습니다.

### Codmos CMS

2026.03 - 2026.06

Nuxt 4 · Vue 2/3 · Node.js · npm Workspaces · AWS S3/CDN

**담당:** 콘텐츠 빌드 산출물 통합, 메타데이터 관리, 버전 배포·이력·롤백

- 96개 콘텐츠 유형·2,128개 미션 파일을 다루는 환경에서 빌드 산출물 판별과 메타데이터 기반 관리 흐름을 구현했습니다.
- S3/CDN 정적 배포와 iframe 실행 구조로 서비스 코드와 콘텐츠의 배포 주기를 분리했습니다.
- 콘텐츠명·버전 기준 배포, 중복 버전 차단, 배포 이력·롤백을 구성했습니다.
- Canva 이미지에 MD5 기반 중복 제거·WebP 변환을 적용했습니다. 10개 폴더·208개 HTML의 참조 이미지 기준, 같은 형식으로 페이지마다 저장하는 가정 대비 용량을 약 62.8% 절감한 것으로 추산했습니다(1,128.21 → 419.41 MiB, 2026.09.23 집계).

[이미지 용량 산출 근거](./cms-image-metrics.md): 현재 파일 형식 기준의 중복 저장 비교이며, WebP 변환 전 원본 대비 절감률은 포함하지 않았습니다.

### Codmos LMS · Admin Web v2

2025.09 - 2026.03

Nuxt 4 · Vue 3 · TypeScript · Pinia · PrimeVue

**담당:** 역할별 화면·라우팅, 운영 목록의 조회 흐름, 학습 리포트 구현

- 운영 목록을 전체 조회에서 서버 페이지네이션·조건 기반 조회로 전환하고, 도메인별 조회 조건과 상태를 공통화했습니다.
- 역할별 라우트 가드를 구현하고, 콘텐츠 재생 시간과 실제 학습 시간을 구분한 리포트를 구성했습니다.
- 개념·실습·평가·추천 콘텐츠 단위로 학습 데이터를 표시해 교사가 학생별 학습 상태를 확인하도록 구현했습니다.

### Spark EDU · CSAP 대응

2024.12 - 2025.07

Nuxt 3 · Vue 3 · TypeScript · JWT · Web Crypto API

**담당:** CSAP 대응 중 프론트엔드 접근 제어, 세션 만료, 민감정보 처리 구현

- CSAP 대응에 참여해 교사·학생의 접근 경로를 구분하고, 공통 인증 흐름에서 세션 만료와 로그인 화면 이동을 처리했습니다.
- Web Crypto API 기반 AES-256-GCM 암호화와 요구사항에 따른 로깅·오류 보고·접근성 기능을 구현했습니다.

### 인터랙티브 콘텐츠 · 리소스 파이프라인

2022.06 - 2026.05

Phaser 3 · TypeScript · Canvas 2D · Puppeteer · AWS S3/CDN

**담당:** 한글 입력·좌표·충돌 처리, 렌더링 개선, HTML 리소스 수집·치환

- 한글 조합 입력·정확도 계산, 경로 분기·충돌 로직을 구현하고 오브젝트 풀링과 화면 밖 비활성화로 반복 생성·갱신을 줄였습니다.
- 만료 URL과 base64 용량 문제에 대응해 Puppeteer로 HTML 리소스를 수집하고 S3/CDN 경로로 치환하는 작업을 자동화했습니다.

## 기술

- **주요 실무:** TypeScript, JavaScript, Vue 2/3, Nuxt 3/4, Pinia, REST API
- **제품·브라우저:** PrimeVue, iframe / postMessage, Web Crypto API, Phaser 3 / Canvas
- **테스트·운영:** Playwright, Puppeteer, Node.js, AWS S3/CDN, Git
- **포트폴리오 제작:** React, TypeScript, Vite, GitHub Actions

## 학력

- **한국방송통신대학교** · 재학 중
- **전남과학대학교** · 호텔관광학과 졸업

최종 업데이트 2026.09.29
