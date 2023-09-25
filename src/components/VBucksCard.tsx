import React from 'react'
import Image from 'next/image'

interface VBucksCardProps {
  imageUrl: string;
  quantity: string;
  price: string;
}

export const VBucksCard = ({ imageUrl, quantity, price }: VBucksCardProps) => {
  return (
    <div className="sm:col-span-3 lg:col-span-3 lg:max-w-[306px] w-full h-[460px] group overflow-hidden transition-colors cursor-pointer">
      <div className="relative w-full h-full border-x-[10px] border-t-[10px] border-gray-100 flex flex-col gap-7 items-center justify-center bg-gradient-to-b from-[#0866B0] to-[#46CAE9] group-hover:border-[#F5E401] duration-200">
        <Image 
          src={imageUrl}
          alt=""
          width={233}
          height={152}
        />
        <div className="text-center px-10">
          <h3 className="font-burbank text-gray-800 text-5xl">{quantity}</h3>
          <p className="font-burbank text-white text-3xl">V-Bucks</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full flex items-center justify-center ">
          <div className="absolute -left-6 bottom z-50 w-2/5 h-[70px] -skew-x-[25deg] bg-gray-100 group-hover:bg-[#F5E401] duration-200" />
          <div className="w-full h-[55px] bg-gray-100 group-hover:bg-[#F5E401] duration-200"/>
          <h4 className="absolute bottom-0 left-1/2 -translate-x-1/2 font-burbank text-gray-800 text-3xl z-[99] mb-2">{price}BRL</h4>
        </div>  
      </div>
    </div>
  )
}
