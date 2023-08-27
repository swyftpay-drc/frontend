'use client'
import Image from 'next/image'
import React from 'react'
import logo from "@/assets/images/logo.png";

export const Logo = () => {
  return (
    <div>
         <Image src={logo} width={280} alt="" />
    </div>
  )
}
