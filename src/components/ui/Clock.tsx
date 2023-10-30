'use client'
import React, { useEffect, useState } from 'react'


const Clock = () => {
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
    <span className='flex items-center justify-center bg-slate-500 px-2 py-1 rounded-lg bg-opacity-20' suppressHydrationWarning ={true}>{clock.toLocaleTimeString()}</span>
  )
}

export default Clock