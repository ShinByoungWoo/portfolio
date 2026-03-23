import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const TYPING_TEXTS = [
  'Frontend Developer',
  'Vue / Nuxt / Pinia',
  'React · TypeScript',
  'Interactive Content',
]

function useTilt() {
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const r  = el.getBoundingClientRect()
    const x  = (e.clientX - r.left) / r.width  - 0.5
    const y  = (e.clientY - r.top)  / r.height - 0.5
    el.style.transform = `perspective(500px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateZ(6px)`
  }
  const onLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = ''
  }
  return { onMouseMove: onMove, onMouseLeave: onLeave }
}

export default function Hero() {
  const [textIdx,   setTextIdx]   = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting,  setDeleting]  = useState(false)
  const tilt = useTilt()

  // 타이핑 애니메이션
  useEffect(() => {
    const target = TYPING_TEXTS[textIdx]
    let t: ReturnType<typeof setTimeout>
    if (!deleting && displayed.length < target.length)
      t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80)
    else if (!deleting && displayed.length === target.length)
      t = setTimeout(() => setDeleting(true), 1800)
    else if (deleting && displayed.length > 0)
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    else
      t = setTimeout(() => { setDeleting(false); setTextIdx(p => (p + 1) % TYPING_TEXTS.length) }, 0)
    return () => clearTimeout(t)
  }, [displayed, deleting, textIdx])

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* 배경 blob — 다른 섹션과 동일한 팔레트 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full"
          style={{ width: 560, height: 560, top: '-10%', left: '-8%',
            background: 'radial-gradient(circle, rgba(196,181,253,0.35) 0%, transparent 70%)' }} />
        <div className="absolute rounded-full"
          style={{ width: 480, height: 480, bottom: '-8%', right: '-6%',
            background: 'radial-gradient(circle, rgba(110,231,183,0.28) 0%, transparent 70%)' }} />
        <div className="absolute rounded-full"
          style={{ width: 280, height: 280, top: '38%', right: '22%',
            background: 'radial-gradient(circle, rgba(253,230,138,0.22) 0%, transparent 70%)' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* 좌측 텍스트 */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-full text-sm text-text-muted mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-accent" />
                로지브라더스 · 프론트엔드 개발자
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-text-heading leading-[1.15] mb-3">
                신병우
              </h1>
              <h2 className="text-2xl lg:text-3xl font-bold text-text-heading leading-[1.3] mb-6">
                웹과 콘텐츠를{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #5b3ff8, #00b87a)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  만드는 개발자
                </span>
              </h2>

              <div className="h-8 flex items-center mb-6">
                <span className="text-xl font-medium text-text-muted">
                  {displayed}<span className="animate-blink text-primary">|</span>
                </span>
              </div>

              <p className="text-base text-text-muted leading-relaxed max-w-md mb-10">
                로지브라더스에서 3년간 Vue / Nuxt 기반 LMS·CMS·어드민·랜딩 페이지를
                개발·유지보수했습니다. Phaser3로 교육용 인터랙티브 콘텐츠도 직접 제작합니다.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="#projects"
                  className="px-6 py-3 bg-primary text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                  작업물 보기 →
                </a>
                <a href="#about"
                  className="px-6 py-3 bg-white border border-border text-text-heading font-semibold rounded-full hover:border-primary/40 hover:text-primary transition-colors shadow-sm">
                  About Me
                </a>
                <Link to="/resume"
                  className="px-6 py-3 bg-white border border-border text-text-heading font-semibold rounded-full hover:border-primary/40 hover:text-primary transition-colors shadow-sm">
                  이력서 보기
                </Link>
              </div>
            </motion.div>
          </div>

          {/* 우측 — 3D 틸트 스킬 카드 */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { label: 'Vue 3 / Nuxt', sub: 'Main Framework', color: '#e8f5f0', icon: '💚', delay: 0.1 },
              { label: 'React',        sub: 'Also Use',        color: '#ede8f5', icon: '⚛️', delay: 0.2 },
              { label: 'TypeScript',   sub: 'Language',        color: '#e8eff5', icon: '🔷', delay: 0.3 },
              { label: 'Phaser3',      sub: 'Game Content',    color: '#f5ede8', icon: '🎮', delay: 0.4 },
            ].map(({ label, sub, color, icon, delay }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay }}
                className="bg-white rounded-2xl p-5 shadow-sm border border-border cursor-default"
                style={{ transition: 'transform 0.15s ease, box-shadow 0.15s ease' }}
                {...tilt}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl mb-3"
                  style={{ background: color }}>
                  {icon}
                </div>
                <p className="font-semibold text-text-heading">{label}</p>
                <p className="text-sm text-text-muted">{sub}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
