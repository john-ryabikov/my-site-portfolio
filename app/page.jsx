import Author from "@/components/Author/Author";
import InfoBox from "@/components/InfoBox/InfoBox";
import MainPrem from "@/components/MainPrem/MainPrem";
import SectionAnimated from "@/components/SectionAnimated/SectionAnimated";

const mainPrems = [
  {
    id: "main-prem-1",
    prem: "Адаптивность",
    text: "Ваш сайт будет идеально отображаться на смартфонах, планшетах и компьютерах."
  },
  {
    id: "main-prem-2",
    prem: "Скорость",
    text: "оптимизированный код ускорит загрузку и улучшит позиции в поисковиках."
  },
  {
    id: "main-prem-3",
    prem: "Кроссбраузерность",
    text: "корректное отображение во всех популярных браузерах."
  }
]

export default function Home() {
  return (
    <SectionAnimated classSection='relative w-full pt-[140px] xl:pt-[160px] flex flex-col items-center justify-center'>
      <div className='wrapper flex flex-col xl:flex-row items-center xl:justify-start pb-20'>
        <InfoBox>
          <h1 className='relative w-full font-title text-center xl:text-start text-[44px] xl:text-[66px] font-normal mb-8 xl:mb-12 pt-[46px] xl:pt-[60px]'>Разработка и верстка сайтов</h1>
          <p className='relative w-[360px] xl:w-[570px] text-center xl:text-start font-light text-sm xl:text-xl text-[#B2B5BA]'>Хотите сайт, который <b className="font-[500] text-[#ffffff]">быстро загружается</b>, безупречно выглядит на любом устройстве и привлекает клиентов? Тогда Вам нужна <b className="font-[500] text-[#ffffff]">качественная вёрстка</b> — основа стабильной работы и высоких конверсий!</p>
          <div className='relative flex flex-col items-start justify-start gap-5 mt-14'>
            {mainPrems.map(prem => (
              <MainPrem key={prem.id} prem={prem}/>
            ))}
          </div>
          <p className='relative w-[360px] pb-2 border-b-[1px] border-white border-opacity-20 uppercase tracking-[0.2em] font-semibold text-sm mt-[600px] xl:mt-16'>Автор проектов:</p>
          <Author/>
        </InfoBox>
        <img className='absolute w-[860px] xl:w-[1060px] top-[520px] xl:top-[370px] xl:-translate-y-1/2 xl:right-[-200px] z-[-1]' src="/img/Section-1/title_img.png" alt="Section-1-fon"/>
      </div>
    </SectionAnimated>
  );
}
