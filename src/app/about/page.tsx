import React from 'react'
import { children } from '@/types/base'
import About from '@/components/client/about'

export type Props ={
    chidren?: children
}
const AboutPage:React.FC<Props> = () => {
  return (
    <main className="min-h-screen bg-white">
    <About/>
    </main>
  )
}

export default AboutPage