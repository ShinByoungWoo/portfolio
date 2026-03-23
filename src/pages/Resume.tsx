import { Link } from 'react-router-dom'

const SKILLS_FLAT = [
  { label: 'Main',  items: ['Vue 3', 'Nuxt 3', 'Pinia', 'TypeScript', 'JavaScript'] },
  { label: 'Also',  items: ['React', 'Vite', 'Tailwind CSS', 'GSAP', 'Phaser3'] },
  { label: 'Tools', items: ['Git', 'Figma', 'Slack', 'Jira'] },
]

const EXPERIENCES = [
  {
    period: '2022.06 — 현재',
    company: '로지브라더스',
    role: 'Frontend Developer',
    // TODO: 실제 업무 내용으로 교체
    bullets: [
      'Vue 3 / Nuxt 기반 LMS 플랫폼 기능 개발 및 유지보수',
      'CMS·어드민 페이지 설계 및 구현',
      '랜딩·마케팅 페이지 개발',
      'Phaser3를 활용한 교육용 인터랙티브 콘텐츠 다수 제작',
    ],
  },
]

// TODO: 학력 정보 추가
const EDUCATION = [
  { period: 'TODO', school: '학교명', major: '전공', degree: '학위' },
]

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] px-6 py-12">
      <div className="max-w-3xl mx-auto">

        {/* 뒤로가기 */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors mb-10"
        >
          ← 포트폴리오로 돌아가기
        </Link>

        {/* 이력서 본문 — 인쇄 가능한 흰 카드 */}
        <div className="bg-white rounded-3xl border border-border shadow-sm p-10 print:shadow-none print:rounded-none">

          {/* 헤더 */}
          <div className="flex items-start justify-between gap-6 mb-10 pb-8 border-b border-border">
            <div>
              <h1 className="text-3xl font-bold text-text-heading mb-1">신병우</h1>
              <p className="text-lg text-primary font-medium mb-4">Frontend Developer</p>
              <div className="flex flex-col gap-1 text-sm text-text-muted">
                <span>shin.byoungwoo@gmail.com</span>
                <span>010-4901-2582</span>
                {/* TODO: GitHub URL 추가 */}
                <span className="text-text-muted/60">github.com/TODO</span>
              </div>
            </div>
            <button
              onClick={() => window.print()}
              className="shrink-0 px-4 py-2 text-sm font-medium border border-border rounded-full hover:border-primary/50 hover:text-primary transition-colors print:hidden"
            >
              PDF 저장 / 인쇄
            </button>
          </div>

          {/* 경력 */}
          <section className="mb-10">
            <h2 className="text-xs font-semibold tracking-[0.15em] text-text-muted uppercase mb-5">Experience</h2>
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="mb-6">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <span className="font-bold text-text-heading">{exp.company}</span>
                  <span className="text-sm text-text-muted shrink-0">{exp.period}</span>
                </div>
                <p className="text-sm font-medium text-primary mb-3">{exp.role}</p>
                <ul className="space-y-1.5">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-text-muted">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* 스킬 */}
          <section className="mb-10">
            <h2 className="text-xs font-semibold tracking-[0.15em] text-text-muted uppercase mb-5">Skills</h2>
            <div className="space-y-3">
              {SKILLS_FLAT.map(({ label, items }) => (
                <div key={label} className="flex gap-3 items-start">
                  <span className="text-xs text-text-muted/60 w-10 shrink-0 pt-1">{label}</span>
                  <div className="flex flex-wrap gap-2">
                    {items.map(skill => (
                      <span key={skill}
                        className="px-3 py-1 text-xs font-medium bg-surface-alt border border-border rounded-full text-text">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 학력 */}
          <section>
            <h2 className="text-xs font-semibold tracking-[0.15em] text-text-muted uppercase mb-5">Education</h2>
            {EDUCATION.map((edu, i) => (
              <div key={i} className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-semibold text-text-heading">{edu.school}</span>
                  <p className="text-sm text-text-muted">{edu.major} · {edu.degree}</p>
                </div>
                <span className="text-sm text-text-muted shrink-0">{edu.period}</span>
              </div>
            ))}
          </section>

        </div>

        <p className="text-center text-xs text-text-muted/60 mt-6">
          최종 업데이트: 2026.03
        </p>
      </div>
    </div>
  )
}
