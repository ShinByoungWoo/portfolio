import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { gameShowcases } from '../../data/portfolio'
import type { GameMeta } from '../../types'
import { SectionTitle } from './About'
import GameCard from '../ui/GameCard'
import GameModal from '../ui/GameModal'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42 } },
}

const logicNotes = [
  'Typing: 자모 분해 기반 WPM/정확도 계산',
  'Conveyor: 타일 분기 전환과 PathFollower 이동',
  'Laser: 그리드 이동, 거울 반사, 성공 조건 검사',
]

export default function GameShowcase() {
  const [selectedGame, setSelectedGame] = useState<GameMeta | null>(null)

  return (
    <section id="games" className="border-b border-border bg-bg px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionTitle label="04" title="Interactive Work" eyebrow="인터랙션" />
          <p className="max-w-2xl text-[17px] leading-8 text-text-muted">
            Canvas와 Phaser로 구현한 인터랙티브 작업입니다. 단순히 게임을 만들었다는 의미보다 입력 처리, 렌더링 성능,
            실행 순서 제어처럼 웹 UI에서도 중요한 인터랙션 문제를 다뤘다는 점을 보여줍니다.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="show"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-11 grid gap-5 lg:grid-cols-3"
        >
          {gameShowcases.map(game => (
            <motion.div key={game.id} variants={item}>
              <GameCard game={game} onPlay={setSelectedGame} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.42, delay: 0.08 }}
          className="mt-6 rounded-lg border border-border bg-white p-6"
        >
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-text-muted">Core Logic</p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {logicNotes.map(note => (
              <p key={note} className="rounded-md border border-border bg-surface px-4 py-3 text-[15px] font-semibold text-text">
                {note}
              </p>
            ))}
          </div>
        </motion.div>
      </div>

      {selectedGame && <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />}
    </section>
  )
}
