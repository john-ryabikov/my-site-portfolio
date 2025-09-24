import Form from "@/components/Form/Form"
import InfoBox from "@/components/InfoBox/InfoBox"
import SectionAnimated from "@/components/SectionAnimated/SectionAnimated"

const Section6 = () => {

    return (
      <SectionAnimated classSection='relative w-full xl:h-screen pt-[140px] xl:pt-[40px] flex flex-col items-center justify-center'>
        <img className='absolute xl:w-[1060px] top-0 xl:top-1/2 xl:-translate-y-1/2 left-0' src="img/Section-3/back-fon.svg" alt=""/>
        <div className='wrapper flex flex-col xl:flex-row items-center justify-start xl:items-start xl:justify-between mb-[210px] xl:mb-0'>
          <InfoBox>
              <h4 className='relative w-screen xl:w-full font-title text-center xl:text-start text-[44px] xl:text-[66px] font-normal mb-2 pt-[46px] xl:pt-[60px]'>Остались вопросы?</h4>
              <p className='relative text-sm xl:text-lg text-[#ffffff59] mb-11 uppercase tracking-[0.4em]'>Оставьте заявку</p>
              <p className='relative xl:w-[500px] text-center xl:text-start font-light text-sm xl:text-lg text-[#B2B5BA] mb-[60px]'>Свяжитесь со мной и мы сделаем с Вами эффективную целевую страницу, которая поможет Вашему бизнесу открыть "второе дыхание" и выйти на новый уровень!</p>
          </InfoBox>
          <Form/>
        </div>
      </SectionAnimated>
    )
}

export default Section6
