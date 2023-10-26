import React from 'react'
import '@/app/globals.css'
import Navbar from '@/components/ui/Navbar'

const Layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className=' flex h-screen w-full bg-mesh'>
      <Navbar />
      <div className='flex w-full items-center justify-center'>{children}</div>
    </div>
  )
}
export default Layout