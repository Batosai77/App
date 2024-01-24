'use client'
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

const LandingPage = ({children} : {children : React.ReactNode}) => {

    return (
      <>
        <div>
          {children}
          <div className='flex flex-col h-screen w-full justify-center items-center'>
            <div className='animate-textColor bg-gradient-to-l
            from-green-500 via-emerald-500 to-teal-600 text-transparent bg-clip-text 
            text-5xl font-semibold font-serif'>
              <TypeAnimation 
              preRenderFirstString={false}
              sequence={[
                "W", 100,
                "WE", 100,
                "WELC", 100,
                "WELCO", 100,
                "WELCOM", 100,
                "WELCOME", 100,
                "WELCOM", 100,
                "WELCO", 100,
                "WELC", 100,
                "WE", 100,
                "W", 100,
                "", 100,
              ]}
              speed={1}
              repeat={Infinity}/>
            </div>
            <Link 
            className= 'flex items-center justify-between text-white bg-slate-500 mt-4 p-2 rounded-full animate-bounce bg-opacity-20'
            href={'/Home'}> Get Started <ArrowRightIcon className='w-6 h-6'/>
            </Link>
          </div>
        </div>
      </>
    )
}
export default LandingPage;