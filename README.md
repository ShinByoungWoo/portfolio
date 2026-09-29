# 신병우 포트폴리오

React · TypeScript · Vite · Tailwind CSS로 만든 포트폴리오와 웹 이력서.

## 실행

Node.js 22.12 이상 사용. 현재 잠금 파일의 peer 의존성 조합에 맞춰 설치한다.

```sh
npm ci --legacy-peer-deps
npm run dev
```

- `npm run build`: 타입 검사 및 배포 빌드
- `npm run lint`: 코드 검사
- `npm test`: LMS 독립 예제의 상태 유지·이전 응답 제외·오류 재시도 회귀 테스트
- `npm run preview`: 빌드 결과 확인
- `npm run resume:export`: 공통 데이터로 `exports/resume-notion.md` 생성

## 구조

- `src/data/portfolio.ts`: 포트폴리오·이력서·내보내기의 공통 원본
- `src/components/sections`: 홈 페이지 섹션
- `src/components/projects`: 프로젝트 사례, 시연 공통 UI 및 영역별 예시 화면
- `src/hooks`: 스크롤 진입 효과, 읽기 진행 및 섹션 표시, 라우트 진입 위치
- `src/pages/Resume.tsx`: `/resume` 이력서와 인쇄 화면
- `src/pages/ProjectDetails.tsx`: `/work/:projectId` 상세 사례와 시연
- `docs/resume-evidence.md`: 경력 문구의 확인 근거와 미확인 항목

내보내기 원고와 검증 스크린샷은 Git에 포함하지 않는다. Notion 내보내기는 자동 게시 기능이 아니다.
Admin·CMS 시연은 구현 흐름을 설명하는 화면 예시다. LMS 시연은 상태 유지와 지연 응답 처리를 직접 조작하는 독립 React 예제이며, 회사 코드·실제 API·운영 성과를 재현하지 않는다.

## 배포

`main` 푸시 시 GitHub Actions가 `/portfolio/` 경로로 빌드·배포한다.
GitHub Pages의 `/resume`, `/work/:projectId` 직접 접근은 `public/404.html`과 `src/main.tsx`가 복원한다.
루트 경로 배포에서는 `vercel.json`의 SPA rewrite를 사용한다.
