import Image from 'next/image'
import React from 'react'

import NintendoSwitch from '/public/images/nintendo.svg'
import Xbox from '/public/images/xbox.svg'
import Playstation from '/public/images/playstation.svg'
import PC from '/public/images/computer.svg'

export const Platforms = () => {
  return (
    <div className="flex items-center gap-4">
      <Image 
        src={NintendoSwitch}
        alt=""
      />
      <Image 
        src={Xbox}
        alt=""
      />
      <Image 
        src={Playstation}
        alt=""
      />
      <Image 
        src={PC}
        alt=""
      />
    </div>  
  )
}
