import { useRef } from 'react'
import type { GameMeta } from '../../types'

interface GameCardProps {
  game:    GameMeta
  onPlay:  (game: GameMeta) => void
  size?:   'normal' | 'wide'
}

const CARD_BG: Record<string, string> = {
  typing:       'bg-[#e8f0ff]',
  isometric:    'bg-[#e8f5f0]',
  spaceshooter: 'bg-[#f5ede8]',
}

const CARD_ICONS: Record<string, string> = {
  typing:       '⌨️',
  isometric:    '📦',
  spaceshooter: '🔦',
}

export default function GameCard({ game, onPlay, size = 'normal' }: GameCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const cardRef  = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => videoRef.current?.play()

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width  - 0.5
    const y = (e.clientY - r.top)  / r.height - 0.5
    el.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(4px)`
  }

  const handleMouseLeave = () => {
    const v = videoRef.current
    if (v) { v.pause(); v.currentTime = 0 }
    if (cardRef.current) cardRef.current.style.transform = ''
  }

  return (
    <div
      ref={cardRef}
      className={`
        group relative rounded-3xl border border-border bg-white overflow-hidden
        cursor-pointer shadow-sm hover:shadow-md
        ${size === 'wide' ? 'lg:col-span-2' : ''}
      `}
      style={{ transition: 'transform 0.15s ease, box-shadow 0.15s ease' }}
      onClick={() => onPlay(game)}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 썸네일 / 비디오 프리뷰 */}
      <div className={`relative h-40 ${CARD_BG[game.id] ?? 'bg-surface'} overflow-hidden`}>
        {game.videos[0] ? (
          <video
            ref={videoRef}
            src={game.videos[0].src}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl">{CARD_ICONS[game.id] ?? '🎮'}</span>
          </div>
        )}

        {/* 오버레이 — 호버 시 */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 backdrop-blur-[2px]">
          <div className="w-14 h-14 rounded-full bg-white/90 shadow-lg flex items-center justify-center">
            <span className="text-xl ml-1">▶</span>
          </div>
        </div>

        {/* 영상 수 뱃지 */}
        {game.videos.length > 1 && (
          <span className="absolute top-3 right-3 text-xs font-semibold bg-black/50 text-white px-2.5 py-1 rounded-full backdrop-blur-sm">
            {game.videos.length} clips
          </span>
        )}
      </div>

      {/* 텍스트 */}
      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg bg-surface-alt border border-border">
            {CARD_ICONS[game.id] ?? '🎮'}
          </div>
          <h3 className="font-bold text-text-heading text-base">{game.title}</h3>
        </div>

        <p className="text-sm text-text-muted leading-relaxed">{game.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {game.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-xs text-text-muted bg-surface-alt border border-border px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <span className="text-xs font-semibold text-primary px-3 py-1 bg-primary/10 rounded-full shrink-0">
            WATCH →
          </span>
        </div>
      </div>
    </div>
  )
}
