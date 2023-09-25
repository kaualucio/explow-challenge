import Image from 'next/image'
import React from 'react'

import Personagem from '../../public/images/Blob (2).svg'

interface SkinCardProps {
  imageUrl: string
  charName: string;
  season: string;
}

export const SkinCard = ({imageUrl, charName, season}: SkinCardProps) => {
  return (
    <div className="sm:col-span-3 lg:col-span-3 relative overflow-visible w-full lg:max-w-[306px] mx-auto h-[570px] group">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0866B0] to-[#46CAE9]"/>
        <div className="relative w-full h-full  bg-transparent flex flex-col items-end">
          <Image
            src={imageUrl}
            alt=""
            className="z-[999] w-auto h-[100%] object-cover absolute bottom-0 left-1/2 -translate-x-1/2 scale-1 duration-300 group-hover:h-[110%]"
          />
      </div>
      <div className="overflow-hidden bg-gradient-to-t from-[#090D15] to-[#090D1500] text-white px-6 z-[999] w-full h-1/2 flex flex-col justify-center gap-4  absolute bottom-0 left-0 ">
        <div className="transition duration-500 translate-y-[500px] group-hover:translate-y-[0]">
          <h3 className="text-5xl font-burbank uppercase">{charName}</h3>
          <p className="text-2xl">{season}</p>
        </div>
      </div>
    </div>
  )
}
