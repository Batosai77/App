import { ChatBubbleOvalLeftEllipsisIcon,
     FolderIcon, 
     HomeIcon, 
     UserCircleIcon } from '@heroicons/react/24/outline'

export const iconData = [
    {name:'Home', path: '/Home', icon: <HomeIcon className='h-10'/>},
    {name:'Project', path: '/Project', icon: <FolderIcon className='h-10'/>},
    {name:'About', path: '/About', icon: <UserCircleIcon className='h-10'/>},
    {name:'Contact', path: '/Contact', icon: <ChatBubbleOvalLeftEllipsisIcon className='h-10'/>},

]


