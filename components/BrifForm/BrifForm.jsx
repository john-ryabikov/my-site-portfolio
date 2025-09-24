"use client"

import Link from 'next/link';

import { ButtonUI } from '../ButtonUI/ButtonUI';

import { useRef, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useMediaQuery } from '@/hooks/MediaQuery/useMediaQuery';
import { useAlerts } from '@/data/store';

import { types_site, types_time, types_host, types_desing } from '@/data/InputTypes';

import axios from 'axios'

const TOKEN = "6833220386:AAEIj-86iGxnLgU4XRQwl5Jtv8V9XEwYnek";
const CHAT_ID = "-1002063310192";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const BrifForm = () => {

  const [slidePos, setSlidePos] = useState(0)
  const [step, setStep] = useState(1)

  const {register, handleSubmit, reset} = useForm()

  const sliderBrif = useRef(null)

  const isMobile = useMediaQuery("(max-width: 767px)");

  const {toggleAlertBrif, toggleAlertErr} = useAlerts()

  useEffect(() => {sliderBrif.current.style = `transform: translateX(${slidePos}px)`}, [slidePos])

  const sendBrif = (data) => {
    if (data.comp === "" || data.type === "" || data.domen === "" || data.desing === "" || data.time === "" || data.hosting === "" || data.bonus === "" || data.user_name === "" || data.user_mail === "" || data.user_phone === "") {
      toggleAlertErr()
      return
    }
    if (!/^[\s()+-]*([0-9][\s()+-]*){6,20}$/.test(data.user_phone)){
      alert("Неверный номер телефона!")
      return
    }
    brifSubmit(data)
    toggleAlertBrif()
  }

  const sendMessage = (msg_tg) => {
    let message = ""
    for (let text_tg of msg_tg) {
      message += text_tg
    }  
    axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message
    })
    .catch ((err) => {
      alert(err)
    });
  }

  const brifSubmit = (data_brif) => {
    const message_tg = [
      `<b>Название компании:</b> ${data_brif.comp}\n`,
      `<b>Доменное имя:</b> ${data_brif.domen}\n`,
      `<b>Тип сайта:</b> ${data_brif.type}\n`,
      `<b>Дизайн сайта:</b> ${data_brif.desing}\n`,
      `<b>Срок разработки:</b> ${data_brif.time}\n`,
      `<b>Размещение на хостинге:</b> ${data_brif.hosting}\n`,
      `<b>Доп. требования:</b> ${data_brif.bonus}\n`,
      `<b>Имя клиента:</b> ${data_brif.user_name}\n`,
      `<b>Почта клиента:</b> ${data_brif.user_mail}\n`,
      `<b>Телефон клиента:</b> ${data_brif.user_phone}`
    ]
    sendMessage(message_tg)
    sliderBrif.current.style = `transform: translateX(0px)`
    setStep(1)
    reset()
  }

  const nextSlideBrif = (slidePos) => {
      if (isMobile) {
        setSlidePos(prev => prev - 380)
        sliderBrif.current.style = `transform: translateX(${slidePos}px)`
      } else {
        setSlidePos(prev => prev - 500)
        sliderBrif.current.style = `transform: translateX(${slidePos}px)`
      }
      setStep(prev => prev + 1)
  }

  const prevSlideBrif = (slidePos) => {
      if (isMobile) {
        setSlidePos(prev => prev + 380)
        sliderBrif.current.style = `transform: translateX(${slidePos}px)`
      } else {
        setSlidePos(prev => prev + 500)
        sliderBrif.current.style = `transform: translateX(${slidePos}px)`
      }
      setStep(prev => prev - 1)
  }

  return (    
      <div className='relative w-[340px] xl:w-[460px] flex flex-col items-start justify-start mt-20 xl:mt-0'>
          <div className='relative w-full text-sm font-extralight opacity-40 mb-8 flex flex-row items-center justify-between'>
            <p className='cursor-pointer select-none'>
              {step > 1 && (<span onClick={prevSlideBrif}>{"← Назад"}</span>)}
            </p>
            <p className='select-none'>Шаг {step} из 9</p>
          </div>
          <form className='relative w-full h-[360px] overflow-hidden' onSubmit={handleSubmit(sendBrif)}>
              <div className='absolute top-0 h-full transition-transform duration-500 flex flex-row items-center justify-start' ref={sliderBrif}>
                {/* Первый шаг */}
                <div className='relative w-[340px] xl:w-[460px] h-full flex flex-col items-start justify-between mr-10'>
                  <p className='relative text-xl xl:text-[30px] font-normal leading-normal mb-5'>1. Название компании или услуги</p>
                  <input 
                    className='relative text-lg font-light w-[99%] h-[60px] bg-inherit rounded-[15px] border border-[#73A2FF] pl-6 outline-none mb-4 last:mb-0' 
                    type="text" 
                    name="comp" 
                    placeholder="Введите название"
                    {...register('comp')}
                  />
                  <ButtonUI classButton="relative h-[60px] flex flex-row items-center justify-center px-[30px] font-title text-sm tracking-[0.26em] overflow-hidden cursor-pointer group" nextSlideBrif={nextSlideBrif} name="btn-brif">
                    <span className='relative w-[150px] uppercase z-0'>Следующий шаг</span>
                  </ButtonUI>
                </div>
                {/* Второй шаг */}
                <div className='relative w-[340px] xl:w-[460px] h-full flex flex-col items-start justify-between mr-10'>
                  <p className='relative text-xl xl:text-[30px] font-normal  leading-normal mb-5'>2. Доменное имя сайта</p>
                  <input 
                    className='relative text-lg font-light w-[99%] h-[60px] bg-inherit rounded-[15px] border border-[#73A2FF] pl-6 outline-none mb-4 last:mb-0' 
                    type="text" 
                    name="comp" 
                    placeholder="https://example.ru"
                    {...register('domen')}
                  />
                  <ButtonUI classButton="relative h-[60px] flex flex-row items-center justify-center px-[30px] font-title text-sm tracking-[0.26em] overflow-hidden cursor-pointer group" nextSlideBrif={nextSlideBrif} name="btn-brif">
                    <span className='relative w-[150px] uppercase z-0'>Следующий шаг</span>
                  </ButtonUI>
                </div>
                {/* Третий шаг */}
                <div className='relative w-[340px] xl:w-[460px] h-full flex flex-col items-start justify-between mr-10'>
                  <p className='relative text-xl xl:text-[30px] font-normal leading-normal'>3. Тип сайта</p>
                  <div className='brif-labels relative h-auto xl:h-[94px] mb-10 flex flex-col gap-2 xl:gap-6'>
                    {types_site.map((type, i) => (
                        <label className='relative xl:h-[36px] opacity-70 flex flex-row items-center justify-start text-base xl:text-lg font-extralight leading-[36px] cursor-pointer mr-[34px] pl-[46px] mb-2 xl:mb-0' key={i}>
                            <input
                                {...register('site')}
                                className='absolute opacity-0' 
                                type="radio" 
                                name="site"
                                value={type}
                            />
                            <div className='brif-labels__radio absolute top-0 left-0 w-[36px] h-[36px] flex flex-col items-center justify-center rounded-[10px] border border-[#73A2FF] pl-5 pb-[10px] mr-3'>
                                <img className='relative opacity-0' src="img/Icons/checked_icon.svg" alt=""/>
                            </div>
                            {type}
                        </label>
                    ))}
                  </div>
                  <ButtonUI classButton="relative h-[60px] flex flex-row items-center justify-center px-[30px] font-title text-sm tracking-[0.26em] overflow-hidden cursor-pointer group" nextSlideBrif={nextSlideBrif} name="btn-brif">
                    <span className='relative w-[150px] uppercase z-0'>Следующий шаг</span>
                  </ButtonUI>
                </div>
                {/* Четветрый шаг */}
                <div className='relative w-[340px] xl:w-[460px] h-full flex flex-col items-start justify-between mr-10'>
                  <p className='relative text-xl xl:text-[30px] font-normal leading-normal mb-5'>4. Разработка дизайна сайта</p>
                  <div className='brif-labels relative w-[200px] xl:w-[420px] h-auto xl:h-[94px] mb-10 flex flex-wrap'>
                    {types_desing.map((type, i) => (
                        <label className='relative xl:w-[170px] xl:h-[36px] opacity-70 flex flex-row items-center justify-start text-lg font-extralight leading-[36px] cursor-pointer mr-[34px] pl-[46px] mb-4 xl:mb-0' key={i}>
                            <input
                                {...register('desing')}
                                className='absolute opacity-0' 
                                type="radio" 
                                name="hosting"
                                value={type}
                            />
                            <div className='brif-labels__radio absolute top-0 left-0 w-[36px] h-[36px] flex flex-col items-center justify-center rounded-[10px] border border-[#73A2FF] pl-5 pb-[10px] mr-3'>
                                <img className='relative opacity-0' src="img/Icons/checked_icon.svg" alt=""/>
                            </div>
                            {type}
                        </label>
                    ))}
                  </div>
                  <ButtonUI classButton="relative h-[60px] flex flex-row items-center justify-center px-[30px] font-title text-sm tracking-[0.26em] overflow-hidden cursor-pointer group" nextSlideBrif={nextSlideBrif} name="btn-brif">
                    <span className='relative w-[150px] uppercase z-0'>Следующий шаг</span>
                  </ButtonUI>
                </div>
                {/* Пятый шаг */}
                <div className='relative w-[340px] xl:w-[460px] h-full flex flex-col items-start justify-between mr-10'>
                  <p className='relative text-xl xl:text-[30px] font-normal leading-normal mb-5'>5. Срок разработки</p>
                  <div className='brif-labels relative w-[200px] xl:w-[420px] h-auto xl:h-[94px] mb-10 flex flex-wrap'>
                    {types_time.map((type, i) => (
                        <label className='relative xl:w-[170px] xl:h-[36px] opacity-70 flex flex-row items-center justify-start text-lg font-extralight leading-[36px] cursor-pointer mr-[34px] pl-[46px] mb-2 xl:mb-0' key={i}>
                            <input
                                {...register('time')}
                                className='absolute opacity-0' 
                                type="radio" 
                                name="time"
                                value={type}
                            />
                            <div className='brif-labels__radio absolute top-0 left-0 w-[36px] h-[36px] flex flex-col items-center justify-center rounded-[10px] border border-[#73A2FF] pl-5 pb-[10px] mr-3'>
                                <img className='relative opacity-0' src="img/Icons/checked_icon.svg" alt=""/>
                            </div>
                            {type}
                        </label>
                    ))}
                  </div>
                  <ButtonUI classButton="relative h-[60px] flex flex-row items-center justify-center px-[30px] font-title text-sm tracking-[0.26em] overflow-hidden cursor-pointer group" nextSlideBrif={nextSlideBrif} name="btn-brif">
                    <span className='relative w-[150px] uppercase z-0'>Следующий шаг</span>
                  </ButtonUI>
                </div>
                {/* Шестой шаг */}
                <div className='relative w-[340px] xl:w-[460px] h-full flex flex-col items-start justify-between mr-10'>
                  <p className='relative text-xl xl:text-[30px] font-normal leading-normal mb-5'>6. Размещение на хостинге</p>
                  <div className='brif-labels relative w-[200px] xl:w-[420px] h-auto xl:h-[94px] mb-10 flex flex-wrap'>
                    {types_host.map((type, i) => (
                        <label className='relative xl:w-[170px] xl:h-[36px] opacity-70 flex flex-row items-center justify-start text-lg font-extralight leading-[36px] cursor-pointer mr-[34px] pl-[46px] mb-4 xl:mb-0' key={i}>
                            <input
                                {...register('hosting')}
                                className='absolute opacity-0' 
                                type="radio" 
                                name="hosting"
                                value={type}
                            />
                            <div className='brif-labels__radio absolute top-0 left-0 w-[36px] h-[36px] flex flex-col items-center justify-center rounded-[10px] border border-[#73A2FF] pl-5 pb-[10px] mr-3'>
                                <img className='relative opacity-0' src="img/Icons/checked_icon.svg" alt=""/>
                            </div>
                            {type}
                        </label>
                    ))}
                  </div>
                  <ButtonUI classButton="relative h-[60px] flex flex-row items-center justify-center px-[30px] font-title text-sm tracking-[0.26em] overflow-hidden cursor-pointer group" nextSlideBrif={nextSlideBrif} name="btn-brif">
                    <span className='relative w-[150px] uppercase z-0'>Следующий шаг</span>
                  </ButtonUI>
                </div>
                {/* Седьмой шаг */}
                <div className='relative w-[340px] xl:w-[460px] h-full flex flex-col items-start justify-between mr-10'>
                  <p className='relative text-xl xl:text-[30px] font-normal  leading-normal mb-5'>7. Дополнительные требования</p>
                  <textarea 
                    className='relative text-lg font-light w-[99%] h-[150px] bg-inherit rounded-[15px] border border-[#73A2FF] px-6 py-[17px] outline-none mb-4 last:mb-0 resize-none' 
                    type="text" 
                    name="bonus" 
                    placeholder="Напишите здесь"
                    {...register('bonus')}
                  />
                  <ButtonUI classButton="relative h-[60px] flex flex-row items-center justify-center px-[30px] font-title text-sm tracking-[0.26em] overflow-hidden cursor-pointer group" nextSlideBrif={nextSlideBrif} name="btn-brif">
                    <span className='relative w-[150px] uppercase z-0'>Следующий шаг</span>
                  </ButtonUI>
                </div>
                {/* Восьмой шаг */}
                <div className='relative w-[340px] xl:w-[460px] h-full flex flex-col items-start justify-between mr-10'>
                  <p className='relative text-xl xl:text-[30px] font-normal leading-normal mb-5'>8. Как Вас зовут?</p>
                  <input 
                    className='relative text-lg font-light w-[99%] h-[60px] bg-inherit rounded-[15px] border border-[#73A2FF] pl-6 outline-none mb-4 last:mb-0' 
                    type="text" 
                    name="user_name" 
                    placeholder="Ваше имя"
                    {...register('user_name')}
                  />
                  <ButtonUI classButton="relative h-[60px] flex flex-row items-center justify-center px-[30px] font-title text-sm tracking-[0.26em] overflow-hidden cursor-pointer group" nextSlideBrif={nextSlideBrif} name="btn-brif">
                    <span className='relative w-[150px] uppercase z-0'>Следующий шаг</span>
                  </ButtonUI>
                </div>
                {/* Последний шаг */}
                <div className='relative w-[340px] xl:w-[460px] h-full flex flex-col items-start justify-between'>
                  <p className='relative text-xl xl:text-[30px] font-normal leading-normal mb-5'>9. Контактная информация</p>
                  <input 
                    className='relative text-lg font-light w-[99%] h-[60px] bg-inherit rounded-[15px] border border-[#73A2FF] pl-6 outline-none mb-4 last:mb-0' 
                    type="email" 
                    name="user_mail" 
                    placeholder="Ваш email"
                    {...register('user_mail')}
                  />
                  <input 
                    className='relative text-lg font-light w-[99%] h-[60px] bg-inherit rounded-[15px] border border-[#73A2FF] pl-6 outline-none mb-4 last:mb-0' 
                    type="tel" 
                    name="user_phone" 
                    placeholder="+7-123-456-78-90"
                    {...register('user_phone')}
                  />
                  <ButtonUI classButton="relative h-[60px] flex flex-row items-center justify-center px-[30px] font-title text-sm tracking-[0.26em] overflow-hidden cursor-pointer group" name="btn-send">
                    <span className='relative w-[150px] uppercase z-0'>Отправить бриф</span>
                  </ButtonUI>
                </div>
              </div>
          </form>
          <p className='relative w-full mt-9 text-[#B2B5BA] text-center text-sm font-extralight leading-[130%] tracking-[0.45px]'>
              Отправляя бриф, Вы соглашаетесь с условиями<br/>обработки <Link className='relative font-light text-white underline transition-all hover:opacity-40' href="blanks/Согласие на обработку персональных данных.pdf">персональных данных</Link>
          </p>
      </div>
  )
}

export default BrifForm
