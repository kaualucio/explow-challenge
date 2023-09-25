import Image from 'next/image'
import React from 'react'

interface SectionTitleProps {
  bgImageUrl: string;
  title: string;
}

export const SectionTitle = ({bgImageUrl, title}: SectionTitleProps) => {
  return (
    <div className="relative w-full h-[300px] px-5 flex items-center">
      <h2 className="relative mt-16 z-[99] uppercase font-burbank text-8xl tracking-[.6rem] text-transparent bg-clip-text bg-gradient-to-b from-[#0866B0] to-[#46CAE9]">{title}</h2>
      <Image 
        src={bgImageUrl}
        alt=""
        className="absolute top-1/2 -translate-y-1/2 left-0 p-5"
      />
    </div>
  )
}
