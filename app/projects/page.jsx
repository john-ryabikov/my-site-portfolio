"use client"

import { ButtonUI } from "@/components/ButtonUI/ButtonUI";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"

import WorkSliderButtons from "@/components/WorkSliderButtons/WorkSliderButtons";
import SectionAnimated from "@/components/SectionAnimated/SectionAnimated";

import "swiper/css"

const projects = [
  {
    id: 1,
    name: "PARADISE TRAVEL",
    type: "Сайт-визитка",
    desc: "Разработан лёгкий и красивый дизайн сайта с элементами анимации и слайдерами, добавлено несколько форм обратной связи для сбора данных посетителей сайта, внедрен виджет мессенджера \"ВКонтакте\" для мгновенной прямой связи с консультантом, адаптивный дизайн под любой экран монитора или гаджета,также встроена простая админ.панель для редактирования контента сайта.",
    stacks: [{name: "HTML", icon: "/img/Icons/Stacks/html-stack_icon.svg"}, {name: "SCSS", icon: "/img/Icons/Stacks/scss-stack_icon.svg"}, {name: "JQuery", icon: "/img/Icons/Stacks/jq-stack_icon.svg"}],
    preview: "/img/Projects/proj_1.webp",
    href: "https://prtravel.ru"
  },
  {
    id: 2,
    name: "ВИБРОСТОЛЫ КАРЕЛИЯ",
    type: "Лендинг",
    desc: "Разработан индивидуальный дизайн сайта, добавлена легкая анимация блоков с помощью библиотеки \"Framer Motion\", мобильное меню. Добавлены формы обратной связи для сбора данных посетителей сайта, адаптивный дизайн под любой экран монитора или гаджета. Также встроена простая админ.панель для редактирования контента сайта.",
    stacks: [{name: "Next.js", icon: "/img/Icons/Stacks/next-stack_icon.svg"}, {name: "SCSS", icon: "/img/Icons/Stacks/scss-stack_icon.svg"}, {name: "Framer Motion", icon: "/img/Icons/Stacks/motion-stack_icon.svg"}], 
    preview: "/img/Projects/proj_2.png",
    href: "https://vibrostol-plitka.ru"
  },
  {
    id: 3,
    name: "АВТОПОДБОР",
    type: "Сайт-визитка",
    desc: "Разработан индивидуальный дизайн сайта с элементами анимации, меню и слайдером, добавлены формы обратной связи для сбора данных посетителей сайта, адаптивность под любой экран монитора или гаджета, также встроена простая админ.панель для редактирования контента сайта.",
    stacks: [{name: "HTML", icon: "/img/Icons/Stacks/html-stack_icon.svg"}, {name: "SCSS", icon: "/img/Icons/Stacks/scss-stack_icon.svg"}, {name: "JQuery", icon: "/img/Icons/Stacks/jq-stack_icon.svg"}],
    preview: "/img/Projects/proj_3.png",
    href: "https://podborautos.ru"
  },
  {
    id: 4,
    name: "ДЛЯ ФОТОГРАФА",
    type: "Сайт-портфолио",
    desc: "Разработан индивидуальный дизайн сайта, меню и галерея с категориями фотографий, добавлена форма обратной связи для записи на съемки и сбора информации посетителя сайта, адаптивность под любой экран монитора или гаджета.",
    stacks: [{name: "Next.js", icon: "/img/Icons/Stacks/next-stack_icon.svg"}, {name: "SCSS", icon: "/img/Icons/Stacks/scss-stack_icon.svg"}],
    preview: "/img/Projects/proj_4.png",
    href: "https://photograph-eight.vercel.app/"
  },
  {
    id: 5,
    name: "ОНЛАЙН-ТУРАГЕНТ",
    type: "Лендинг",
    desc: "Разработан индивидуальный дизайн сайта, добавлены кнопки для записи через мессенджер на курсы, адаптивность под любой экран монитора или гаджета, также встроена простая админ.панель для редактирования контента сайта.",
    stacks: [{name: "HTML", icon: "/img/Icons/Stacks/html-stack_icon.svg"}, {name: "SCSS", icon: "/img/Icons/Stacks/scss-stack_icon.svg"}, {name: "JQuery", icon: "/img/Icons/Stacks/jq-stack_icon.svg"}],
    preview: "/img/Projects/proj_5.png",
    href: "https://svetbali.ru"
  },
  {
    id: 6,
    name: "АВРОРА",
    type: "Сайт-визитка",
    desc: "Разработан лёгкий и красивый дизайн сайта + слайдеры, добавлены кнопки для связи через мессенджеры, адаптивность под любой экран монитора или гаджета.",
    stacks: [{name: "HTML", icon: "/img/Icons/Stacks/html-stack_icon.svg"}, {name: "SCSS", icon: "/img/Icons/Stacks/scss-stack_icon.svg"}, {name: "JQuery", icon: "/img/Icons/Stacks/jq-stack_icon.svg"}, {name: "PHP", icon: "img/Icons/Stacks/php-stack_icon.svg"}],
    preview: "/img/Projects/proj_6.png",
    href: "https://cx48113.tmweb.ru"
  },
  {
    id: 7,
    name: "GIFT-BOX ELSTAL",
    type: "Дизайн-сайта",
    desc: "Разработан индивидуальный дизайн-макет сайта, учтены возможность собрать свой собсвтенный готовый продукт и форма обратной связи.",
    stacks: [{name: "Figma", icon: "/img/Icons/Stacks/figma-stack_icon.svg"}],
    preview: "/img/Projects/proj_8.jpg",
    href: "blanks/Gift-box-elstal.pdf"
  },
  {
    id: 8,
    name: "FEATHER",
    type: "Интернет-магазин",
    desc: "Разработан индивидуальный дизайн сайта, навигация, меню и галерея с выбором товара, встроенная корзина с возможностями: изменение количества товара и подсчет общей суммы, удаления товара из корзины, очищения корзины полностью. Адаптивность под любой экран монитора или гаджета.",
    stacks: [{name: "React.js", icon: "/img/Icons/Stacks/react-stack_icon.svg"}, {name: "SCSS", icon: "/img/Icons/Stacks/scss-stack_icon.svg"}, {name: "Redux", icon: "/img/Icons/Stacks/redux-stack_icon.svg"}],
    preview: "/img/Projects/proj_9.png",
    href: "https://john-ryabikov.github.io/feather-shop/"
  },
  {
    id: 9,
    name: "STUDY LESSONS",
    type: "Учебная платформа",
    desc: "Разработан индивидуальный дизайн сайта, меню с выбором модуля и отдельных в нем уроков, имеется рабочая форма авторизации для входа на платформу (посетители, имеющие доступ к сайту, смогут войти на него) и рабочая форма регистрации для получения доступа входа на платформу (посетители, имеющие уникальный код, смогут зарегистрироваться на платформе), адаптивность под любой экран монитора или гаджета.",
    stacks: [{name: "Next.js", icon: "/img/Icons/Stacks/next-stack_icon.svg"}, {name: "SCSS", icon: "/img/Icons/Stacks/scss-stack_icon.svg"}, {name: "Next-Auth", icon: "/img/Icons/Stacks/auth-stack_icon.svg"}, {name: "Prisma", icon: "/img/Icons/Stacks/prisma-stack_icon.svg"}],
    preview: "/img/Projects/proj_10.png",
    href: "https://study-lessons-platform.vercel.app/"
  },
  {
    id: 10,
    name: "Маркетинг WB",
    type: "Сайт-визитка",
    desc: "Разработан индивидуальный дизайн сайта, адаптивность под любой экран монитора или гаджета, добавлены видео с оптимизацией загрузки через библиотеку \"React Player\", добавлена легкая анимация блоков с помощью библиотеки \"Framer Motion\".",
    stacks: [{name: "Next.js", icon: "/img/Icons/Stacks/next-stack_icon.svg"}, {name: "Tailwind", icon: "/img/Icons/Stacks/tail-stack_icon.svg"}, {name: "Framer Motion", icon: "/img/Icons/Stacks/motion-stack_icon.svg"}],
    preview: "/img/Projects/proj_11.png",
    href: "https://kreativniy-marketing.vercel.app/"
  },
  {
    id: 11,
    name: "Pokemons Game",
    type: "Telegram App",
    desc: "Разработан индивидуальный дизайн игры, адаптивность под любой экран монитора или гаджета, анимация действий, кнопок и переходов с помощью библиотеки \"Framer Motion\", сохранение данных игры.",
    stacks: [{name: "React-Vite", icon: "/img/Icons/Stacks/vite-stack_icon.svg"}, {name: "Zustand", icon: "/img/Icons/Stacks/zus-stack_icon.svg"}, {name: "Framer Motion", icon: "/img/Icons/Stacks/motion-stack_icon.svg"}],
    preview: "/img/Projects/proj_12.png",
    href: "http://t.me/Pokemon_Game_26_Bot/PokemonGameApp"
  },
];

