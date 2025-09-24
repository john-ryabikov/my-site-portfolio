import InfoBox from '@/components/InfoBox/InfoBox'
import NewPrices from '@/components/Prices/NewPrices'
import PricesTags from '@/components/Prices/PricesTags'
import SectionAnimated from '@/components/SectionAnimated/SectionAnimated'

const Section5 = () => {
  return (
    <SectionAnimated classSection='relative w-full pt-[140px] xl:pt-[160px] xl:pb-[100px] flex flex-col items-center justify-center'>
      <img className='absolute w-[900px] xl:w-[1060px] top-[240px] left-0' src="img/Section-5/back_fon2.svg" alt=""/>
      <div className='wrapper flex flex-col items-center xl:items-start justify-start pb-20 xl:pb-0'>
        <InfoBox>
          <h3 className='relative w-full font-title text-center xl:text-start text-[44px] xl:text-[66px] font-normal mb-2 pt-[46px] xl:pt-[60px]'>Стоимость услуг</h3>
          <p className='relative text-sm xl:text-lg text-[#ffffff59] mb-11 uppercase tracking-[0.4em]'>Прайс-лист</p>
        </InfoBox>
        <PricesTags/>
        <NewPrices/>
      </div>
    </SectionAnimated>
  )
}

export default Section5
