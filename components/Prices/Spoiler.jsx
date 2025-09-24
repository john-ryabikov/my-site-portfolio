"use client"

import { useRef } from "react";
import { useSpoiler, useTags } from "@/data/store"

export default function Spoiler({ list }) {

  const itemRef = useRef(null);

  const { spoilerOpen, changeOpenSpoiler } = useSpoiler()
  const { tagIndex } = useTags()

  return (
    <div className='relative flex flex-col items-start justify-start w-full pb-6 border-b border-b-white border-opacity-30'>
        <button
            className='relative flex flex-row items-center justify-center gap-3 xl:gap-5 rounded-[20px] w-[200px] xl:w-[230px] h-[40px] bg-[rgba(115,162,255,0.15)]'
            onClick={() => spoilerOpen === list.id ? changeOpenSpoiler(null) : changeOpenSpoiler(list.id)}
        >
            <span className='font-normal text-sm xl:text-base tracking-[0.05em]'>Что входит в услугу?</span>
            <img
                className={`transition-transform duration-300 ${spoilerOpen === list.id ? 'transform rotate-180' : ''}`}
                src="/img/Icons/spoiler_icon.svg"
                alt="v"
            />
        </button>
        <div
            className={`relative w-full text-left h-0 overflow-hidden transition-height duration-300 mt-4 ${spoilerOpen === list.id ? 'h-auto' : ''}`}
            style={
            spoilerOpen === list.id
                ? { height: itemRef.current?.scrollHeight }
                : { height: "0px" }
            }
        >
            <ul className='relative flex flex-col items-start justify-start py-3' ref={itemRef}>
                {list.options.map((option, i) => (
                    <li className='relative flex flex-row items-start justify-start text-sm xl:text-base font-light text-[#ffffffb3] mb-2 xl:mb-4 last:mb-0' key={i}>
                        <img className='relative top-[8px] mr-[14px]' src="img/Section-5/label_icon.svg" alt="Label"/>
                        <span>{option}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
}
