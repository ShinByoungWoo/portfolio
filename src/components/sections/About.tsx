const SKILLS = [
  { category: 'Main Stack',    items: ['Vue 3', 'Nuxt 3', 'Pinia', 'TypeScript'] },
  { category: 'Also Use',      items: ['React', 'Vite', 'Tailwind CSS', 'GSAP'] },
  { category: 'Game / Canvas', items: ['Phaser3', 'Spine2D', 'Tilemap', 'Canvas API'] },
  { category: 'Tools',         items: ['Git', 'Figma', 'Slack'] },
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

const STATS = [
  { value: '3년+', label: '재직 기간' },
  { value: '20+', label: '인터랙티브 콘텐츠' },
  { value: 'Vue·React', label: '주력 프레임워크' },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="01" title="About Me" />

        {/* 스탯 카드 */}
        <div className="grid grid-cols-3 gap-4 mt-10 mb-16 max-w-lg">
          {STATS.map(({ value, label }) => (
            <div key={label} className="bg-white rounded-2xl p-5 border border-border shadow-sm text-center">
              <p className="text-2xl font-bold text-text-heading">{value}</p>
              <p className="text-sm text-text-muted mt-1">{label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* 소개 + 경력 */}
          <div>
            <p className="text-lg text-text leading-relaxed mb-10">
              <span className="font-semibold text-text-heading">Vue / Nuxt</span>를 주력으로 사용하며
              LMS, CMS, 어드민, 랜딩·마케팅 페이지 등을 개발·유지보수합니다.
              {' '}<span className="font-semibold text-text-heading">Phaser3</span> 기반 인터랙티브 콘텐츠 개발 경험도 보유하고 있습니다.
            </p>

            <h3 className="text-xs font-semibold tracking-[0.15em] text-text-muted uppercase mb-5">Experience</h3>
            <div className="space-y-5">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 border border-border shadow-sm">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="font-semibold text-text-heading">{exp.company}</span>
                    <span className="text-sm text-text-muted shrink-0 bg-surface-alt px-2 py-0.5 rounded-full border border-border">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-primary mb-3">{exp.role}</p>
                  <ul className="space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-text-muted">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/50 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 스킬 */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] text-text-muted uppercase mb-5">Skills</h3>
            <div className="space-y-6">
              {SKILLS.map(({ category, items }) => (
                <div key={category}>
                  <p className="text-sm font-medium text-text-muted mb-3">{category}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map(skill => (
                      <span
                        key={skill}
                        className="px-4 py-2 text-sm font-medium bg-white border border-border rounded-full text-text hover:border-primary/50 hover:text-primary transition-colors cursor-default shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-2">
      <span className="text-sm font-medium text-primary/60">{label} —</span>
      <h2 className="text-4xl font-bold text-text-heading mt-1">{title}</h2>
    </div>
  )
}
