import Link from "next/link"

const socies = [
    {
        id: 1,
        icon: "/img/Icons/vk_icon.svg",
        href: 'https://vk.com/john_ryabikov'
    },
    {
        id: 2,
        icon: "/img/Icons/tg_icon.svg",
        href: 'https://t.me/john_ryabikov'
    },
    {
        id: 3,
        icon: "/img/Icons/mail_icon.svg",
        href: 'mailto:zhenya.ryabikov@mail.ru'
    }
]

const FormSoc = () => {

    return (
        <div className='relative w-[152px] flex flex-col items-center xl:items-start justify-start mt-4 xl:mt-0'>
            <p className='relative text-base font-extralight leading-[130%] tracking-[0.45px] text-center xl:text-start mb-4'>Или напишите:</p>
            <div className='relative w-full flex flex-row item-center justify-between'>
                {socies.map((soc) => (
                    <Link key={soc.id} className='relative w-[42px] h-[42px] flex flex-col items-center justify-center bg-[#73A2FF] bg-opacity-15 transition-all hover:bg-opacity-25 rounded-full' href={soc.href} target="_blank" rel="noreferrer">
                        <img src={soc.icon} alt=""/>
                    </Link>
                ))} 
            </div>
        </div>
    )
}

export default FormSoc
