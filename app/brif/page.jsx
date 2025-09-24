import BrifForm from "@/components/BrifForm/BrifForm"
import InfoBox from "@/components/InfoBox/InfoBox"
import SectionAnimated from "@/components/SectionAnimated/SectionAnimated"

const Brif = () => {

    return (
        <SectionAnimated classSection='relative w-full xl:h-screen pt-[140px] xl:pt-0 pb-20 xl:pb-0 flex flex-col items-center justify-center'>
            <img className='absolute xl:w-[1060px] top-0 xl:top-1/2 xl:-translate-y-1/2 left-0' src="img/Section-3/back-fon.svg" alt=""/>
            <div className='wrapper flex flex-col xl:flex-row items-center justify-start xl:justify-between'>
                <InfoBox>
                    <h5 className='relative w-screen xl:w-full font-title text-center xl:text-start text-[38px] xl:text-[62px] font-normal mb-2 pt-[60px] xl:pt-[60px]'>Cформируйте задание</h5>
                    <p className='relative text-sm xl:text-lg text-[#ffffff59] mb-11 uppercase tracking-[0.4em]'>Брифинг сайта</p>
                    <p className='relative xl:w-[500px] text-center xl:text-start font-light text-sm xl:text-lg text-[#B2B5BA]'>Готовы <b className="font-[500] text-[#ffffff]">создать сайт</b>, который работает на Вас? Давайте обсудим детали! Ответьте на все вопросы, заполняя поля, чтобы получить конкретную информацию о Вашем проекте и отправьте его для заказа на разработку сайта.</p>
                </InfoBox>
                <BrifForm/>
            </div>
        </SectionAnimated>
    )
}

export default Brif
