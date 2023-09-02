import React from 'react'
import { children } from '@/types/base'
export type Props ={
    chidren?: children
}
const About:React.FC<Props> = () => {
  return (
    <div>About</div>
  )
}

export default About