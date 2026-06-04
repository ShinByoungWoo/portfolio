import { useRef } from 'react'
import type { GameMeta } from '../../types'

interface GameCardProps {
  game: GameMeta
  onPlay: (game: GameMeta) => void
}

const CARD_ACCENT: Record<string, string> = {
  typing: 'border-t-primary',
  isometric: 'border-t-accent',
  spaceshooter: 'border-t-warning',
}

export default function GameCard({ game, onPlay }: GameCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const playPreview = () => {
    videoRef.current?.play().catch(() => {})
  }

  const resetPreview = () => {
    const video = videoRef.current
    if (!video) return
    video.pause()
    video.currentTime = 0
  }

  return (
    <button
      type="button"
      onClick={() => onPlay(game)}
      onMouseEnter={playPreview}
      onFocus={playPreview}
      onMouseLeave={resetPreview}
      onBlur={resetPreview}
      className={`group h-full w-full overflow-hidden rounded-lg border border-t-4 border-border bg-white text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/45 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${CARD_ACCENT[game.id] ?? 'border-t-primary'}`}
      aria-label={`${game.title} 영상 보기`}
    >
      <div className="relative aspect-video overflow-hidden bg-surface-alt">
        <video
          ref={videoRef}
          src={game.videos[0]?.src}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/15">
          <span className="rounded-md bg-white px-3.5 py-2 text-[13px] font-bold text-text-heading opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
            Play
          </span>
        </div>
        {game.videos.length > 1 && (
          <span className="absolute right-3 top-3 rounded-md bg-black/65 px-2.5 py-1.5 text-[13px] font-bold text-white">
            {game.videos.length} clips
          </span>
        )}
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold text-text-heading">{game.title}</h3>
          <span className="rounded-md border border-border bg-surface px-2.5 py-1.5 text-[13px] font-bold text-primary">Video</span>
        </div>
        <p className="text-[15px] leading-7 text-text-muted">{game.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {game.tags.map(tag => (
            <span key={tag} className="rounded-md border border-border bg-surface-alt px-2.5 py-1.5 text-[13px] font-semibold text-text-muted">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  )
}
