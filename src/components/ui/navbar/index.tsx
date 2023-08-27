'use client'
import { BaseContainer } from '@/components/container/BaseContainer'
import { Button } from "../button";
import Link from 'next/link'
import { useState } from 'react'
import { Logo } from '@/components/logo';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
   <div className='w-full bg-tertiary-color'>
    <div className='w-full py-4 flex flex-col md:flex-row md:items-center justify-between mx-auto max-w-7xl px-4 sm:px-0'>
        <div>
          <Logo/>
        </div>
        <div className='flex gap-6'>
          <Link href={''} className='font-medium hover:text-primary-color duration-300'>Comment ça marche</Link>
          <Link href={''} className='font-medium hover:text-primary-color duration-300'>A propos</Link>
          <Link href={''} className='font-medium hover:text-primary-color duration-300'>Services</Link>
          <Link href={''} className='font-medium hover:text-primary-color duration-300'>Développeurs</Link>
          <Link href={''} className='font-medium hover:text-primary-color duration-300'>Contact</Link>
        </div>
        <div className='flex gap-3'>
        <Button handleClick={(e) => {}} variant='outlined'>Connexion</Button>
        <Button handleClick={(e) => {}}>Inscription</Button>
        </div>
    </div>
   </div>
  )
}
