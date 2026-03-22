import { useState, useEffect } from 'react'

const TYPING_TEXTS = [
  'Frontend Developer',
  'Vue / Nuxt / Pinia',
  'React · TypeScript',
  'Interactive Content',
]

export default function Hero() {
  const [textIdx, setTextIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = TYPING_TEXTS[textIdx]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else {
      setDeleting(false)
      setTextIdx(prev => (prev + 1) % TYPING_TEXTS.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, textIdx])

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* 배경 그라디언트 blob */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-150 h-150 rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, #c4b5fd 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-40 -right-20 w-125 h-125 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #6ee7b7 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-75 h-75 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #fde68a 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 좌측 텍스트 */}
          <div className="animate-fade-in-up">
            {/* 뱃지 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-full text-sm text-text-muted mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              로지브라더스 · 프론트엔드 개발자
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-text-heading leading-[1.15] mb-3">
              신병우
            </h1>
            <h2 className="text-2xl lg:text-3xl font-bold text-text-heading leading-[1.3] mb-6">
              웹과 콘텐츠를{' '}
              <span
                className="relative inline-block"
                style={{
                  background: 'linear-gradient(135deg, #5b3ff8, #00b87a)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                만드는 개발자
              </span>
            </h2>

            {/* 타이핑 */}
            <div className="h-8 flex items-center mb-6">
              <span className="text-xl font-medium text-text-muted">
                {displayed}
                <span className="animate-blink text-primary">|</span>
              </span>
            </div>

            <p className="text-base text-text-muted leading-relaxed max-w-md mb-10">
              로지브라더스에서 3년간 Vue / Nuxt 기반 LMS·CMS·어드민·랜딩 페이지를
              개발·유지보수했습니다. Phaser3로 교육용 인터랙티브 콘텐츠도 직접 제작합니다.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                작업물 보기 →
              </a>
              <a
                href="#about"
                className="px-6 py-3 bg-white border border-border text-text-heading font-semibold rounded-full hover:border-primary/40 hover:text-primary transition-colors shadow-sm"
              >
                About Me
              </a>
            </div>
          </div>

          {/* 우측 — 스킬 Bento 미니카드 */}
          <div className="hidden lg:grid grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {[
              { label: 'Vue 3 / Nuxt', sub: 'Main Framework', color: '#e8f5f0', icon: '💚' },
              { label: 'React',        sub: 'Also Use',        color: '#ede8f5', icon: '⚛️' },
              { label: 'TypeScript',   sub: 'Language',        color: '#e8eff5', icon: '🔷' },
              { label: 'Phaser3',      sub: 'Game Content',    color: '#f5ede8', icon: '🎮' },
            ].map(({ label, sub, color, icon }) => (
              <div
                key={label}
                className="bg-white rounded-2xl p-5 shadow-sm border border-border hover:-translate-y-1 transition-transform"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl mb-3"
                  style={{ background: color }}
                >
                  {icon}
                </div>
                <p className="font-semibold text-text-heading">{label}</p>
                <p className="text-sm text-text-muted">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
