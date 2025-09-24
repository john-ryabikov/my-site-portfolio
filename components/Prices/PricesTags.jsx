"use client"

import { useTags } from "@/data/store"

const tags = [
    {tag: "Требуется"},
    {tag: "Не требуется"}
]

const PricesTags = () => {

    const { tagIndex, activeTagIndex } = useTags()

    return (
        <div className='relative w-full flex flex-col xl:flex-row items-center justify-between xl:justify-start gap-2.5 pb-10'>
            <p className='relative font-[200] text-xl tracking-[0.05em] mb-3 xl:mb-0'>Разработка дизайн-макета:</p>
            <p className='relative w-full xl:w-auto flex flex-row items-center justify-center xl:justify-start gap-2.5'>
                {tags.map((tag, i) => (
                    <button
                        key={i} 
                        className={
                            tagIndex === i 
                                ? "relative flex flex-col items-center justify-center px-5 border border-[#73a2ff] rounded-[20px] h-[40px] bg-[rgba(115,162,255,0.1)]" 
                                : "relative flex flex-col items-center justify-center px-5 border border-blue-300 border-opacity-30 rounded-[20px] h-[40px] hover:bg-[rgba(115,162,255,0.1)] transition-all"
                            }
                        onClick={() => activeTagIndex(i)}
                    >
                        <span className='relative text-sm xl:text-base'>{tag.tag}</span>
                    </button>
                ))}
            </p>
        </div>
    )
}

export default PricesTags
