'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import decBunga from 'public/decBunga.png';
import bgMesh from'public/background.png';
import Decoration from'public/bgDecoration.png';
import Animate from 'public/animateOrg.png';


const LandingPage = ({name, children} : {name: string, children:React.ReactNode}) => {
  const guestName = name.replace(/-/g, ' ');
  return (
    <>
      <div className="bg-fixed"
            style={{
            backgroundImage:`url(${bgMesh.src})`,
            width:'100vw',
            height:'100vh',
            display:'flex',
            backgroundPosition:'center',
            backgroundSize:'cover',
            }}>
              <div className="flex w-full h-screen">
                <div className="w-full justify-center mt-[20%] md:mt-[2%]">
                  <motion.div className="font-semibold font-dancing text-center text-2xl md:text-5xl"
                              transition={{ type: "spring", stiffness: 100 }}>Weding Invitation
                  </motion.div>
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
                  {children}
                </div>
                <div className="flex absolute w-full bottom-[1%] justify-center text-center text-sm">* Mohon maaf apabila ada kesalahan penulisan nama/gelar</div>
              </div>
      </div>
    </>
  );
};

export default LandingPage;
