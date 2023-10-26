'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { LuArrowRight } from 'react-icons/lu';
import { TypeAnimation } from 'react-type-animation';

const LandingPage = () => {
    const [clock, setClock] = useState(new Date());

    const refreshTime = () => {
      setClock(new Date());
    }

    useEffect(() => {
      const timerId = setInterval(refreshTime, 1000);
      const cleanUp = () => {
        clearInterval(timerId);
      }
      return cleanUp;
    }, [clock])

    return (
      <>
      <div className='flex flex-col h-screen w-full justify-center items-center'>
        <div className='animate-textColor bg-gradient-to-l
         from-green-500 via-emerald-500 to-teal-600 text-transparent bg-clip-text 
         text-5xl font-semibold '>
          WELCOME
        </div>
        <Link 
        className= 'flex items-center justify-between text-white bg-slate-500 mt-4 p-2 rounded-full animate-bounce bg-opacity-20'
        href={'/Home'}> Get Started <LuArrowRight/>
        </Link>
      </div>
      </>
    )
}
export default LandingPage;