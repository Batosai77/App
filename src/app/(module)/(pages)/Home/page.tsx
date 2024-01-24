'use client'
import PageAnimate from '@/components/ui/PageAnimate'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function Home() {
  return (
    <>
      <PageAnimate>
        <div className='flex h-screen w-full bg-slate-500/20'>
          <div className=' flex m-10 text-5xl'>
            <div>{`Hallo`}</div>
              <TypeAnimation
              sequence={[
                "Transforming Indicator", 1000,
                "Transforming Custom Indicator", 1000,
              ]}
              repeat={Infinity}
              />
          </div>
        </div>
      </PageAnimate>
    </>
  )
}
