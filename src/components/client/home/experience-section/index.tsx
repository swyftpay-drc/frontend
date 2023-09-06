"use client";
import React from "react";
import SectionTitle from "@/components/client/layouts/section-title";
import ServiceImg from "@/assets/images/service.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BaseContainer } from "@/components/ui/container/BaseContainer";

export type ExperienceSectionProps = {
  title?: string;
};
const ExperienceSection: React.FC<ExperienceSectionProps> = (props) => {
  return (
    <div className="w-full py-12 md:py-32 bg-gradient-to-l from-primary-800/80 to-primary-900 h-full" >
      <BaseContainer className="flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 relative gap-4" data-aos="fade-up">
        <div>
        <SectionTitle
            title="Faites l'expérience de paiements sans faille avec notre application, téléchargez-la dès maintenant !"
            className=" text-white md:leading-tight"
          />
        </div>

        <div className="md:absolute md:right-0 md:top-8">
          <Button handleClick={(e) => {}} variant="outlined" className="text-white border-2 border-white">
          S’inscrire maintenant
          </Button>
        </div>
      </div>
      </BaseContainer>
    </div>
  );
};

export default ExperienceSection;
