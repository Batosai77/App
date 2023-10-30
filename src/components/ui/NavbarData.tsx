import { ChatBubbleOvalLeftEllipsisIcon,
     FolderIcon, 
     HomeIcon, 
     UserCircleIcon } from '@heroicons/react/24/outline'

export const iconData = [
    {name:'home', path: '/Home', icon: <HomeIcon className='h-10'/>},
    {name:'project', path: '/Project', icon: <FolderIcon className='h-10'/>},
    {name:'about', path: '/About', icon: <UserCircleIcon className='h-10'/>},
    {name:'message', path: '/Message', icon: <ChatBubbleOvalLeftEllipsisIcon className='h-10'/>},

]


