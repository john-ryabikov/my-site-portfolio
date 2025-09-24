const pricesWithDesing = [
    {
      id: 1,
      name: 'Дизайн сайта',
      type: '(одна страница)',
      price: '5000',
      texts: [
        'Макеты под все экраны', 
        'Индивидуальный дизайн'
      ]
    },
    {
      id: 2,
      name: 'Сайт-визитка',
      type: '(одна страница)',
      price: '8000',
      texts: [
        'Индивидуальный дизайн (или по готовому макету)', 
        'Адаптивный сайт',
        'Админ. панель Textolite',
        'Хостинг от Timeweb + домен'
      ]
    },
    {
      id: 3,
      name: 'Лендинг',
      type: 'одностраничник',
      price: '10000',
      texts: [
        'Индивидуальный дизайн (или по готовому макету)', 
        'Адаптивный сайт',
        'Админ. панель Textolite',
        'Хостинг от Timeweb + домен'
      ]
    },
    {
      id: 4,
      name: 'Сайт SPA',
      type: 'веб-приложение',
      price: '25000',
      texts: [
        'Индивидуальный дизайн (или по готовому макету)', 
        'Адаптивный сайт',
        'Хостинг от Timeweb + домен',
        'Настройка и подключение базы данных'
      ]
    }
]

const Prices = () => {
  return (
    <div className='relative w-full flex flex-col xl:flex-row items-center xl:items-start justify-start xl:justify-between mt-14 xl:mt-0'>
        {pricesWithDesing.map((price) => (
            <div className='relative w-[242px] flex flex-col items-start justify-start mb-24 last:mb-0 xl:mb-0' key={price.id}>
                <p className='relative text-[36px] tracking-[0.05em] font-extralight'>{price.name}</p>
                <p className='relative text-base font-light tracking-[0.1em] text-[#ffffff4d] mb-8'>{price.type}</p>
                <p className='realtive flex flex-row items-end justify-center text-[40px] font-extralight tracking-[4px] mb-8'>₽<span className='absolute top-[86px] left-[32px] text-[62px] font-normal tracking-[2.7px]'>{price.price}</span></p>
                <p className='relative w-full text-lg font-normal tracking-[0.05em] pb-4 border-b-[1px] border-[#ffffff4d] mb-4'>Что входит?</p>
                {price.texts.map((text, i) => (
                    <p className='relative flex flex-row items-start justify-start text-base font-light text-[#ffffffb3] mb-4 last:mb-0' key={i}>
                        <img className='relative top-[8px] mr-[14px]' src="img/Section-5/label_icon.svg" alt="Label"/>{text}
                    </p>
                ))}
            </div>
        ))}
    </div>
  )
}

export default Prices
