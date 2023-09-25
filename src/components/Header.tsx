'use client'

import Image from 'next/image'
import React from 'react'

import Logo from '../../public/images/logo (1).svg'
import Link from 'next/link'
import { CTA } from './CTA'

const NavLinks = [
  {
    label: 'Torneios',
    href: '',
  },
  {
    label: 'Passe de Batalha',
    href: '',
  },
  {
    label: 'V-Bucks',
    href: '',
  },
  {
    label: 'Itens',
    href: '',
  },
]

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
        <nav className="flex items-center gap-11">
          {
            NavLinks.map(link => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="text-lg text-white">
                {link.label}
              </Link>
            ))
          }
        </nav>
        <CTA title="Conheça" />
      </div>
    </header>
  )
}
