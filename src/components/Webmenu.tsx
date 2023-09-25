'use client'
import Link from 'next/link'
import React from 'react'

export const NavLinks = [
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

export const Webmenu = () => {
  return (
    <nav className="hidden md:flex items-center gap-11">
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
  )
}
