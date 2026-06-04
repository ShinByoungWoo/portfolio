import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { profile } from '../../data/portfolio'
import { SectionTitle } from './About'

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45 }}
          >
            <SectionTitle label="05" title="Contact" eyebrow="연락" />
            <p className="mt-5 max-w-xl text-[18px] leading-9 text-text-muted">
              포트폴리오에서는 프로젝트 맥락을, 이력서에서는 전체 경력을 빠르게 확인할 수 있도록 분리했습니다.
              편한 방식으로 연락 주세요.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="grid gap-3"
          >
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg border border-border bg-bg p-6 transition-colors hover:border-primary"
            >
              <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-text-muted">Email</p>
              <p className="mt-2 text-xl font-bold text-text-heading">{profile.email}</p>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border bg-bg p-6 transition-colors hover:border-primary"
            >
              <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-text-muted">GitHub</p>
              <p className="mt-2 text-xl font-bold text-text-heading">github.com/ShinByoungWoo</p>
            </a>

            <a
              href={`tel:${profile.phone.replaceAll('-', '')}`}
              className="rounded-lg border border-border bg-bg p-6 transition-colors hover:border-primary"
            >
              <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-text-muted">Phone</p>
              <p className="mt-2 text-xl font-bold text-text-heading">{profile.phone}</p>
            </a>

            <Link
              to="/resume"
              className="rounded-lg border border-border bg-text-heading p-6 text-white transition-opacity hover:opacity-90"
            >
              <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-white/55">Resume</p>
              <p className="mt-2 text-xl font-bold">이력서 화면으로 이동</p>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
