"use client";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IconPlus } from "@/components/ui/icons";
import ServiceContent from "@/components/client/home/service-section/ServiceContent";

export type IconProps = {
  id?: number;
  className?: string;
  open?: number;
};

const Icon: React.FC<IconProps> = ({ id, open }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

export function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);
  const [alwaysOpen, setAlwaysOpen] = React.useState(true);

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="md:pl-10 md:pr-10 pl-4 pr-4">
        <Accordion open={open === 0} icon={<IconPlus id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            SwyftPay Transaction : comment effectué une transaction ?
          </AccordionHeader>
          <AccordionBody>
            <div className="flex flex-col gap-6">
              <ServiceContent
                title="S’inscrire"
                text="A ce stade, vous devez remplir le formulaire en fournissant toutes les informations qui vous sont demandées."
              />
              <ServiceContent
                title="Validez votre compte"
                text="Après la création de votre compte, SwyftPay se chargera de son activation sans laquelle vous ne pouvez effectuer aucune opération. Dans le cadre de cette activation, le système contrôlera toutes les informations que vous avez fournies lors de la création de votre compte pour s’assurer de leur effectivité. Il y va de votre sécurité et de celle de vos futurs partenaires, veuillez donc fournir des informations légales et correctes."
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
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<IconPlus id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            SwyftPay Transaction : comment effectué une transaction ?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<IconPlus id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            SwyftPay Transaction : comment effectué une transaction ?
          </AccordionHeader>
          <AccordionBody>
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
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} icon={<IconPlus id={4} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(4)}>
            SwyftPay Transaction : comment effectué une transaction ?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
}
