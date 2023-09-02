'use client'
import { children } from '@/types/base'
import React, { useState } from 'react'

export interface IFooterMenus{
    name: string,
    path: string
}
export type FooterProps ={
    children?: children,
    menus:IFooterMenus
}
const Footer = ({children}) => {
const [menus, setMenus] = useState<IFooterMenus>([] as unknown as IFooterMenus)
  return (
    <>
    <div className="bg-[url('/img/hero-pattern.svg')]">

    </div>

    </>
  )
}

export default Footer