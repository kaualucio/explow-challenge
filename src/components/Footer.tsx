import Image from 'next/image'
import React from 'react'

import LogoEpic from '../../public/images/epic.svg'
import Youtube from '../../public/images/youtube.svg'
import Twitter from '../../public/images/twitter.svg'
import Facebook from '../../public/images/facebook.svg'
import Explow from '../../public/images/Powered by.svg'

export const Footer = () => {
  return (
    <footer className="px-[72px] py-14 bg-white">
      <div className="w-full max-w-[1296px] mx-auto flex flex-col justify-between">
        <div className="flex items-center justify-between flex-col md:flex-row gap-10">
          <Image
            src={LogoEpic}
            alt=""
          />
          <div className="flex items-center gap-[18px]">
            <p>Acompanhe nas redes</p>
            <div className="flex items-center gap-[18px]">
              <Image
                src={Facebook}
                alt="Facebook"
              />
              <Image
                src={Twitter}
                alt="Twitter"
              />
              <Image
                src={Youtube}
                alt="Youtube"
              />
            </div>
          </div>
        </div>
        <div className="my-10 w-full h-[1px] bg-gray-100" />
        <div className="flex items-center justify-between flex-col md:flex-row gap-10"> 
          <p className="md:max-w-[870px] md:text-left text-center">Partes dos materiais utilizados são marcas registradas e/ou obras protegidas por direitos autorais da Epic Games, Inc. Todos os direitos reservados pela Epic. Este material não é oficial e não é endossado pela Epic.</p>
          <Image 
            src={Explow}
            alt="Explow"
          />
        </div>
      </div>
    </footer>
  )
}
