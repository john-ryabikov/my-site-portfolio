import { Jost, Fira_Sans_Extra_Condensed as Fira } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header/Header";
import MainContainer from "@/components/MainContainer/MainContainer";
import BodyContainer from "@/components/BodyContainer/BodyContainer";

const jost = Jost({ 
  subsets: ["latin", "cyrillic"], 
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  preload: true,
  variable: "--font-jost" 
});

const fira = Fira({ 
  subsets: ["latin", "cyrillic"], 
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  preload: true,
  variable: "--font-fira" 
});

export const metadata = {
  title: "Разработка сайтов, лэндингов и веб-приложений | г. Электросталь, Москва и Московская область",
  description: "Разработка сайтов, лэндингов и веб-приложений, г. Электросталь, Москва и Мос.обл. Здесь мы сделаем с Вами персональную и эффективную целевую страницу, которая поможет Вашему бизнесу открыть второе дыхаение и выйти на новый уровень. Цены на услуги от 5000 рублей.",
  authors: [{ name: 'Just-Site.ru' }],
  keywords: "Разработка сайта, Лендинг, Сайт-визитка, Веб-приложение",
  robots: "noyaca",
  generator: 'Next.js',
  formatDetection: {
    telephone: false,
  },
  verification: {
    yandex: 'e8142da17de2073d'
  },
  icons: {
    icon: [
      { url: '/favicon.svg' },
      new URL('/favicon.svg', 'https://just-site.ru'),
    ]
  },
  openGraph: {
    images: [
      {url: "https://just-site.ru/img/Preview/preview_logo.jpg"}
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru-RU" prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#">
      <BodyContainer jost={jost.variable} fira={fira.variable}>
        <Header/>
        <MainContainer>
          {children}
        </MainContainer>
      </BodyContainer>
    </html>
  )
}
