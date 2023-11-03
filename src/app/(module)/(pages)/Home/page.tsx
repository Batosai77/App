'use client'
import PageAnimate from '@/components/ui/PageAnimate'
import React from 'react'

export default function Home() {
  return (
    <>
      <PageAnimate>
        <div className='flex h-screen w-full justify-center items-center bg-slate-500/20'>
          <div className='text-5xl animate-bounce'>
              <h1>Coming Soon....</h1>
          </div>
        </div>
      </PageAnimate>
    </>
  )
}
