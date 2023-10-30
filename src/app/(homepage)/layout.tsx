'use client'
import { iconData } from '@/components/ui/NavbarData';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'
import ThemeSwitcher from '../ThemeSwitcher';
import Clock from '@/components/ui/Clock';



export default function PagesLayout({children} : {children : React.ReactNode}) {
  const pathname = usePathname();
  return (
    <>
      <nav>
        <div className='flex h-max w-full fixed flex-row bottom-0 justify-between px-2 py-1 bg-gray-400 rounded-full bg-opacity-40'>
        {iconData.map((link, index)=> {
          return (
            <Link
            href={link.path}
            key={index}>{link.icon}
            </Link>
          )})}
        </div>
      </nav>
      <section>
        <div className='flex fixed top-0 right-1'>
          <ThemeSwitcher/>
          <Clock/>
        </div>
        <div >
          {children}
        </div>
      </section>
    </>
  )
}
