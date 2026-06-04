import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { caseStudies } from '../../data/portfolio'
import { SectionTitle } from './About'

const filters = ['All', 'LMS', 'Admin', 'Security', 'Automation', 'Interactive']

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const card: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42 } },
}

export default function Projects() {
  const [activeId, setActiveId] = useState(caseStudies[0].id)
  const [filter, setFilter] = useState('All')

  const visibleWorks = useMemo(
    () => (filter === 'All' ? caseStudies : caseStudies.filter(work => work.domain === filter)),
    [filter],
  )

  const activeWork = caseStudies.find(work => work.id === activeId) ?? visibleWorks[0] ?? caseStudies[0]

  const handleFilter = (nextFilter: string) => {
    setFilter(nextFilter)
    const nextWork = nextFilter === 'All'
      ? caseStudies[0]
      : caseStudies.find(work => work.domain === nextFilter)
    if (nextWork) setActiveId(nextWork.id)
  }

  return (
    <section id="projects" className="relative border-b border-border bg-bg px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionTitle label="02" title="Case Studies" eyebrow="프로젝트" />
          <div className="flex flex-wrap gap-2">
            {filters.map(option => (
              <button
                key={option}
                type="button"
                onClick={() => handleFilter(option)}
                className={`rounded-md border px-3.5 py-2.5 text-[14px] font-bold transition-colors ${
                  filter === option
                    ? 'border-primary bg-primary text-white'
                    : 'border-border bg-white text-text-muted hover:border-primary hover:text-primary'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-11 grid gap-7 lg:grid-cols-[0.98fr_1.02fr]">
          <motion.div
            variants={container}
            initial="show"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid gap-4"
          >
            {visibleWorks.map((work, index) => {
              const isActive = activeWork.id === work.id
              return (
                <motion.button
                  id={`work-${work.id}`}
                  key={work.id}
                  type="button"
                  variants={card}
                  onClick={() => setActiveId(work.id)}
                  className={`group rounded-lg border bg-white p-6 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${
                    isActive ? 'border-primary ring-2 ring-primary/15' : 'border-border hover:border-primary/45'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-text-muted">
                        Project {String(index + 1).padStart(2, '0')}
                      </p>
                      <h3 className="mt-2.5 text-xl font-bold text-text-heading">{work.title}</h3>
                      <p className="mt-1.5 text-[15px] font-semibold text-primary">{work.subtitle}</p>
                    </div>
                    <span className="rounded-md border border-border bg-surface px-2.5 py-1.5 text-[13px] font-bold text-text-muted">
                      {work.domain}
                    </span>
                  </div>
                  <p className="mt-4 text-[15px] leading-7 text-text-muted">{work.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-md border border-border bg-surface-alt px-2.5 py-1.5 text-[13px] font-semibold text-text-muted">
                      {work.period}
                    </span>
                    {work.stack.slice(0, 3).map(tech => (
                      <span key={tech} className="rounded-md border border-border bg-surface-alt px-2.5 py-1.5 text-[13px] font-semibold text-text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.button>
              )
            })}
          </motion.div>

          <motion.article
            key={activeWork.id}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-lg border border-border bg-white p-7 shadow-lg lg:sticky lg:top-24 lg:self-start"
          >
            <div className="flex flex-col gap-3 border-b border-border pb-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-primary">Selected Work</p>
                <h3 className="mt-2 text-3xl font-bold text-text-heading">{activeWork.title}</h3>
                <p className="mt-1.5 text-[15px] font-semibold text-text-muted">{activeWork.period}</p>
              </div>
              <span className="rounded-md bg-text-heading px-3 py-2 text-[13px] font-bold text-white">
                {activeWork.domain}
              </span>
            </div>

            <div className="mt-6 grid gap-5">
              <WorkBlock title="문제" body={activeWork.problem} />
              <WorkBlock title="역할" body={activeWork.role} />

              <div>
                <h4 className="text-[15px] font-bold text-text-heading">결과</h4>
                <ul className="mt-3 space-y-2.5">
                  {activeWork.outcomes.map(outcome => (
                    <li key={outcome} className="flex gap-3 text-[15px] leading-7 text-text-muted">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-sm bg-accent" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[15px] font-bold text-text-heading">기술</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeWork.stack.map(tech => (
                    <span key={tech} className="rounded-md border border-border bg-surface px-3 py-1.5 text-[13px] font-bold text-text">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <p className="rounded-lg border border-accent/35 bg-accent/[0.08] p-4 text-[15px] font-semibold leading-7 text-text-heading">
                {activeWork.proof}
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}

function WorkBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h4 className="text-[15px] font-bold text-text-heading">{title}</h4>
      <p className="mt-2 text-[15px] leading-7 text-text-muted">{body}</p>
    </div>
  )
}
