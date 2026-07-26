import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { heroStats, profile, skillGroups } from '../../data/portfolio'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export default function About() {
  return (
    <section id="about" className="relative border-b border-border bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle label="01" title="Overview" eyebrow="소개" />

        <div className="mt-11 grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[18px] leading-9 text-text">
              <span className="font-bold text-text-heading">Vue/Nuxt와 TypeScript</span>를 중심으로 제품 화면,
              관리자 도구, 데이터 리포트, 인터랙티브 콘텐츠를 개발해 왔습니다. 특정 도메인의 화면만 만드는 것보다
              권한, 상태, API 데이터, 성능, 보안 요구사항이 함께 움직이는 프론트엔드 구조를 다루는 데 강점이 있습니다.
            </p>

            <div className="mt-8 rounded-lg border border-border bg-surface p-6">
              <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-text-muted">Current Role</p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-text-heading">{profile.company}</h3>
                  <p className="text-[15px] font-semibold text-primary">{profile.role}</p>
                </div>
                <p className="text-[15px] font-medium text-text-muted">{profile.period}</p>
              </div>
              <ul className="mt-5 space-y-2.5 text-[15px] leading-7 text-text-muted">
                <li>LMS, 관리자 시스템, 데이터 리포트, 게시판/협업, 실시간 콘텐츠 개발</li>
                <li>역할 기반 화면 분기, 인증/보안 처리, 공통 컴포넌트, 다국어 UI 개선</li>
                <li>Phaser 3/Canvas 기반 인터랙션 최적화와 운영 자동화 문제 해결</li>
              </ul>
            </div>

            <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
              {heroStats.map(stat => (
                <div key={stat.label} className="rounded-lg border border-border bg-white p-5 shadow-sm">
                  <dt className="text-2xl font-bold text-text-heading">{stat.value}</dt>
                  <dd className="mt-1.5 text-[13px] font-medium text-text-muted">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            variants={container}
            initial="show"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid gap-4"
          >
            {skillGroups.map(group => (
              <motion.div key={group.category} variants={item} className="rounded-lg border border-border bg-bg p-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-text-heading">{group.category}</h3>
                  <span className="text-[13px] font-semibold text-text-muted">{group.items.length} items</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(skill => (
                    <span key={skill} className="rounded-md border border-border bg-white px-3.5 py-2 text-[14px] font-medium text-text">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function SectionTitle({
  label,
  title,
  eyebrow,
}: {
  label: string
  title: string
  eyebrow?: string
}) {
  return (
    <div>
      <p className="text-[15px] font-bold text-primary">{label} · {eyebrow ?? 'Section'}</p>
      <h2 className="mt-2 text-4xl font-bold leading-tight text-text-heading sm:text-5xl">{title}</h2>
    </div>
  )
}
