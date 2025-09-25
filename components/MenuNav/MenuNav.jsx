import Link from "next/link"

const links = [
    {
        id: 1,
        cont: "На главную",
        href: "/",
    },
    {
        id: 2,
        cont: "Технологии",
        href: "/tech",
    },
    {
        id: 3,
        cont: "Проекты",
        href: "/projects"
    },
    {
        id: 4,
        cont: "Процесс разработки",
        href: "/process"
    },
    {
        id: 5,
        cont: "Прайс-лист",
        href: "/price"
    },
    {
        id: 6,
        cont: "Контакты",
        href: "/contacts"
    }
  ]

const MenuNav = ({open, close}) => {
  return (
    <div className={`fixed top-0 right-0 w-[305px] h-dvh rounded-l-[20px] transition-transform duration-300 flex flex-col items-center justify-start bg-[#0b1c38] pt-[140px] ${!open && 'translate-x-full'}`}>
        <button
            className='absolute top-[30px] left-[30px]'
            onClick={() => {close()}}
        >
            <img src="/img/Icons/close_icon.svg" alt="Close"/>
        </button>
        {links.map((menu_link, i) => (
            <Link 
                className='relative font-medium text-xl mb-10 last:mb-0' 
                key={i} 
                href={menu_link.href}
                onClick={() => {close()}}
            >
                {menu_link.cont}
            </Link>
        ))}
        <Link className='absolute bottom-[80px] right-1/2 translate-x-1/2 w-[220px] h-[60px] flex flex-row items-center justify-center text-center bg-[#73A2FF] bg-opacity-15 hover:bg-opacity-25 transition-all rounded-[30px] border border-1 border-[#73a2ff]' href="/brif" onClick={() => {close()}}>
            <span className='font-title text-sm font-semibold uppercase tracking-[0.15em] mr-4'>Составить бриф</span>
            <img src="/img/Icons/brif_icon.svg" alt=""/>
        </Link>
    </div>
  )
}

export default MenuNav
