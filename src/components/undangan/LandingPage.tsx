'use client'
import React from "react";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import decBunga from 'public/decBunga.png';
import bgMesh from'public/background.png';
import Decoration from'public/bgDecoration.png';
import Animate from 'public/animateOrg.png';
import { useState } from 'react';
import {
    EnvelopeOpenIcon,
    EnvelopeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const LandingPage = ({name, children} : {name: string, children:React.ReactNode}) => {
  const [isIconToggled, setIsIconToggled] = useState(false);

  const handleClick = () => {
    setIsIconToggled((prevState) => !prevState);
  };
  const pathName = usePathname();
  const guestName = name.replace(/-/g, ' ');
  const value = useMotionValue(0);
  return (
    <>
    <AnimatePresence >
      <motion.div
        key={'Landing'}
        animate={{
          y: isIconToggled ? '-100%' : '0%',
          opacity: isIconToggled ? 0 : 1,
        }}
        transition={{
          duration:2
        }}
        className="bg-fixed"
        style={{
        backgroundImage:`url(${bgMesh.src})`,
        width:'100vw',
        height:'100vh',
        display:'flex',
        backgroundPosition:'center',
        backgroundSize:'cover',
        }}>
          <div
          className="flex w-full h-screen">
          <div className="w-full justify-center mt-[20%] md:mt-[2%]">
            <div className="font-semibold font-dancing text-center text-2xl md:text-5xl">Weding Invitation</div>
          </div>
          <div className="flex absolute w-full h-[40%] md:h-[50%] justify-center top-32 md:top-20">
            <div className="flex relative w-[60%] md:w-[30%]">
              <Image
                alt="Animasi Orang"
                src={Animate}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                />
            </div>
          </div>
          <div className="flex flex-col absolute w-full bottom-[12%] items-center">
            <div className="flex relative mb-3 font-dancing text-3xl font-semibold">Yoga & Putri</div>
            <div className="flex relative font-mono mb-3 ">Kpd Bpk/Ibu/Saudara/i</div>
            <div className="flex relative font-dancing text-3xl font-semibold mb-3">{guestName}</div>
            <div className="flex relative font-mono mb-3 text-center text-sm">Tanpa mengurangi rasa hormat, kami mengundang anda untuk hadir di acara pernikahan kami.</div>
          </div>
          <div className="flex absolute bottom-[6%] md:bottom-8 items-center justify-center w-full h-max animate animate-bounce">
            <Link onClick={handleClick}
              className="hover:bg-slate-400 hover:bg-opacity-40 rounded-full"
              href={`${pathName}/detail`}>
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
          </div>
          <div className="flex absolute w-full bottom-[1%] justify-center text-center text-sm">* Mohon maaf apabila ada kesalahan penulisan nama/gelar</div>
        </div>
      </motion.div>
    </AnimatePresence>
    </>
  );
};

export default LandingPage;
