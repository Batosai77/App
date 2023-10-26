import Link from 'next/link'
import React from 'react'
import {
    LuHome,
    LuUser,
    LuFolderArchive
            } from 'react-icons/lu'

const iconData = [
    {name:'home', path: '/Home', icon: <LuHome/>},
    {name:'project', path: '/Home/Project', icon: <LuFolderArchive/>},
    {name:'about', path: '/Home/About', icon: <LuUser/>},
]


const Navbar = () => {
    return (
        <>
            <nav >
                <div className='flex items-center md:flex-col justify-center gap-4 fixed bottom-0 md:left-0 w-full md:w-10
                 h-max md:h-screen text-4xl
                 '>
                    <div className="flex md:flex-col bg-gray-500 gap-4 px-4 md:py-4 rounded-full bg-opacity-25 backdrop-blur
                    mb-2 md:ml-10 py-2">
                    {iconData.map((link, index)=> {
                        return (
                            <Link
                            className='bg-gray-800 rounded-full p-2 bg-opacity-10' 
                            href={link.path} 
                            key={index}>
                            {link.icon}
                            </Link>
                            )
                        })}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar