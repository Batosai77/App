'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function Home() {
  return (
    <>
        <div className='flex h-screen w-full items-center justify-center text-2xl font-serif font-semibold text-cyan-300'>
          <TypeAnimation 
          sequence={[
            "Agni Nur Ayeni Bocah Paling Lucu",1000,
            "Agni Nur Ayeni Bocah Paling Aneh",1000,
            "Agni Nur Ayeni Bocah Paling Nyebeli",1000,
            "Agni Nur Ayeni Bocah Paling Terserahh",1000,
          ]}
          repeat={Infinity}
          />
        </div>
    </>
  )
}
