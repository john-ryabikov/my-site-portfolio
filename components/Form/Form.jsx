"use client"

import FormSoc from './FormSoc';
import Link from 'next/link';

import { useForm } from 'react-hook-form';
import { ButtonUI } from '../ButtonUI/ButtonUI';

import { useAlerts } from '@/data/store';

import axios from 'axios'

const TOKEN = "6833220386:AAEIj-86iGxnLgU4XRQwl5Jtv8V9XEwYnek";
const CHAT_ID = "-1002063310192";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const Form = () => {

    const {register, handleSubmit, reset} = useForm()

    const {toggleAlertForm, toggleAlertErr} = useAlerts()

    const sendForm = (data) => {
        if (data.name === "" || data.mail === "" || data.msg === ""){
            toggleAlertErr()
            return
        }
        questionSubmit(data)
        toggleAlertForm()
    }

    const questionSubmit = (data_form) => {
        const message_tg = [
            `<b>Имя: ${data_form.name}</b>\n`,
            `<b>Почта: ${data_form.mail}</b>\n`,
            `<b>Вопрос: ${data_form.msg}</b>`
        ]
        sendMessage(message_tg)
        reset()
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
        })
    }

    return (
        <form className='relative w-[340px] xl:w-[500px] flex flex-col items-center justify-start' onSubmit={handleSubmit(sendForm)}>
            <input 
                className='relative w-full h-[60px] font-light text-lg bg-inherit rounded-[15px] border border-[#73A2FF] pl-6 mb-[26px] outline-none' 
                type="text"
                placeholder="Как Вас зовут?"  
                name="user_name"
                {...register('name')} 
            />
            <input 
                className='relative w-full h-[60px] font-light text-lg bg-inherit rounded-[15px] border border-[#73A2FF] pl-6 mb-[26px] outline-none' 
                type="email" 
                placeholder="Ваш Email" 
                name="user_mail" 
                {...register('mail')} 
            />
            <textarea 
                className='relative w-full h-[150px] font-light text-lg bg-inherit rounded-[15px] border border-[#73A2FF] px-6 py-[17px] mb-12 xl:mb-[26px] outline-none resize-none' 
                type="text" 
                placeholder="Какой у Вас вопрос?"
                name="user_msg" 
                {...register('msg')}
            />
            <div className='relative w-full flex flex-col xl:flex-row items-center justify-start xl:justify-between'>
                <ButtonUI name="btn-form" classButton="relative h-[60px] flex flex-row items-center justify-center px-[30px] font-title text-sm tracking-[0.26em] overflow-hidden cursor-pointer group">
                    <span className='relative w-[180px] uppercase z-0'>Отправить вопрос</span>
                </ButtonUI>
                <FormSoc/>
            </div>
            <p className='relative w-full mt-9 text-center text-sm font-light leading-[130%] tracking-[0.45px] text-[#B2B5BA]'>
                Оставляя заявку, Вы соглашаетесь с условиями<br/>обработки <Link className='relative underline transition-all hover:opacity-40 text-[#ffffff]' href="blanks/Согласие на обработку персональных данных.pdf" target="_blank" rel="noreferrer">персональных данных</Link>
            </p>
        </form>
    )
}

export default Form
