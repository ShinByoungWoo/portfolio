import { SectionTitle } from './About'

interface Project {
  title:    string
  desc:     string
  tags:     string[]
  // TODO: 스크린샷 준비되면 thumbnail: string 추가
}

// TODO: 실제 작업물 내용으로 교체
const PROJECTS: Project[] = [
  {
    title: 'LMS 플랫폼',
    desc: 'TODO: 주요 개발 기능 및 역할을 작성해 주세요. (예: 수강 신청 플로우 개선, 진도율 대시보드 구현 등)',
    tags: ['Vue 3', 'Nuxt 3', 'Pinia', 'TypeScript'],
  },
  {
    title: 'CMS / 어드민',
    desc: 'TODO: CMS 또는 어드민 페이지에서 담당한 주요 기능을 작성해 주세요.',
    tags: ['Vue 3', 'Nuxt 3', 'REST API'],
  },
  {
    title: '랜딩 · 마케팅 페이지',
    desc: 'TODO: 랜딩 페이지 개발 내용을 작성해 주세요. (예: 애니메이션, 성능 최적화, SEO 등)',
    tags: ['Nuxt 3', 'GSAP', 'Tailwind CSS'],
  },
]

const TAG_COLOR: Record<string, string> = {
  'Vue 3':        'bg-[#e8f5f0] text-[#2d6a4f]',
  'Nuxt 3':       'bg-[#e8f5f0] text-[#2d6a4f]',
  'Pinia':        'bg-[#fef3e2] text-[#7c4f00]',
  'TypeScript':   'bg-[#e8eff5] text-[#1e4a7c]',
  'REST API':     'bg-[#f0f0f0] text-[#444]',
  'GSAP':         'bg-[#f5ede8] text-[#7c3000]',
  'Tailwind CSS': 'bg-[#ede8f5] text-[#4a1e7c]',
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-surface-alt/40">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <SectionTitle label="03" title="Projects" />
            <p className="text-base text-text-muted mt-2 max-w-lg">
              로지브라더스에서 개발·유지보수한 주요 서비스입니다.
            </p>
          </div>
          <span className="text-sm text-text-muted bg-white border border-border px-4 py-2 rounded-full shadow-sm">
            {PROJECTS.length} projects
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl border border-border p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* TODO: 썸네일 이미지 추가 시 <img> 태그 삽입 */}
              <div className="w-10 h-10 rounded-xl bg-surface-alt border border-border flex items-center justify-center text-lg mb-4">
                {['🖥️', '⚙️', '🚀'][i]}
              </div>

              <h3 className="font-bold text-text-heading mb-2">{project.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">{project.desc}</p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${TAG_COLOR[tag] ?? 'bg-surface-alt text-text-muted'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
