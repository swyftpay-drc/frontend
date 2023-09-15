"use client";
import React from "react";
import SectionTitle from "@/components/client/layouts/section-title";
import ServiceImg from "@/assets/images/service.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BaseContainer } from "@/components/ui/container/BaseContainer";
import BgHiro from "@/assets/images/b.png";

export type ExperienceSectionProps = {
  title?: string;
};
const ExperienceSection: React.FC<ExperienceSectionProps> = (props) => {
  return (
    <div className="w-full py-12 md:py-32 bg-gradient-to-l from-primary-800/80 to-primary-900 h-full" >
      <BaseContainer className="flex items-center">
      <div className="flex justify-between">
        <div data-aos="fade-right" className="flex-1 flex flex-col gap-12">
        <SectionTitle
            title="Faites l'expérience de paiements sans faille avec notre application, téléchargez-la dès maintenant !"
            className=" text-white md:leading-tight"
          />
         <div>
         <Button handleClick={(e) => {}} variant="outlined" className="text-white border-2 border-white">
          S’inscrire maintenant
          </Button>
         </div>
        </div>

        <div  data-aos="fade-left">
          <Image src={BgHiro} width={520} alt="" className="opacity-25"/>
          
        </div>
      </div>
      </BaseContainer>
    </div>
  );
};

export default ExperienceSection;
