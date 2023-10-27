'use client'
import React, { useEffect, useState } from 'react'
import '@/app/globals.css'
import Navbar from '@/components/ui/Navbar'
import { LuSunMedium,
         LuMoon} from "react-icons/lu";
import Clock from '@/components/ui/Clock';



const Layout = ({children} : {children: React.ReactNode}) => {
    const [dark, setDark] = useState(false);  
  
    const handleClick = () => {
        setDark(!dark);
   }

  return (
    <>
    <div className="fixed right-4 top-0">
        <button 
        className={`bg-gray-600 ${dark ? "text-yellow-300" : "text-black"} rounded-lg p-1 m-1 text-3xl backdrop-blur bg-opacity-20
        hover:bg-opacity-80`} onClick={() => setTimeout(handleClick, 500)}>
          {dark ? <LuSunMedium absoluteStrokeWidth ={true} strokeWidth = {1}/> : <LuMoon absoluteStrokeWidth ={true} strokeWidth = {1} />}
        </button>
        <Clock />
    </div>
    <div className={`flex h-screen w-full ${dark === true ? 'bg-dark' : 'bg-light'} bg-no-repeat`}>
      <Navbar /> 
      <div className='flex w-full items-center justify-center'>{children}</div>
    </div>
    </>
  )
}
export default Layout