import { useCallback, useEffect, useState } from 'react'

const AUDIO_FILE = 'https://cdn.frankalvarez.dev/music.m4a'

const Hero = () => {
    const [percent, setPercent] = useState(0)
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
    const [playing, setPlaying] = useState(false)

    const play = useCallback(() => {
        let element = audio
        if (!audio) {
            element = new Audio(AUDIO_FILE)
            setAudio(element)
        }
        if (!element) return

        if (audio?.paused) {
            element.play()
            setPlaying(true)
        } else {
            element.pause()
            setPlaying(false)
        }
    }, [audio])

    useEffect(() => {
        if (!audio) return
        audio.addEventListener('timeupdate', () => {
            const percent = (100 / audio.duration) * audio.currentTime
            setPercent(percent)
        })
    }, [audio])

    return (
        <div className='relative bg-backgroundSecondary mb-6'>
            <div className='py-8 md:py-16 px-6'>
                <div className='max-w-3xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-[1fr,auto] gap-8'>
                        <div>
                            <div className='text-center md:hidden'>
                                <h2
                                    className='font-bold text-xl sm:text-4xl uppercase mb-4 hero glitch layers'
                                    data-text='Zeckrom Xenial'
                                >
                                    <span>Zeckrom Xenial</span>
                                </h2>
                            </div>

                            <div>
                                <div className='relative w-full'>
                                    <img
                                        src='https://spinninrecords.com/media/cache/resolve/release_thumbnail/uploads/release/Sick%2520Individuals%2520%25E2%2580%2593%2520Maia.jpg'
                                        alt='Zeck Music'
                                        className='w-full'
                                    />

                                    <div
                                        className='absolute inset-0 w-full h-full flex hover:bg-black hover:bg-opacity-50 items-center justify-center group cursor-pointer'
                                        onClick={play}
                                    >
                                        {playing ? (
                                            <i className='bx bx-pause text-5xl invisible group-hover:visible' />
                                        ) : (
                                            <i className='bx bx-play text-5xl invisible group-hover:visible' />
                                        )}
                                    </div>
                                </div>
                                <div className='bg-gray-700'>
                                    <div
                                        className='h-1 bg-white transition-all'
                                        style={{
                                            width: `${percent}%`,
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='w-full'>
                                <div className='hidden md:block'>
                                    <h2
                                        className='font-bold text-5xl uppercase mb-4 hero glitch layers'
                                        data-text='Zeckrom Xenial'
                                    >
                                        <span>Zeckrom Xenial</span>
                                    </h2>
                                </div>
                                <ul>
                                    <li
                                        className='text-2xl md:text-3xl hover:opacity-70 cursor-pointer'
                                        onClick={play}
                                    >
                                        01. Bad Omen
                                    </li>
                                    <li className='text-2xl md:text-3xl hover:opacity-70 cursor-pointer'>
                                        02. Winter
                                    </li>
                                    <li className='text-2xl md:text-3xl hover:opacity-70 cursor-pointer'>
                                        03. Picnic Day (ft. Rimuru)
                                    </li>
                                    <li className='text-2xl md:text-3xl hover:opacity-70 cursor-pointer'>
                                        04. Sweet Dreams
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex justify-between md:col-span-2 rounded-3xl'>
                            <a href='#'>
                                <i className='bx bxl-discord-alt text-4xl' />
                            </a>
                            <a href='#'>
                                <i className='bx bxl-instagram text-4xl' />
                            </a>
                            <a href='#'>
                                <i className='bx bxl-youtube text-4xl' />
                            </a>
                            <a href='#'>
                                <i className='bx bxl-soundcloud text-4xl' />
                            </a>
                            <a href='#'>
                                <i className='bx bxl-spotify text-4xl' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
