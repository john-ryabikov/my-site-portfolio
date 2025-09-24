"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  {
    id: 1,
    cont: "Технологии",
    href: "/tech",
  },
  {
    id: 2,
    cont: "Проекты",
    href: "/projects"
  },
  {
    id: 3,
    cont: "Процесс разработки",
    href: "/process"
  },
  {
    id: 4,
    cont: "Прайс-лист",
    href: "/price"
  },
  {
    id: 5,
    cont: "Контакты",
    href: "/contacts"
  }
]

const Navigation = () => {

  const pathname = usePathname()

  return (
    <nav className='relative hidden xl:flex flex-row items-center'>
        {links.map((link) => (
            <Link 
              key={link.id} 
              className={`${link.href === pathname && 'bg-[#d9d9d91a]'} relative px-5 py-3 hover:bg-[#d9d9d91a] transition-all text-center font-light text-base rounded-[30px] mr-2 last:mr-0`} 
              href={link.href}>{link.cont}
            </Link>
        ))}
    </nav>
  )
}

export default Navigation
