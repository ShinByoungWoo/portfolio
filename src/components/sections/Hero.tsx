import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { heroStats, profile } from '../../data/portfolio'

const TYPING_TEXTS = ['Vue / Nuxt', 'TypeScript', 'Role-based UI', 'Canvas 60fps']

export default function Hero() {
  const [textIdx, setTextIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const typingText = shouldReduceMotion ? TYPING_TEXTS[0] : displayed

  useEffect(() => {
    if (shouldReduceMotion) {
      return
    }

    const target = TYPING_TEXTS[textIdx]
    let timer: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < target.length) {
      timer = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 75)
    } else if (!deleting && displayed.length === target.length) {
      timer = setTimeout(() => setDeleting(true), 1400)
    } else if (deleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else {
      timer = setTimeout(() => {
        setDeleting(false)
        setTextIdx(prev => (prev + 1) % TYPING_TEXTS.length)
      }, 180)
    }

    return () => clearTimeout(timer)
  }, [deleting, displayed, shouldReduceMotion, textIdx])

  return (
    <section id="hero" className="relative min-h-[88svh] overflow-hidden border-b border-border bg-bg pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(#e7eaf1_1px,transparent_1px),linear-gradient(90deg,#e7eaf1_1px,transparent_1px)] bg-[size:48px_48px] opacity-55" />
      <div className="relative mx-auto flex max-w-7xl px-6 pb-20 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-4xl"
        >
          <p className="mb-5 inline-flex rounded-md border border-border bg-white px-3.5 py-2.5 text-[15px] font-semibold text-text-muted shadow-sm">
            {profile.company} · {profile.period}
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight text-text-heading sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-3xl text-2xl font-semibold leading-relaxed text-text-heading lg:text-[28px]">
            {profile.headline}
          </p>

          <div className="mt-5 flex h-8 items-center text-xl font-semibold text-primary">
            <span>{typingText}</span>
            <span className="ml-1 animate-blink">|</span>
          </div>

          <p className="mt-6 max-w-3xl text-[17px] leading-8 text-text-muted">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-md bg-primary px-6 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-primary/15 transition-opacity hover:opacity-90"
            >
              대표 프로젝트 보기
            </a>
            <a
              href="#games"
              className="rounded-md border border-border bg-white px-6 py-3.5 text-[15px] font-bold text-text-heading transition-colors hover:border-primary hover:text-primary"
            >
              인터랙티브 작업 보기
            </a>
            <Link
              to="/resume"
              className="rounded-md border border-border bg-white px-6 py-3.5 text-[15px] font-bold text-text-heading transition-colors hover:border-primary hover:text-primary"
            >
              이력서 열기
            </Link>
          </div>

          <dl className="mt-10 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-4 border-y border-border bg-white/60 py-5 sm:grid-cols-4">
            {heroStats.map(stat => (
              <div key={stat.label}>
                <dt className="text-2xl font-bold text-text-heading">{stat.value}</dt>
                <dd className="mt-1 text-[13px] font-medium leading-5 text-text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}
