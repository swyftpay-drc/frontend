"use client";
import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import {IconPlus} from "@/components/ui/icons";
import ServiceContent from "@/components/client/home/service-section/ServiceContent";
import {CustomAccordion} from "@/components/ui/accordion/CustomAccordion";

export type IconProps = {
    id?: number;
    className?: string;
    open?: number;
};

const Icon: React.FC<IconProps> = ({id, open}) => {
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

export const AccordionCustom = () => {
    const [open, setOpen] = React.useState(0);
    const [alwaysOpen, setAlwaysOpen] = React.useState(true);

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);

    const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

    return (
        <>
            <div className="md:pl-10 md:pr-10 pl-4 pr-4">
                <CustomAccordion
                    title="SwyftPay Transaction : comment effectué une transaction ?"
                    content="Contenu de la section 1..."
                    defaultOpen={true} // Ouvrir le premier accordéon par défaut
                >
                    <ServiceContent
                        title="S’inscrire"
                        text="A ce stade, vous devez remplir le formulaire en fournissant toutes les informations qui vous sont demandées."
                    />
                </CustomAccordion>
                <CustomAccordion
                    title="SwyftPay Transaction : comment effectué une transaction ?"
                    content="Contenu de la section 1..."

                >
                    <ServiceContent
                        title="Validez votre compte"
                        text="Après la création de votre compte, SwyftPay se chargera de son activation sans laquelle vous ne pouvez effectuer aucune opération. Dans le cadre de cette activation, le système contrôlera toutes les informations que vous avez fournies lors de la création de votre compte pour s’assurer de leur effectivité. Il y va de votre sécurité et de celle de vos futurs partenaires, veuillez donc fournir des informations légales et correctes."
                    />
                </CustomAccordion>

                <CustomAccordion
                    title="SwyftPay Transaction : comment effectué une transaction ?"
                    content="Contenu de la section 1..."

                >
                    <ServiceContent
                        title="Validez votre compte"
                        text="Après la création de votre compte, SwyftPay se chargera de son activation sans laquelle vous ne pouvez effectuer aucune opération. Dans le cadre de cette activation, le système contrôlera toutes les informations que vous avez fournies lors de la création de votre compte pour s’assurer de leur effectivité. Il y va de votre sécurité et de celle de vos futurs partenaires, veuillez donc fournir des informations légales et correctes."
                    />
                </CustomAccordion>
                <CustomAccordion
                    title="SwyftPay Transaction : comment effectué une transaction ?"
                    content="Contenu de la section 1..."

                >
                    <ServiceContent
                        title="Validez votre compte"
                        text="Après la création de votre compte, SwyftPay se chargera de son activation sans laquelle vous ne pouvez effectuer aucune opération. Dans le cadre de cette activation, le système contrôlera toutes les informations que vous avez fournies lors de la création de votre compte pour s’assurer de leur effectivité. Il y va de votre sécurité et de celle de vos futurs partenaires, veuillez donc fournir des informations légales et correctes."
                    />
                </CustomAccordion>

            </div>
        </>
    );
}
