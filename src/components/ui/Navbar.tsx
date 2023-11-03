import { ChatBubbleOvalLeftEllipsisIcon,
     FolderIcon, 
     HomeIcon, 
     UserCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'



export const iconData = [
    {name:'Home', path: '/Home', icon: <HomeIcon className='h-10'/>},
    {name:'Project', path: '/Project', icon: <FolderIcon className='h-10'/>},
    {name:'About', path: '/About', icon: <UserCircleIcon className='h-10'/>},
    {name:'Contact', path: '/Contact', icon: <ChatBubbleOvalLeftEllipsisIcon className='h-10'/>},

]

const Navbar = () => {
  const pathname = usePathname();
  const navbar = iconData.map((link, index) => {
    return (
      <Link
      className={`hover:bg-slate-500 hover:bg-opacity-40 rounded-lg ${pathname === link.path ? 'bg-slate-500 bg-opacity-40' : ''} p-[2px] group`}
      href={link.path}
      key={index}
      >
        <div className='absolute hidden md:group-hover:flex ml-11 p-2'>
          <div className='item-center justify-center px-2 rounded-sm bg-slate-500/20 font-serif' >{link.name}</div>
        </div>
        <div>{link.icon}</div>
      </Link>
    )})
  return (
    <nav>
        <div className='flex w-full md:w-max h-max md:h-screen fixed md:left-1 bottom-0 items-center bg-opacity-50'>
            <div className='flex md:flex-col h-max w-full md:w-max justify-between items-center px-2 py-1 md:py-2 md:gap-4 md:m-1 bg-slate-500 md:rounded-xl bg-opacity-20'
            >{navbar}
            </div>
        </div>
    </nav>
    )
}

export default Navbar;