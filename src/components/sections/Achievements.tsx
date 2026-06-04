import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { achievements } from '../../data/portfolio'
import { SectionTitle } from './About'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const badge: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42 } },
}

export default function Achievements() {
  return (
    <section id="achievements" className="border-b border-border bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-[0.7fr_1.3fr] md:items-end">
          <SectionTitle label="03" title="Key Strengths" eyebrow="강점" />
          <p className="text-[17px] leading-8 text-text-muted">
            프로젝트 이력에서 반복적으로 드러나는 역량을 짧게 묶었습니다. 특정 교육 도메인에 한정된 경험이 아니라
            서비스 프론트엔드 전반에 필요한 문제 해결 방식으로 읽히도록 정리했습니다.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="show"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {achievements.map((item, index) => (
            <motion.article
              key={item.title}
              variants={badge}
              className="rounded-lg border border-border bg-bg p-6 shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-text-heading text-[13px] font-bold text-white">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <span className="rounded-md border border-border bg-white px-2.5 py-1.5 text-[13px] font-bold text-primary">
                  {item.label}
                </span>
              </div>
              <h3 className="text-xl font-bold text-text-heading">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-text-muted">{item.detail}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
