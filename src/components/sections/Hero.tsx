import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import heroImage from '../../assets/hero.png'
import { caseStudies, heroStats, profile } from '../../data/portfolio'

const TYPING_TEXTS = ['Vue / Nuxt', 'TypeScript', 'Role-based UI', 'Canvas 60fps']

export default function Hero() {
  const [textIdx, setTextIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const featuredWork = caseStudies[0]

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayed(TYPING_TEXTS[0])
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
    <section id="hero" className="relative min-h-[92svh] overflow-hidden border-b border-border bg-bg pt-24">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(#e7eaf1_1px,transparent_1px),linear-gradient(90deg,#e7eaf1_1px,transparent_1px)] bg-[size:48px_48px] opacity-55" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
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
            <span>{displayed}</span>
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

          <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {heroStats.map(stat => (
              <div key={stat.label} className="rounded-lg border border-border bg-white p-5 shadow-sm">
                <dt className="text-2xl font-bold text-text-heading">{stat.value}</dt>
                <dd className="mt-1.5 text-[13px] font-medium text-text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="rounded-lg border border-border bg-white p-5 shadow-xl"
        >
          <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
            <div>
              <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-text-muted">Featured Work</p>
              <h2 className="mt-1.5 text-xl font-bold text-text-heading">{featuredWork.title}</h2>
            </div>
            <span className="rounded-md bg-primary/10 px-3 py-1.5 text-[13px] font-bold text-primary">
              {featuredWork.domain}
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1fr_128px]">
            <div className="overflow-hidden rounded-md border border-border bg-black">
              <video
                src="/assets/game_video/typing_game_word.mp4"
                muted
                loop
                autoPlay={!shouldReduceMotion}
                playsInline
                preload="metadata"
                className="aspect-video h-full w-full object-cover"
              />
            </div>
            <div className="flex items-center justify-center rounded-md border border-border bg-surface-alt p-4">
              <img src={heroImage} alt="" className="h-28 w-28 object-contain" />
            </div>
          </div>

          <p className="mt-5 text-[15px] leading-7 text-text-muted">{featuredWork.summary}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {featuredWork.stack.slice(0, 5).map(tech => (
              <span key={tech} className="rounded-md border border-border bg-surface px-2.5 py-1.5 text-[13px] font-semibold text-text-muted">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
