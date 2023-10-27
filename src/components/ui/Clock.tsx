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
    <span suppressHydrationWarning ={true}>{clock.toLocaleTimeString()}</span>
  )
}

export default Clock