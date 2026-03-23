import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { SectionTitle } from './About'

interface Project {
  title: string
  desc:  string
  tags:  string[]
  icon:  string
}

// TODO: 실제 작업물 내용으로 교체
const PROJECTS: Project[] = [
  {
    title: 'LMS 플랫폼',
    desc:  'TODO: 주요 개발 기능 및 역할을 작성해 주세요. (예: 수강 신청 플로우 개선, 진도율 대시보드 구현 등)',
    tags:  ['Vue 3', 'Nuxt 3', 'Pinia', 'TypeScript'],
    icon:  '🖥️',
  },
  {
    title: 'CMS / 어드민',
    desc:  'TODO: CMS 또는 어드민 페이지에서 담당한 주요 기능을 작성해 주세요.',
    tags:  ['Vue 3', 'Nuxt 3', 'REST API'],
    icon:  '⚙️',
  },
  {
    title: '랜딩 · 마케팅 페이지',
    desc:  'TODO: 랜딩 페이지 개발 내용을 작성해 주세요. (예: 애니메이션, 성능 최적화, SEO 등)',
    tags:  ['Nuxt 3', 'GSAP', 'Tailwind CSS'],
    icon:  '🚀',
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

const container: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
}

// 홀수 카드 왼쪽에서, 짝수 카드 오른쪽에서 등장
const cardLeft: Variants  = { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0, transition: { duration: 0.55 } } }
const cardRight: Variants = { hidden: { opacity: 0, x: 60  }, show: { opacity: 1, x: 0, transition: { duration: 0.55 } } }

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden">

      {/* 배경 blob */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full"
          style={{ width: 420, height: 420, bottom: '-5%', right: '-5%',
            background: 'radial-gradient(circle, rgba(196,181,253,0.25) 0%, transparent 70%)' }} />
        <div className="absolute rounded-full"
          style={{ width: 340, height: 340, top: '-4%', left: '-6%',
            background: 'radial-gradient(circle, rgba(253,186,116,0.2) 0%, transparent 70%)' }} />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle label="03" title="Projects" />
            <p className="text-base text-text-muted mt-2 max-w-lg">
              로지브라더스에서 개발·유지보수한 주요 서비스입니다.
            </p>
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm text-text-muted bg-white border border-border px-4 py-2 rounded-full shadow-sm"
          >
            {PROJECTS.length} projects
          </motion.span>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              variants={i % 2 === 0 ? cardLeft : cardRight}
              whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(0,0,0,0.08)' }}
              transition={{ duration: 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl border border-border p-6 shadow-sm cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-surface-alt border border-border flex items-center justify-center text-lg mb-4">
                {project.icon}
              </div>
              <h3 className="font-bold text-text-heading mb-2">{project.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map(tag => (
                  <span key={tag}
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${TAG_COLOR[tag] ?? 'bg-surface-alt text-text-muted'}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
