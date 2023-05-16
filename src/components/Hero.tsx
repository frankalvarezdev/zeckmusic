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
        <div className='relative'>
            <svg
                version='1.1'
                width={1440}
                height={560}
                preserveAspectRatio='none'
                viewBox='0 0 1440 560'
                className='w-full'
            >
                <g mask='url("#SvgjsMask1000")' fill='none'>
                    <rect
                        width={1440}
                        height={560}
                        x={0}
                        y={0}
                        fill='transparent'
                    />
                    <path
                        d='M -663.428055878641,57 C -567.43,108.8 -375.43,289.8 -183.42805587864098,316 C 8.57,342.2 104.57,157.6 296.571944121359,188 C 488.57,218.4 584.57,494.2 776.571944121359,468 C 968.57,441.8 1123.89,64.4 1256.5719441213591,57 C 1389.26,49.6 1403.31,356.2 1440,431'
                        stroke='rgba(255,255,255, 0.1)'
                        strokeWidth={2}
                    />
                    <path
                        d='M -757.9623590723319,320 C -661.96,273.6 -469.96,54.2 -277.9623590723319,88 C -85.96,121.8 10.04,489 202.03764092766812,489 C 394.04,489 490.04,94.4 682.0376409276681,88 C 874.04,81.6 1010.45,435.8 1162.0376409276682,457 C 1313.63,478.2 1384.41,246.6 1440,194'
                        stroke='rgba(255,255,255, 0.1)'
                        strokeWidth={2}
                    />
                    <path
                        d='M -348.10180143637115,68 C -252.1,148 -60.1,467.2 131.89819856362888,468 C 323.9,468.8 419.9,103 611.8981985636289,72 C 803.9,41 899.9,287.8 1091.898198563629,313 C 1283.9,338.2 1502.28,189 1571.898198563629,198 C 1641.52,207 1466.38,326 1440,358'
                        stroke='rgba(255,255,255, 0.1)'
                        strokeWidth={2}
                    />
                    <path
                        d='M -900.0882216946362,156 C -804.09,189.2 -612.09,312.8 -420.0882216946362,322 C -228.09,331.2 -132.09,195.4 59.91177830536378,202 C 251.91,208.6 347.91,373.2 539.9117783053638,355 C 731.91,336.8 839.89,81.6 1019.9117783053638,111 C 1199.93,140.4 1355.98,423.8 1440,502'
                        stroke='rgba(255,255,255, 0.1)'
                        strokeWidth={2}
                    />
                </g>
                <defs>
                    <mask id='SvgjsMask1000'>
                        <rect width={1440} height={560} fill='#ffffff' />
                    </mask>
                </defs>
            </svg>
            <div className='absolute top-0 left-0 w-full h-full flex items-center'>
                <div className='max-w-3xl mx-auto'>
                    <div className='grid grid-cols-[1fr,auto] gap-8'>
                        <div className='flex items-center'>
                            <div>
                                <div className='relative'>
                                    <img
                                        src='https://yt3.googleusercontent.com/ycbdGoSed7oiJuU6uxObJHvwcb3h6TBftVZCvz3s5w5eOKQCuWQl_iO80St-XeGqospIDxsyHA=s900-c-k-c0x00ffffff-no-rj'
                                        alt='Zeck Music'
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
                                <h2
                                    className='font-bold text-5xl uppercase mb-4 hero glitch layers'
                                    data-text='Zeckrom Xenial'
                                >
                                    <span>Zeckrom Xenial</span>
                                </h2>
                                <ul>
                                    <li
                                        className='text-3xl hover:opacity-70 cursor-pointer'
                                        onClick={play}
                                    >
                                        01. Bad Omen
                                    </li>
                                    <li className='text-3xl hover:opacity-70 cursor-pointer'>
                                        02. Winter
                                    </li>
                                    <li className='text-3xl hover:opacity-70 cursor-pointer'>
                                        03. Picnic Day (ft. Rimuru)
                                    </li>
                                    <li className='text-3xl hover:opacity-70 cursor-pointer'>
                                        04. Sweet Dreams
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex justify-between col-span-2 rounded-3xl'>
                            <a href='#'>
                                <i className='bx bxl-facebook-circle text-4xl' />
                            </a>
                            <a href='#'>
                                <i className='bx bxl-discord-alt text-4xl' />
                            </a>
                            <a href='#'>
                                <i className='bx bxl-instagram text-4xl' />
                            </a>
                            <a href='#'>
                                <i className='bx bxl-twitter text-4xl' />
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
