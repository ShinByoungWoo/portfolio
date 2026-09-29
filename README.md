# 신병우 포트폴리오

프론트엔드 개발 경력, 프로젝트별 담당 범위와 구현 결과를 정리한 React · TypeScript 포트폴리오입니다.

- [포트폴리오](https://shinbyoungwoo.github.io/portfolio/)
- [웹 이력서](https://shinbyoungwoo.github.io/portfolio/resume)
- [텍스트 이력서](docs/resume.md)

## 실행

```sh
npm ci
npm run dev
```

`npm run lint`로 코드 규칙을 확인하고, `npm run build`로 배포 파일을 생성합니다.

## 내용 수정

경력, 프로젝트 기간, 담당 범위, 기술 목록은 `src/data/portfolio.ts`에서 관리합니다. 포트폴리오와 `/resume`는 이 데이터를 함께 사용하며, 이력서는 프로젝트별 `resumeBullets`를 표시합니다. 텍스트 이력서를 수정할 때도 같은 내용을 반영합니다.

포트폴리오는 프로젝트의 담당 범위·구현 결과를 먼저 보여주고, 선택 이유는 펼쳐 읽는 구조입니다. 기존 인터랙션 영상은 `public/assets/game_video/`에 있습니다. `/resume`의 **PDF / 인쇄** 버튼으로 A4 문서를 저장할 수 있습니다.

## 배포

GitHub Actions가 `main` 변경을 GitHub Pages에 배포합니다. Pages의 `/portfolio/` 기본 경로와 직접 진입 시 이력서 경로 복원은 `vite.config.ts`, `public/404.html`, `src/main.tsx`에서 처리합니다.
