'use client'

import Image from 'next/image'
import React from 'react'

import Logo from '../../public/images/logo (1).svg'
import Link from 'next/link'
import { CTA } from './CTA'
import { Webmenu } from './Webmenu'
import { MobileMenu } from './MobileMenu'


export const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-[99] h-24 border-b border-white border-opacity-20 inset-0 bg-transparent flex items-center justify-center">
      <div className="w-full p-4 max-w-[1296px] mx-auto flex items-center justify-between">
        <Link href="/">
          <Image 
            src={Logo}
            alt=""
          />
        </Link>
        <Webmenu />
        <MobileMenu />
        <div className="hidden md:block">
          <CTA title="Conheça" />
        </div>
      </div>
    </header>
  )
}
