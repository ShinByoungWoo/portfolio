import { Link } from 'react-router-dom'
import { profile } from '../../data/portfolio'

export default function Contact() {
    return (
        <section id="contact" className="bg-accent px-5 py-20 text-ink sm:px-8 sm:py-28">
            <div className="mx-auto max-w-[1440px]">
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-ink/55">Contact</p>
                <h2 className="mt-5 max-w-6xl text-[clamp(3rem,7.5vw,8rem)] font-black leading-[0.9] tracking-[-0.07em]">
                    제품의 복잡한 경계를 함께 정리할 팀을 찾고 있습니다.
                </h2>

                <div className="mt-16 grid gap-10 border-t-4 border-ink pt-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-20">
                    <a
                        href={`mailto:${profile.email}`}
                        className="group block max-w-max break-all text-2xl font-black tracking-[-0.035em] underline decoration-2 underline-offset-8 transition-colors hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-ink sm:text-4xl"
                    >
                        {profile.email}
                        <span className="ml-3 inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">
                            ↗
                        </span>
                    </a>

                    <div className="flex flex-col gap-4 text-[13px] font-black">
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noreferrer"
                            className="border-b border-ink/40 pb-3 transition-colors hover:border-paper hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                        >
                            GitHub ↗
                        </a>
                        <Link
                            to="/resume"
                            className="border-b border-ink/40 pb-3 transition-colors hover:border-paper hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                        >
                            이력서 읽기 ↗
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
