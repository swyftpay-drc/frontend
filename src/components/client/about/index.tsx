import React from 'react'
import { children } from '@/types/base'
import BannerSection from '../layouts/banner-section'
import Header from '../layouts/navbar'
import BannerWave from '@/components/ui/clip-path/waves/Banner'
import { MissionVisionSection } from './missio-vision-section'
import { BaseContainer } from '@/components/ui/container/BaseContainer'
import { OurResults } from './our-results'
import OurTeam from './our-team'
import Footer from '@/components/client/layouts/footer'
import PartnersSection from '../partners-section'
export type Props ={
    chidren?: children
}
const About:React.FC<Props> = () => {
  return (
    <>
       <Header />
      <BannerSection title='Qui sommes-nous ?' subTitle='Vision - Mission - Team'/>
      <BaseContainer className='py-12 relative'>
      <MissionVisionSection/>
      <OurResults/>
      </BaseContainer>
      <div className='w-full bg-primary-800/5'>
      <BaseContainer>
      <OurTeam/>
      </BaseContainer>
      </div>
      <PartnersSection/>
      <Footer/>
    </>
  )
}

export default About