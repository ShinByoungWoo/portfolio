import { useState } from 'react'
import type { InteractiveClip } from '../../types'

export default function InteractiveMedia({ clips }: { clips: InteractiveClip[] }) {
    const [activeId, setActiveId] = useState(clips[0]?.id)
    const activeClip = clips.find(clip => clip.id === activeId) ?? clips[0]

    if (!activeClip) return null

    return (
        <div data-reveal className="mt-14 border-y-4 border-ink bg-ink text-paper">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_340px]">
                <div className="border-b border-paper/20 lg:border-b-0 lg:border-r">
                    <video
                        key={activeClip.src}
                        src={activeClip.src}
                        controls
                        muted
                        playsInline
                        preload="metadata"
                        onLoadedMetadata={event => {
                            event.currentTarget.volume = 0.1
                        }}
                        onVolumeChange={event => {
                            if (!event.currentTarget.muted && event.currentTarget.volume > 0.1) {
                                event.currentTarget.volume = 0.1
                            }
                        }}
                        className="aspect-video h-full w-full bg-black object-contain"
                    />
                </div>

                <div className="flex flex-col">
                    <div className="p-6 sm:p-8">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">
                            {activeClip.label}
                        </p>
                        <h4 className="mt-3 text-2xl font-black tracking-[-0.035em] text-paper">
                            {activeClip.title}
                        </h4>
                        <p className="mt-4 text-[14px] leading-7 text-paper/65">{activeClip.description}</p>
                    </div>

                    <div className="mt-auto border-t border-paper/20">
                        {clips.map((clip, index) => (
                            <button
                                key={clip.id}
                                type="button"
                                onClick={() => setActiveId(clip.id)}
                                aria-pressed={clip.id === activeClip.id}
                                className={`flex w-full items-center justify-between gap-5 border-b border-paper/15 px-6 py-4 text-left text-[13px] font-bold transition-colors last:border-b-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-accent sm:px-8 ${
                                    clip.id === activeClip.id
                                        ? 'bg-accent text-ink'
                                        : 'text-paper/65 hover:bg-paper/10 hover:text-paper'
                                }`}
                            >
                                <span>{clip.title}</span>
                                <span className="text-[10px]">{String(index + 1).padStart(2, '0')}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
