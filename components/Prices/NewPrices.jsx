import Price from "./Price"
import Spoiler from "./Spoiler"

const priceList = [
    {
      id: 1,
      name: 'Одностраничный сайт',
      type: '(инфо-сайт, лендинг, промо-сайт, квиз-сайт)',
      options: [
        'Сайт на одной странице',
        'Адаптивная верстка', 
        'Кроссбраузерность',
        'Админ. панель (если необходимо)',
        'Настройка хостинга для сайта (если необходимо)'
      ],
      price: 10000
    },
    {
      id: 2,
      name: 'Многостраничный сайт',
      type: '(стоимость 1-й страницы)',
      options: [
        'Сайт на нескольких страницах',
        'Адаптивная верстка', 
        'Кроссбраузерность',
        'Админ. панель (если необходимо)',
        'Настройка хостинга для сайта (если необходимо)'
      ],
      price: 10000
    },
    {
      id: 3,
      name: 'Веб-приложение',
      type: '(Telegram App, интернет-магазин)',
      options: [
        'Сайт на одной или нескольких страницах',
        'Адаптивная верстка', 
        'Кроссбраузерность',
        'Админ. панель (если необходимо)',
        'Настройка хостинга для сайта (если необходимо)'
      ],
      price: 15000
    }
]

const NewPrices = () => {

    return (
        <div className='relative w-full flex flex-col items-start justify-start gap-7'>
            {priceList.map(list => (
              <div className='relative w-full flex flex-col items-start justify-start' key={list.id}>
                <div className='relative w-full flex flex-row items-start justify-between'>
                    <div className='relative flex flex-col items-start justify-start'>
                        <p className='relative font-[400] text-[18px] xl:text-[32px] tracking-[0.05em]'>{list.name}</p>
                        <p className='relative w-auto text-[10px] xl:text-sm font-light tracking-[0.1em] text-[#ffffff4d] xl:mt-[-6px] mb-3 xl:mb-6'>{list.type}</p>
                    </div>
                    <Price price={list.price} priceId={list.id}/>
                </div>
                <Spoiler list={list}/>
              </div>  
            ))}
        </div>
    )
}

export default NewPrices
