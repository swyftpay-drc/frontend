import React from 'react'
import { children } from '@/types/base'
import BannerSection from '../layouts/banner-section'
import Header from '../layouts/navbar'
import BannerWave from '@/components/ui/clip-path/waves/Banner'
import { MissionVisionSection } from './missio-vision-section'
import { BaseContainer } from '@/components/ui/container/BaseContainer'
import { OurResults } from './our-results'
import OurTeam from './our-team'
export type Props ={
    chidren?: children
}
const About:React.FC<Props> = () => {
  return (
    <>
       <Header />
      <BannerSection title='Qui sommes-nous ?' subTitle='Vision - Mission - Team'/>
      <BaseContainer className='py-12'>
      <MissionVisionSection/>
      <OurResults/>
      <OurTeam/>
      </BaseContainer>
    </>
  )
}

export default About