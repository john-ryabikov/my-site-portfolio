import Link from "next/link"

export const ButtonUI = ({children, name, href, classButton, nextSlideBrif, approval}) => {
  return (
    <>
      {name === "btn-form" && (
        <button className={`${classButton} ${!approval ? "opacity-25 select-none pointer-events-none" : ""}`} href={href} type="submit" disabled={!approval}>
            <p className='absolute top-0 left-0 rounded-[30px] w-[60px] h-[60px] z-[-1] transition-all duration-200 bg-button group-hover:w-full'></p>
            {children}
            <img className='ml-[14px]' src="/img/Icons/arrow_btn.svg" alt="Arrow"/>
        </button>
      )}
      {name === "btn-section-projects" && (
        <a className={classButton} href={href} target="_blank" rel="nofollow">
            <p className='absolute top-0 left-0 rounded-[30px] w-[60px] h-[60px] z-[-1] transition-all duration-200 bg-button group-hover:w-full'></p>
            {children}
            <img className='ml-[14px]' src="/img/Icons/arrow_btn.svg" alt="Arrow"/>
        </a>
      )}
      {name === "btn-section-tech" && (
        <Link className={classButton} href={href}>
            <p className='absolute top-0 left-0 rounded-[30px] w-[60px] h-[60px] z-[-1] transition-all duration-200 bg-button group-hover:w-full'></p>
            {children}
            <img className='ml-[14px]' src="/img/Icons/arrow_btn.svg" alt="Arrow"/>
        </Link>
      )}
      {name === "btn-brif" && (
        <div className={classButton} onClick={nextSlideBrif}>
            <p className='absolute top-0 left-0 rounded-[30px] w-[60px] h-[60px] z-[-1] transition-all duration-200 bg-button group-hover:w-full'></p>
            {children}
            <img className='ml-[14px]' src="/img/Icons/arrow_btn.svg" alt="Arrow"/>
        </div>
      )}
      {name === "brif-send" && (
        <button className={`${classButton} ${!approval ? "opacity-25 select-none pointer-events-none" : ""}`} type="submit" disabled={!approval}>
            <p className='absolute top-0 left-0 rounded-[30px] w-[60px] h-[60px] z-[-1] transition-all duration-200 bg-button group-hover:w-full'></p>
            {children}
            <img className='ml-[14px]' src="/img/Icons/arrow_btn.svg" alt="Arrow"/>
        </button>
      )}
    </>
  )
}
