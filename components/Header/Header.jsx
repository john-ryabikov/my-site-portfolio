"use client"

import Link from "next/link";
import Navigation from "./Navigation";
import MenuNav from "../MenuNav/MenuNav";

import { useState } from "react";

const Header = () => {

    const [showMenu, setShowMenu] = useState(false)

    const openMenu = () => setShowMenu(prev => !prev)

    return (
        <header className='absolute top-0 left-0 w-full pt-5 xl:pt-10 xl:h-[50] z-20'>
            <div className="wrapper flex flex-row items-center justify-between">
                <Link className='relative' href="/">
                    <img src="/img/Header/logo.svg" alt="Logo"/>
                </Link>
                <Navigation/>
                <Link className='relative xl:w-[220px] h-[60px] hidden xl:flex flex-row items-center justify-center text-center bg-[#73A2FF] bg-opacity-15 hover:bg-opacity-25 transition-all rounded-[30px] border border-[#73a2ff]' href="/brif">
                    <span className='font-title text-sm font-semibold uppercase tracking-[0.15em] mr-4'>Составить бриф</span>
                    <img src="/img/Icons/brif_icon.svg" alt=""/>
                </Link>
                <button className='relative block xl:hidden' onClick={openMenu}>
                    <img src="/img/Header/menu-btn.svg" alt="Menu"/>
                </button>
                <MenuNav open={showMenu} close={openMenu}/>
            </div>
        </header>
    )
}

export default Header
