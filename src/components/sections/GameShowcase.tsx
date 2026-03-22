import { useState } from 'react'
import GameCard from '../ui/GameCard'
import GameModal from '../ui/GameModal'
import { SectionTitle } from './About'
import type { GameMeta } from '../../types'

const GAMES: GameMeta[] = [
  {
    id: 'typing',
    title: 'Typing Challenge',
    description: 'LMS 수강생용 타자 연습 콘텐츠. 자리 연습(한글 자모 위치 학습)과 단어 연습 두 가지 모드로 구성. WPM·정확도 측정 및 결과 리포트.',
    videos: [
      { label: '자리 연습', src: '/assets/game_video/typing_game_finger_position_practice.mp4' },
      { label: '단어 연습', src: '/assets/game_video/typing_game_word.mp4' },
    ],
    tags: ['Phaser3', 'Korean IME', 'LMS'],
  },
  {
    id: 'isometric',
    title: 'Conveyor Line',
    description: '화물을 올바른 목적지로 분류하는 컨베이어 벨트 게임. 이소메트릭 타일맵 + PathFollower 기반 분기 경로 구현.',
    videos: [
      { label: '게임플레이', src: '/assets/game_video/Isometric_game.mp4' },
    ],
    tags: ['Phaser3', 'Tilemap', 'PathFollower'],
  },
  {
    id: 'spaceshooter',
    title: 'Laser Puzzle',
    description: '레이저 발사대와 거울을 이용해 모든 배터리를 켜는 퍼즐. 레이저 반사 알고리즘 + 그리드 기반 이동·오브젝트 밀기 구현.',
    videos: [
      { label: '게임플레이', src: '/assets/game_video/laser_game.mp4' },
    ],
    tags: ['Phaser3', 'Algorithm', 'Grid'],
  },
]

export default function GameShowcase() {
  const [selectedGame, setSelectedGame] = useState<GameMeta | null>(null)

  return (
    <section id="games" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <SectionTitle label="02" title="Interactive Contents" />
            <p className="text-base text-text-muted mt-2 max-w-lg">
              현 회사에서 개발한 Phaser3 기반 인터랙티브 콘텐츠입니다.
              카드를 클릭하면 데모 영상을 확인할 수 있습니다.
            </p>
          </div>
          <span className="text-sm text-text-muted bg-white border border-border px-4 py-2 rounded-full shadow-sm">
            {GAMES.length} contents
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* 첫 번째 카드 — wide */}
          <div className="lg:col-span-2">
            <GameCard game={GAMES[0]} onPlay={setSelectedGame} size="wide" />
          </div>

          <GameCard game={GAMES[1]} onPlay={setSelectedGame} />
          <GameCard game={GAMES[2]} onPlay={setSelectedGame} />

          {/* 기술 스택 인포 카드 */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-border p-6 shadow-sm">
            <p className="text-xs font-semibold tracking-widest text-text-muted uppercase mb-4">Built with</p>
            <div className="flex flex-wrap gap-3">
              {['Phaser 3', 'TypeScript', 'Spine2D', 'Tilemap', 'Tween', 'PathFollower'].map(tech => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-surface-alt border border-border rounded-full text-sm font-medium text-text"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-sm text-text-muted mt-4 leading-relaxed">
              각 콘텐츠는 <code className="text-xs bg-surface-alt px-2 py-0.5 rounded-md border border-border">BaseScene</code> 상속 구조로 설계되어
              결과 데이터를 LMS 플랫폼으로 전달합니다.
            </p>
          </div>
        </div>
      </div>

      {selectedGame && (
        <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />
      )}
    </section>
  )
}
