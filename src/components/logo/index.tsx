'use client'
import Image from 'next/image'
import React from 'react'
import logo from "@/assets/images/logo.png";

export type Props = {
  className?: string;
  width?: number;
};
export const Logo:React.FC<Props> = ({width, className}) => {
  const getWidth = width!==0 && width!== undefined? width: 280
  return (
    <div>
         <Image src={logo} width={getWidth} alt="" className={className}/>
    </div>
  )
}
