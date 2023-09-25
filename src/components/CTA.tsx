'use client'

import React from 'react'

interface CTAProps {
  title: string;
}

export const CTA = ({ title }: CTAProps) => {
  return (
    <button className="max-w-fit group px-3 py-2 bg-[#FEFF04] font-burbank tracking-[.2rem] hover:bg-[#F5E401]">
      <div className="px-7 group-hover:-skew-x-12 group-hover:bg-[#FEFF04]">
        <span className="inline-block group-hover:skew-x-12 text-transparent text-3xl bg-clip-text bg-gradient-to-r from-[#21294C] to-[#36426C] ">
          {title}
        </span>
      </div>
    </button>
  )
}
