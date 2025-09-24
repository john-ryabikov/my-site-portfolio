import Link from "next/link"

const soc_links = [
    {
        id: 1,
        icon: "img/Icons/vk_icon.svg",
        href: "https://vk.com/john_ryabikov"
    },
    {
        id: 2,
        icon: "img/Icons/tg_icon.svg",
        href: "https://t.me/john_ryabikov"
    },
    {
        id: 3,
        icon: "img/Icons/gh_icon.svg",
        href: "https://github.com/john-ryabikov"
    },
    {
        id: 4,
        icon: "img/Icons/mail_icon.svg",
        href: "mailto:zhenya.ryabikov@mail.ru"
    }
]

const Author = () => {

  return (
    <div className='relative w-[360px] flex flex-row items-center justify-between mt-5'>
      <div className='relative w-[120px] h-[120px] border-[1px] border-[#73A2FF] rounded-full flex flex-col items-center justify-center p-[10px]'>
        <img className='w-full' src="img/Section-1/author_img.png" alt=""/>
      </div>
      <div className='relative w-[210px] flex flex-col items-start justify-center'>
        <p className='relative font-title font-normal text-xl text-start'>Евгений Рябиков</p>
        <p className='relative uppercase text-[10px] opacity-35 tracking-[0.4em]'>Frontend-разработчик</p>
        <div className='relative flex flex-row items-center justify-start mt-5'>
            {soc_links.map((soc_link) => (
                <Link 
                    key={soc_link.id} 
                    className='relative w-[42px] h-[42px] flex flex-col items-center justify-center bg-[#73A2FF] bg-opacity-15 transition-all hover:bg-opacity-25 rounded-full mr-[10px] last:mr-0' 
                    href={soc_link.href} 
                    target="_blank" 
                    rel="nofollow noreferrer"
                >
                    <img src={soc_link.icon} alt=""/>
                </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Author

