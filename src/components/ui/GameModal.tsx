import { useEffect, useRef, useState } from 'react'
import type { GameMeta } from '../../types'

interface GameModalProps {
  game: GameMeta
  onClose: () => void
}

export default function GameModal({ game, onClose }: GameModalProps) {
  const [activeIdx, setActiveIdx] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const currentVideo = game.videos[activeIdx] ?? game.videos[0]

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.load()
    video.play().catch(() => {})
  }, [activeIdx])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm"
      onClick={event => event.target === event.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="game-modal-title"
    >
      <div className="w-full max-w-4xl overflow-hidden rounded-lg border border-border bg-white shadow-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-primary">Interactive Work</p>
            <h2 id="game-modal-title" className="mt-1 text-2xl font-bold text-text-heading">
              {game.title}
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {game.tags.map(tag => (
                <span key={tag} className="rounded-md border border-border bg-surface px-2.5 py-1.5 text-[13px] font-semibold text-text-muted">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border text-sm font-bold text-text-muted transition-colors hover:border-primary hover:text-primary"
            aria-label="닫기"
          >
            X
          </button>
        </div>

        {game.videos.length > 1 && (
          <div className="flex flex-wrap gap-2 px-5 pt-4">
            {game.videos.map((video, index) => (
              <button
                key={video.src}
                type="button"
                onClick={() => setActiveIdx(index)}
                className={`rounded-md border px-3 py-2 text-[15px] font-bold transition-colors ${
                  activeIdx === index
                    ? 'border-primary bg-primary text-white'
                    : 'border-border bg-white text-text-muted hover:border-primary hover:text-primary'
                }`}
              >
                {video.label}
              </button>
            ))}
          </div>
        )}

        <div className="px-5 pb-5 pt-4">
          <div className="overflow-hidden rounded-md bg-black">
            <video
              ref={videoRef}
              key={currentVideo.src}
              src={currentVideo.src}
              controls
              autoPlay
              playsInline
              className="max-h-[64vh] w-full"
            />
          </div>
          <p className="mt-4 text-[15px] leading-7 text-text-muted">{game.description}</p>
        </div>
      </div>
    </div>
  )
}
