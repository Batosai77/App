'use client'
import { useState } from 'react';
import {
    EnvelopeOpenIcon,
    EnvelopeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ButtonOpenPage = () => {
  const [isIconToggled, setIsIconToggled] = useState(false);

  const handleClick = () => {
    setIsIconToggled((prevState) => !prevState);
  };

  return (
    <>
        <Link onClick={handleClick}
        className="hover:bg-slate-400 hover:bg-opacity-40 rounded-full"
        href={'#'}>
          <div className={`flex h-max w-max rounded-xl justify-between items-center p-1 ${isIconToggled ? 'bg-rose-300' : 'bg-rose-300 bg-opacity-40'}`}>
              {isIconToggled ? (
              <EnvelopeOpenIcon className="h-8" />
              ) : (
              <EnvelopeIcon className="h-8" />
              )}
              <span>
                  Open Invitation
              </span>
          </div>
      </Link>
    </>
  );
};

export default ButtonOpenPage;
