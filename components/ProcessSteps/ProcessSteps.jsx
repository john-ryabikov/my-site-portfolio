const steps = [
    {
        id: 1,
        title: 'Шаг 1',
        text: 'Составляете бриф на сайте и отправляете его на согласование, либо просто связываетесь через месенджеры, указанные на сайте, для составления тех. задания.',
        label: "/img/Section-4/step_icon1.svg"
    },
    {
        id: 2,
        title: 'Шаг 2',
        text: <span>Разрабатываем дизайн-макет сайта или согласовываем его, далее вносим правки, если это требуется, и <b className="text-[#ffffff]">оплачиваем 50%</b> от стоимости услуги.</span>,
        label: "/img/Section-4/step_icon2.svg"
    },
    {
        id: 3,
        title: 'Шаг 3',
        text: <span>Делаем верстку и проводим тестирование сайта на тех. домене, вносим правки, если это требуется, далее размещаем сайт на хостинге и после <b className="text-[#ffffff]">оплачиваем остальные 50%</b> стоимости услуги.</span>,
        label: "/img/Section-4/step_icon3.svg"
    }
]

const ProcessSteps = () => {

    return (
        <div className='relative w-full flex flex-col xl:flex-row items-center justify-start xl:justify-between mt-20 xl:mt-[60px]'>
            {steps.map((step) => (
                <div className='relative w-[330px] h-[260px] flex flex-col items-start justify-start px-[24px] py-[20px] rounded-[30px] border-[1px] border-[#73A2FF] mb-[80px] last:mb-0 xl:mb-0' key={step.id}>
                    <div className='absolute -top-[20px] -right-[20px] w-[80px] h-[80px] flex flex-col items-center justify-center rounded-full bg-step shadow-[0px 4px 25px rgba(67, 93, 255, 0.30)]'>
                        <img src={step.label} alt="Step"/>
                    </div>
                    <p className='relative text-center text-[40px] font-normal mb-5'>{step.title}</p>
                    <p className='relative text-start font-light text-[#cfcfcf81] leading-[130%]'>{step.text}</p>
                </div>
            ))}
        </div>
    )
}

export default ProcessSteps
