import InfoBox from "@/components/InfoBox/InfoBox";
import SectionAnimated from "@/components/SectionAnimated/SectionAnimated";

import { ButtonUI } from "@/components/ButtonUI/ButtonUI";

const webIcons = [
  {
    id: 1,
    icon: "/img/Section-2/html_img.svg",
  },
  {
    id: 2,
    icon: "/img/Section-2/css_img.svg",
  },
  {
    id: 3,
    icon: "/img/Section-2/js_img.svg",
  },
  {
    id: 4,
    icon: "/img/Section-2/ts_img.svg",
  },
  {
    id: 5,
    icon: "/img/Section-2/react_img.svg",
  },
  {
    id: 6,
    icon: "/img/Section-2/next_img.svg",
  },
  {
    id: 7,
    icon: "/img/Section-2/tail_img.svg",
  },
  {
    id: 8,
    icon: "/img/Section-2/figma_img.svg",
  }
]

const Section2 = () => {

    return (
      <SectionAnimated classSection='relative w-full xl:h-screen pt-[140px] xl:pt-0 pb-[200px] xl:pb-0 flex flex-col items-center justify-center'>
        <img className='absolute xl:w-[1060px] top-[280px] xl:top-1/2 xl:-translate-y-1/2 left-0' src="/img/Section-3/back-fon.svg" alt=""/>
        <div className='wrapper flex flex-col xl:flex-row items-center justify-start xl:justify-between'>
          <InfoBox>
            <h2 className='relative w-full font-title text-center xl:text-start text-[44px] xl:text-[66px] font-normal mb-2 pt-[46px] xl:pt-[60px]'>Веб-технологии</h2>
            <p className='relative text-sm xl:text-lg text-[#ffffff59] mb-11 uppercase tracking-[0.4em]'>Чистый код</p>
            <p className='relative xl:w-[500px] text-center xl:text-start font-light text-sm xl:text-lg text-[#B2B5BA] mb-[60px]'>С помощью тесно взаимосвязанных между собой технологиями происходит верстка сайта. Создаются разные по сложности целевые страницы, а также оптимизация в поисковых системах <b className='font-[500] text-white'>Google</b> и <b className='font-[500] text-white'>Яндекс</b> для продвижения сайта в сети Интернете.</p>
            <ButtonUI name="btn-section-tech" href="/projects" classButton="absolute -bottom-[720px] xl:bottom-0 left-1/2 xl:left-0 -translate-x-1/2 xl:translate-x-0 xl:relative h-[60px] flex flex-row items-center justify-center px-[30px] font-title text-sm tracking-[0.26em] overflow-hidden cursor-pointer group">
              <span className='relative w-[120px] uppercase z-0'>Мои проекты</span>
            </ButtonUI>
          </InfoBox>
          <div className='relative w-[290px] xl:w-[625px] flex flex-wrap justify-between gap-6'>
            {webIcons.map((webIcon) => (
              <div className='relative' key={webIcon.id}>
                <img className='block' src={webIcon.icon} alt=""/>
              </div>  
            ))}
          </div>
        </div>
      </SectionAnimated>
    );
}

export default Section2  
  
