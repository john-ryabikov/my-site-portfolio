"use client"

import { useTags } from "@/data/store"
import { useEffect, useState } from "react"

const Price = ({ price, priceId }) => {

    const [rub, setRub] = useState(price)

    const {tagIndex} = useTags()

    const cahngePrice = (tag) => {
        switch (tag) {
        case 0:
            {
                if (rub === price) return;
                let i = 0;
                const rising = setInterval(() => {
                    i += 20;
                    setRub((prev) => prev + 20);
                    if (i >= 2000) clearInterval(rising);
                }, 5);
            }
            break;
        case 1:
            {
                let i = 0;
                const rising = setInterval(() => {
                    i += 20;
                    setRub((prev) => prev - 20);
                    if (i >= 2000) clearInterval(rising);
                }, 5);
            }
            break;
        }
    }

    useEffect(() => cahngePrice(tagIndex), [tagIndex])

    return ( 
        <p className='relative flex flex-row items-start justify-end'>
            <span className='relative font-light text-[26px] xl:text-5xl tracking-[-0.04em] h-full xl:h-auto'>{priceId > 1 && <b className='font-[200] text-sm xl:text-xl tracking-normal'>от </b>}{rub.toLocaleString()}</span>
            <span className='relative font-[200] text-base xl:text-[30px] tracking-wide ml-1 xl:ml-2 xl:h-[50px] pt-1 xl:pt-0'>₽</span>
        </p>
    )
}

export default Price
