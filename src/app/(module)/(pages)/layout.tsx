'use client'
import ThemeSwitcher from '../../../components/theme/ThemeSwitcher';
import Clock from '@/components/ui/Clock';
import Navbar from '@/components/ui/Navbar';


export default function PagesLayout({children} : {children : React.ReactNode}) {

  return (
    <>  
      <Navbar/>
        <div className='flex flex-row fixed top-0 right-1 gap-1 '>
          <div className='flex bg-slate-500 hover:bg-opacity-40 rounded-lg items-center justify-center px-1 py-0 bg-opacity-20'>
            <ThemeSwitcher/>
          </div>
          <Clock/>
        </div>
        <div>
            {children}
        </div>
    </>
  )
}
