"use client"

import { useSwiper } from "swiper/react"

const WorkSliderButtons = ({projects}) => {

    const swiper = useSwiper()

    return (
        <div className='absolute w-full xl:w-auto bottom-1/2 -translate-y-1/2 xl:translate-y-0 xl:bottom-0 xl:right-0 z-30 flex flex-row items-center justify-between'>
            <button className={`relative w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] flex flex-col items-center justify-center rounded-full transition-all bg-[#73A2FF] bg-opacity-0 hover:bg-opacity-15 cursor-pointer select-none border border-[#73a2ff] group xl:mr-4 ${swiper.activeIndex < 1 && 'opacity-45 pointer-events-none'}`} onClick={() => swiper.slidePrev()}>
                <img className='group-hover:scale-125 transition-all' src="/img/Icons/slider_prev_icon.svg" alt="prev"/>
            </button>
            <button className={`relative w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] flex flex-col items-center justify-center rounded-full transition-all bg-[#73A2FF] bg-opacity-0 hover:bg-opacity-15 cursor-pointer select-none border border-[#73a2ff] group ${swiper.activeIndex === projects.length - 1 && 'opacity-45 pointer-events-none'}`} onClick={() => swiper.slideNext()}>
                <img className='group-hover:scale-125 transition-all' src="/img/Icons/slider_next_icon.svg" alt="next"/>
            </button>
        </div>
    )
}

export default WorkSliderButtons
