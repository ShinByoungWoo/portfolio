import { Link } from 'react-router-dom'
import { profile } from '../../data/portfolio'

export default function Contact() {
    return (
        <section id="contact" className="border-t border-ink/20 bg-paper px-5 py-14 text-ink sm:px-8 sm:py-20">
            <div className="mx-auto max-w-[1200px]">
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-accent">Contact</p>
                <h2 className="mt-5 max-w-[24ch] text-[clamp(2rem,4vw,3.5rem)] font-black leading-[1.3] tracking-[-0.04em]">
                    편하게 연락 주세요.
                </h2>

                <div className="mt-12 grid gap-10 border-t-4 border-ink pt-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-20">
                    <a
                        href={`mailto:${profile.email}`}
                        className="group block max-w-max break-all text-2xl font-black tracking-[-0.035em] underline decoration-2 underline-offset-8 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-accent sm:text-4xl"
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
                            className="border-b border-ink/40 pb-3 transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                        >
                            GitHub ↗
                        </a>
                        <Link
                            to="/resume"
                            className="border-b border-ink/40 pb-3 transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                        >
                            이력서 읽기 ↗
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
