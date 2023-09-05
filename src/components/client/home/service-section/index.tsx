"use client";
import React from "react";
import SectionTitle from "@/components/client/layouts/section-title";
import ServiceImg from "@/assets/images/service.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ServiceContent from "./ServiceContent";

export type ServiceSectionProps = {
  title?: string;
};
const ServiceSection: React.FC<ServiceSectionProps> = (props) => {
  return (
    <div className="h-full w-full py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
          <Image src={ServiceImg} alt="test" className="w-auto" />
        </div>
        <div className="flex flex-col gap-6 md:gap-12">
          <SectionTitle
            title="Solution de passerelle de paiement numérique"
            className="py-0 px-0"
          />

          <div className="flex flex-col gap-6">
            <ServiceContent
              title="Paiement en toute transparence"
              text="SwyftPay permet aux utilisateurs d'effectuer des
              paiements en douceur et en toute sécurité."
            />
            <ServiceContent
              title="Transactions en temps réel"
              text="SwyftPay permet de suivre les transactions en temps réel."
            />
            <ServiceContent
              title="Paiement multiple"
              text="SwyftPay prend en charge plusieurs méthodes de paiement, y compris les cartes de crédit."
            />
            <ServiceContent
              title="Transaction sécurisée"
              text="SwyftPay utilise des mesures de sécurité robustes."
            />
          </div>
          <div>
            <Button handleClick={(e) => {}} variant="outlined">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
