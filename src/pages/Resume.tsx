import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { caseStudies, profile, skillGroups } from '../data/portfolio'

const experienceBullets = [
  'Nuxt/Vue 기반 교육 플랫폼, LMS, 관리자 시스템 프론트엔드 개발',
  '교사/학생 역할별 화면, 권한 분기, 학습 데이터 시각화, 게시판/협업 기능 구현',
  'Phaser 3 기반 인터랙티브 교육 콘텐츠 개발 및 렌더링 성능 최적화',
  '인증, 다국어, 공통 컴포넌트, EditorJS, iframe/postMessage, 실시간 통신 기능 개선',
]

export default function Resume() {
  return (
    <div className="min-h-screen bg-bg px-6 py-10 print:bg-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between gap-4 print:hidden">
          <Link
            to="/"
            className="rounded-md border border-border bg-white px-4 py-2 text-sm font-bold text-text-heading transition-colors hover:border-primary hover:text-primary"
          >
            포트폴리오로 돌아가기
          </Link>
          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-md bg-text-heading px-4 py-2 text-sm font-bold text-white transition-opacity hover:opacity-85"
          >
            PDF / 인쇄
          </button>
        </div>

        <article className="rounded-lg border border-border bg-white p-8 shadow-sm print:border-0 print:p-0 print:shadow-none">
          <header className="border-b border-border pb-7">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-text-heading">{profile.name}</h1>
                <p className="mt-2 text-lg font-bold text-primary">{profile.role}</p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-muted">{profile.summary}</p>
              </div>
              <div className="text-sm leading-relaxed text-text-muted md:text-right">
                <p>{profile.phone}</p>
                <p>{profile.email}</p>
                <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-primary">
                  GitHub: ShinByoungWoo
                </a>
              </div>
            </div>
          </header>

          <ResumeSection title="소개">
            <p className="text-sm leading-relaxed text-text-muted">
              Vue/Nuxt와 TypeScript 기반으로 EdTech 웹 서비스와 인터랙티브 학습 콘텐츠를 개발해 온 프론트엔드 개발자입니다.
              제품 운영 중 발생한 보안, 성능, 콘텐츠 파이프라인 문제를 직접 분석하고 해결한 경험이 있습니다.
            </p>
          </ResumeSection>

          <ResumeSection title="경력">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-bold text-text-heading">{profile.company} · 프론트엔드 개발자</h3>
                <p className="text-sm font-semibold text-primary">{profile.period}</p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">{profile.companyIntro}</p>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              900개 이상 교육기관이 채택한 SW·AI 교육 플랫폼에서 LMS와 LMS 운영 어드민을 유사한 시기에 병렬 개발하며,
              계정·기관·학습·콘텐츠 관리 흐름을 구현했습니다.
            </p>
            <ul className="mt-4 space-y-2">
              {experienceBullets.map(bullet => (
                <ResumeBullet key={bullet}>{bullet}</ResumeBullet>
              ))}
            </ul>
          </ResumeSection>

          <ResumeSection title="프로젝트">
            <div className="space-y-8">
              {caseStudies.map(project => (
                <section key={project.id}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-bold text-text-heading">{project.title} — {project.subtitle}</h3>
                      <p className="text-sm font-semibold text-primary">{project.domain}</p>
                    </div>
                    <p className="text-sm font-medium text-text-muted">{project.period}</p>
                  </div>
                  {'collaboration' in project && typeof project.collaboration === 'string' && (
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{project.collaboration}</p>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{project.summary}</p>
                  <ul className="mt-3 space-y-2">
                    {project.outcomes.map(outcome => (
                      <ResumeBullet key={outcome}>{outcome}</ResumeBullet>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs font-semibold text-text-muted">기술: {project.stack.join(', ')}</p>
                </section>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection title="학력">
            <div className="space-y-3 text-sm leading-relaxed text-text-muted">
              <p>
                <span className="font-bold text-text-heading">전남과학대학교</span> · 호텔관광학과 졸업
              </p>
              <p>
                <span className="font-bold text-text-heading">한국방송통신대학교</span> · 재학 중
              </p>
            </div>
          </ResumeSection>

          <ResumeSection title="기술 스택">
            <div className="space-y-4">
              {skillGroups.map(group => (
                <div key={group.category} className="grid gap-2 sm:grid-cols-[160px_1fr]">
                  <p className="text-sm font-bold text-text-heading">{group.category}</p>
                  <p className="text-sm leading-relaxed text-text-muted">{group.items.join(', ')}</p>
                </div>
              ))}
            </div>
          </ResumeSection>
        </article>
      </div>
    </div>
  )
}

function ResumeSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-b border-border py-7 last:border-b-0 last:pb-0">
      <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-text-muted">{title}</h2>
      {children}
    </section>
  )
}

function ResumeBullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-text-muted">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-primary/55" />
      <span>{children}</span>
    </li>
  )
}
