
import Image from "next/image";
import decBunga from 'public/decBunga.png';
import bgMesh from'public/bgMesh.png';
import Decoration from'public/bgDecoration.png';

const LandingPage = ({name, children} : {name: string, children:React.ReactNode}) => {
  return (
    <>
      <div className="flex h-screen w-full static">
        <div className="flex relative w-full justify-center">
          <div className="flex absolute h-[100vh] w-full justify-center items-center">
            <Image
            alt="Decoration Image"
            src={Decoration}
            width={500}
            height={500}
            />
          </div>
          <div className="flex absolute h-[100vh] w-full justify-center items-center rotate-180">
            <Image
            alt="Decoration Image"
            src={Decoration}
            width={500}
            height={500}
            />
          </div>
          <div className="flex absolute h-[100vh] w-full justify-center items-center">
            <Image
            alt="Background Landing Page"
            src={bgMesh}
            width={500}
            height={500}
            />
          </div>
          <div className="flex absolute md:inset-x-0 md:items-center md:justify-center">
            <Image
              alt="Gambar Bunga"
              src={decBunga}
              width={500}
              height={500}
            />
          </div>
          <div className="flex absolute md:inset-x-0 md:items-end md:justify-center rotate-180">
            <Image
              alt="Gambar Bunga"
              src={decBunga}
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="flex flex-col absolute justify-center inset-0 m-10">
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-center">The Wedding Of</p>
            <p className="text-center font-bold font-serif text-5xl">Yoga & Putri</p>
            <p className="text-center">Dear</p>
            <p className="text-center font-semibold font-serif text-2xl">{name}</p>
          </div>
        </div>
        <div className="flex absolute w-full justify-center bottom-1/4">
          {children}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
