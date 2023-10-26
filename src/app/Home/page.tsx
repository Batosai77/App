import Link from 'next/link'
import React from 'react'
import {
    LuHome,
    LuUser,
    LuFolderArchive
            } from 'react-icons/lu'

const iconData = [
    {name:'home', path: '/Home', icon: <LuHome/>},
    {name:'project', path: '/Project', icon: <LuFolderArchive/>},
    {name:'about', path: '/About', icon: <LuUser/>},
]


const Home = () => {
    return (
        <>
            <nav >
                <div className='flex items-center md:flex-col justify-center gap-4 fixed bottom-0 md:left-0 w-full md:w-10
                 h-max md:h-screen
                 bg-slate-400'>
                    {iconData.map((link, index)=> {
                        return (
                            <Link href={link.path} key={index}>{link.icon}</Link>
                        )
                    })}
                </div>
            </nav>
        </>
    )
}

export default Home