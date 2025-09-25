import FooterAnimated from "./FooterAnimated"

const Footer = () => {

  return (
    <FooterAnimated classFooter='absolute bottom-0 left-0 w-full pb-5 xl:pb-10 z-20'>
        <div className='wrapper flex flex-col-reverse xl:flex-row items-center xl:justify-between'>
            <p className='relative flex flex-col items-center xl:items-start justify-start mt-10 xl:mt-0 text-[11px]'>
                <span className='relative font-extralight leading-[130%] tracking-[0.45px] text-[#ffffffb3]'>© Copyright 2015-{new Date().getFullYear()}. Все права защищены.</span>
                <a className='relative font-light text-center xl:text-start leading-[130%] tracking-[0.45px] underline transition-all hover:opacity-40' href="blanks/Политика конфиденциальности персональных данных.pdf" target="_blank" rel="noreferrer">Политика конфедициальности и обработка пресональных данных</a>
            </p>
            <p className='relative flex flex-row items-start justify-start'>
                <span className='realtive text-[20px] font-thin text-start tracking-[0.78px] mr-[6px]'>Powered by</span>
                <img className='ml-2 w-[110px]' src="/img/Footer/next_icon.svg" alt="Next.js"/>
            </p>
        </div>
    </FooterAnimated>
  )
}

export default Footer
