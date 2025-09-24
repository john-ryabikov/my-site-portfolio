"use client"

import { usePathname } from "next/navigation"

import Alerts from "../Alerts/Alerts";
import Footer from "@/components/Footer/Footer";

const MainContainer = ({children}) => {

    const pathname = usePathname()

    return (
        <main className={`relative w-screen flex flex-col items-center justify-start xl:justify-center overflow-x-hidden`}>
            <Alerts/>
            {children}
            {pathname === "/contacts" && <Footer/>}
        </main>
    )
}

export default MainContainer
