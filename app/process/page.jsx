import InfoBox from '@/components/InfoBox/InfoBox'
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps'
import SectionAnimated from '@/components/SectionAnimated/SectionAnimated'

const Section4 = () => {
  return (
    <SectionAnimated classSection='relative w-full xl:h-screen pt-[140px] xl:pt-[40px] flex flex-col items-center justify-center'>
      <img className='absolute xl:w-[1060px] top-[300px] xl:top-1/2 xl:-translate-y-1/2 left-0' src="img/Section-3/back-fon.svg" alt=""/>
      <div className='wrapper flex flex-col items-center xl:items-start justify-start pb-20 xl:pb-0'>
        <InfoBox>
          <h3 className='relative w-full font-title text-center xl:text-start text-[40px] xl:text-[66px] font-normal mb-2 pt-[46px] xl:pt-[60px]'>Как будем работать?</h3>
          <p className='relative text-sm xl:text-lg text-[#ffffff59] mb-11 uppercase tracking-[0.4em]'>Всего в три шага</p>
          <p className='relative xl:w-[500px] text-center xl:text-start font-light text-sm xl:text-lg text-[#B2B5BA]'>На основе данных разрабатываем с Вами, так называемый, <b className='font-[500] text-white'>архитектурный проект</b> сайта. Это залог успеха для Вашего сайта, так как без него можете готовиться к постоянным правкам и переделкам.</p>
        </InfoBox>
        <ProcessSteps/>
      </div>
    </SectionAnimated>
  )
}

export default Section4
