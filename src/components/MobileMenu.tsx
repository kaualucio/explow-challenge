'use client'
import Image from 'next/image'
import React, { useState } from 'react'

import Menu from '../../public/images/menu.svg'
import X from '../../public/images/x.svg'
import { NavLinks } from './Webmenu'
import Link from 'next/link'
import { isJsxOpeningElement } from 'typescript'


export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="">
      {
        !isOpen 
        ? (
          <button onClick={() => setIsOpen(true)} className="md:hidden p-2 rounded-sm bg-[#FEFF04] transition-colors duration-200 hover:bg-yellow-400 text-white relative z-[99999]">
            <Image 
              src={Menu}
              alt="Menu Mobile Open"
            />
          </button>
        )
        : (
          <button onClick={() => setIsOpen(false)} className="md:hidden p-2 rounded-sm bg-[#FEFF04] transition-colors duration-200 hover:bg-yellow-400 text-white relative z-[99999]">
            <Image 
              src={X}
              alt="Menu Mobile Close"
            />
          </button>
        )
      }
      {
        isOpen ? (
          <div className="">
            <div className="w-full h-screen overflow-hidden bg-black bg-opacity-50 fixed top-0 left-0 z-[9999]"/>
            <div className="absolute top-24 left-0 z-[99999] w-full bg-white flex flex-col">
              {
                NavLinks.map(link => (
                  <Link 
                    key={link.label} 
                    href={link.href} 
                    className="inline-block h-fit p-5 bg-gray-100 text-lg text-gray-800">
                    {link.label}
                  </Link>
                ))
              }
            </div>
          </div>
        )
        : null
      }
    </nav>
  )
}
