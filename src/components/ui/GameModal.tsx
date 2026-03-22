import { useEffect, useRef, useState } from 'react'
import type { GameMeta } from '../../types'

interface GameModalProps {
  game:    GameMeta
  onClose: () => void
}

export default function GameModal({ game, onClose }: GameModalProps) {
  const [activeIdx, setActiveIdx] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  // 탭 전환 시 비디오 처음부터
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.load()
    v.play().catch(() => {})
  }, [activeIdx])

  // ESC 닫기
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const currentVideo = game.videos[activeIdx]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-3xl bg-white rounded-3xl border border-border overflow-hidden shadow-2xl">

        {/* 헤더 */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <div>
            <h2 className="font-bold text-text-heading">{game.title}</h2>
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              {game.tags.map(tag => (
                <span key={tag} className="text-xs text-text-muted bg-surface-alt border border-border px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-text-muted hover:text-text-heading hover:bg-surface-alt rounded-full transition-colors text-lg"
            aria-label="닫기"
          >
            ✕
          </button>
        </div>

        {/* 탭 (영상 2개 이상일 때) */}
        {game.videos.length > 1 && (
          <div className="flex gap-1 px-6 pt-4">
            {game.videos.map((v, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
                  activeIdx === i
                    ? 'bg-primary text-white'
                    : 'bg-surface-alt border border-border text-text-muted hover:text-text-heading'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        )}

        {/* 비디오 플레이어 */}
        <div className="px-6 pb-6 pt-4">
          <div className="rounded-2xl overflow-hidden bg-black">
            <video
              ref={videoRef}
              key={currentVideo?.src}
              src={currentVideo?.src}
              controls
              autoPlay
              playsInline
              className="w-full"
              style={{ maxHeight: '60vh' }}
            />
          </div>
        </div>

        {/* 설명 */}
        <div className="px-6 pb-6">
          <p className="text-sm text-text-muted leading-relaxed">{game.description}</p>
        </div>
      </div>
    </div>
  )
}
