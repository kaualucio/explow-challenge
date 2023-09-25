import Image from 'next/image'
import React from 'react'

interface TournamentsCard {
  image: any;
  title: string;
  weekDay: string;
}

export const TournamentsCard = ({ image, title, weekDay }: TournamentsCard) => {
  return (
    <div className="col-span-3 lg:col-span-4 overflow-hidden relative w-full h-[586px] flex flex-col justify-end">
      <div className="overflow-visible bg-gradient-to-b h-[50vh] from-[#46CAE9] to-[#0866B0] flex flex-col items-center justify-end">
        <Image 
          src={image}
          alt=""
          className="w-auto h-[100%] object-cover absolute bottom-0"
        />  
      </div>
      <div className="z-[999] w-full h-1/2 absolute bottom-0 left-0 flex flex-col items-center justify-center gap-6 bg-gradient-to-t from-[#090D15] to-[#090D1500] font-burbank text-center px-10">
        <h3 className="uppercase text-5xl text-white tracking-[.4rem] leading-[50px]">{title}</h3>
        <h4 className="uppercase text-4xl text-white tracking-[.4rem]">{weekDay}</h4>
      </div>
    </div>
  )
}
