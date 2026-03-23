import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props {
  children:  ReactNode
  delay?:    number
  y?:        number
  className?: string
}

/** 스크롤 진입 시 아래에서 위로 페이드인 */
export default function FadeIn({ children, delay = 0, y = 20, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