const Section3 = () => {

  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex])
  }

  return (
    <SectionAnimated classSection='relative w-full xl:h-screen pt-[140px] xl:pt-[120px] pb-20 xl:pb-0 flex flex-col items-center justify-center'>
      <img className='absolute top-0 left-0 xl:top-1/2 xl:-translate-y-1/2 xl:left-1/2 xl:-translate-x-1/2 select-none xl:w-[960px]' src="/img/Section-3/back-fon.svg" alt=""/>
      <div className='wrapper flex flex-col-reverse xl:flex-row items-center xl:items-start xl:justify-between gap-[30px] xl:gap-[60px]'>
        <div className='relative w-[350px] xl:w-1/2 xl:h-[580px] flex flex-col items-start justify-start'>
          <h3 className='relative text-start leading-[230%] mb-10'>
            <span className='relative uppercase text-[34px] xl:text-[50px] tracking-[0.03em] font-light'>{project.name}</span><br/>
            <span className='relative text-2xl xl:text-[26px] font-extralight tracking-[0.1em] text-[#ffffff4d] pt-2'>{project.type}</span>
          </h3>
          <p className='relative font-bold text-lg tracking-[0.03em] mb-4'>Результат работы:</p>
          <p className='relative xl:h-[130px] font-light text-sm mb-[60px] opacity-70 text-[#B2B5BA]'>{project.desc}</p>
          <p className='relative font-bold text-base tracking-[0.03em] mb-6'>Стек проекта:</p>
          <div className='relative w-full flex flex-wrap gap-y-[10px] gap-x-[10px] xl:gap-y-0 mb-10 pb-6 border-b-[1px] border-white border-opacity-20'>
            {project.stacks.map((stack, i) => (
                <p className='relative px-4 py-2 bg-[#73A2FF] bg-opacity-15 rounded-[30px] font-semibold flex flex-row items-center justify-center gap-2' key={i}>
                  <img src={stack.icon} alt="stack"/>
                  <span>{stack.name}</span>
                </p>
            ))}
          </div>
          <ButtonUI href={project.href} name="btn-section-projects" classButton="relative h-[60px] flex flex-row items-center justify-center px-[30px] font-title text-sm tracking-[0.26em] overflow-hidden cursor-pointer group">
            <span className='relative w-[180px] uppercase z-0'>Посмотреть проект</span>
          </ButtonUI>
        </div>
        <div className='relative w-[360px] xl:w-[500px] xl:h-full'>
            <Swiper
              spaceBetween={80}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className='h-[380px] xl:h-full'
            >
              {projects.map((project, i) => (
                <SwiperSlide key={i} className='w-full'>
                  <div className='relative mx-auto w-[320px] xl:w-full h-[320px] xl:h-[450px] flex flex-col items-center justify-center bg-[#73A2FF] bg-opacity-15 rounded-[15px]'>
                    <img className='w-[90%]' src={project.preview} alt={project.name}/>
                  </div>
                </SwiperSlide>  
              ))}
              <WorkSliderButtons projects={projects}/>
            </Swiper>
        </div>
      </div>
    </SectionAnimated>
  )
}

export default Section3
