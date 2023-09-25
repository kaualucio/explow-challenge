import Image from "next/image";
import Video1 from '../../public/images/Rectangle13.png'
import Play from '../../public/images/Play.svg'

export const HeroVideo = () => {
  return (
    <div className="relative w-full h-full cursor-pointer">
      <div className="animate-hero_bg_videos bg-cover bg-center absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#090D158F] to-[#090D1500]" />
      {/* <Image 
        src={Video1}
        alt=""
      /> */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-b from-black to-[#2F2D2E36]">
        <Image 
          src={Play}
          alt=""
        />
      </div>
    </div>
  )
}
