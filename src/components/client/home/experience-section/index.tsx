"use client";
import React from "react";
import SectionTitle from "@/components/client/layouts/section-title";
import ServiceImg from "@/assets/images/service.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BaseContainer } from "@/components/ui/container/BaseContainer";
import BgHiro from "@/assets/images/b.png";
import choiceWave from "@/assets/images/choice-wave.svg";
import choiceMan from "@/assets/images/choice-man.png";
import { IconConfig, IconRight } from "@/components/ui/icons";
import { CircleWave } from "@/components/ui/clip-path/waves/CircleWave";

export type ExperienceSectionProps = {
  title?: string;
};
const ExperienceSection: React.FC<ExperienceSectionProps> = (props) => {
  const renderSubTitleSection = (title: string) => {
    return (
      <div className="flex gap-3">
        <h4 className="text-white font-bold text-2xl">{title}</h4>
      </div>
    );
  };
  return (
    <div className="w-full py-12 md:py-24 bg-primary-900 h-full text-white/95">
      <SectionTitle
        title="Pourquoi nous faire confiance ?"
        className="pb-32 px-0 text-white text-center"
      />
      <BaseContainer className="flex items-center">
        <section className="grid grid-cols-3 gap-32">
          <div className="grid grid-rows-2 gap-16">
            <div className="flex flex-col gap-6">
              {renderSubTitleSection("Crédibilité")}
              <p>
                Swyftpay est reconnu comme une plateforme fintech crédible,
                régulée et respectée, garantissant un environnement financier
                fiable pour nos utilisateurs.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {renderSubTitleSection("Sécurité")}

              <p>
                Swyftpay assure la sécurité de vos transactions et données
                financières grâce à des protocoles de protection de pointe.
              </p>
            </div>
          </div>
          <div className="relative flex w-[450px] h-full">
            <div>
              <Image
                src={choiceMan}
                className="w-full h-full rounded-full absolute right-16 opacity-80"
                alt=""
              />
            </div>
          </div>
          <div className="grid grid-rows-2 gap-16">
            <div className="flex flex-col gap-6">
              {renderSubTitleSection("Transparence")}
              <p>
                Nous sommes déterminés à vous fournir des informations claires
                sur nos tarifs, politiques et opérations pour que vous puissiez
                prendre des décisions éclairées en toute confiance..
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {renderSubTitleSection("Valeur")}
              <p>
                Nos frais sont les plus bas du secteur, ce qui vous permet de
                bénéficier d&apos;une valeur maximale pour un coût minimal.
              </p>
            </div>
          </div>
        </section>
      </BaseContainer>
    </div>
  );
};

export default ExperienceSection;
