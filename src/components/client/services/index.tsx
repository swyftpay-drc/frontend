"use client";

import { BaseContainer } from "@/components/ui/container/BaseContainer";
import Header from "../layouts/navbar";
import Footer from "../layouts/footer";
import BannerSection from "../layouts/banner-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import BgHiro from "@/assets/images/Carte.jpg";
import Flux from "@/assets/images/Flux.jpg";
import ServiceCards from "./servicesCards";
import {
  IconBilling,
  IconCreditCard,
  IconPayment,
  IconPlanning,
  IconSecure,
  IconTransaction,
  IconWallet,
} from "@/components/ui/icons";

export type Props = {
  title?: string;
};

const ServicesSection: React.FC<Props> = (props) => {
  return (
    <>
      <Header />
      <BannerSection
        title="Services"
        subTitle="Sécurité - Fiabilité - Efficacité"
      />
      <div className="h-full w-full py-10">
        <BaseContainer>
          <div className="block lg:flex lg:justify-between">
            <div className="w-full">
              <h3
                className={`w-full text-2xl sm:text-xl md:text-2xl text-primary-900 font-bold`}
              >
                Paiement en toute transparence
              </h3>
              <p className="my-4 font-light text-lg text-text-primary">
                <span className="text-primary-900 font-bold">SwyftPay</span>{" "}
                permet aux utilisateurs d{"'"}effectuer des paiements en douceur
                et en toute sécurité.
              </p>
              <p className="my-4 font-light text-lg text-text-primary">
                Lorem ipsum dolor sit amet consectetur. Volutpat consectetur
                interdum tincidunt morbi enim mauris. Laoreet pharetra pharetra
                elementum suspendisse. Id sem molestie iaculis condimentum est
                malesuada vitae. Sagittis neque faucibus feugiat convallis
                varius.
              </p>
              <div className="hidden lg:block">
                <Button handleClick={(e) => {}} variant="outlined">
                  S{"'"}inscrire maintenant
                </Button>
              </div>
            </div>
            <div className="py-10 w-full lg:w-10/12">
              <Image
                src={BgHiro}
                className="w-full lg:w-4/5 float-none lg:float-right"
                alt=""
              />
            </div>
            <div className="block md:hidden">
              <Button handleClick={(e) => {}} variant="outlined">
                S{"'"}inscrire maintenant
              </Button>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="py-10 w-full lg:w-2/4">
              <Image
                src={Flux}
                className="w-full float-none lg:float-right"
                alt=""
              />
            </div>
            <div className="w-full lg:w-2/4 lg:pl-16">
              <h3
                className={`w-full text-2xl mt-10 sm:text-xl md:text-2xl text-primary-900 font-bold`}
              >
                Nous nous efforçons d{"'"}offrir une expérience inégalée
              </h3>
              <p className="my-4 font-light text-lg text-text-primary">
                Lorem ipsum dolor sit amet consectetur. Volutpat consectetur
                interdum tincidunt morbi enim mauris. Laoreet pharetra pharetra
                elementum suspendisse. Id sem molestie iaculis condimentum est
                malesuada vitae. Sagittis neque faucibus feugiat convallis
                varius.
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-6 md:flex-row ">
              <ServiceCards
                title="Transactions en temps réel"
                text="SwyftPay permet de suivre les transactions en temps réel."
              >
                <IconTransaction />
              </ServiceCards>
              <ServiceCards
                title="Paiement multiple"
                text="SwyftPay prend en charge plusieurs méthodes de paiement, y compris les cartes de crédit."
              >
                <IconPayment />
              </ServiceCards>
              <ServiceCards
                title="Transaction sécurisée"
                text="SwyftPay utilise des mesures de sécurité robustes."
              >
                <IconSecure />
              </ServiceCards>
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:py-10">
              <ServiceCards
                title="Carte de crédit virtuelle"
                text="Lorem ipsum dolor sit amet cons Volutpat consectetur morbi enim mauris.."
              >
                <IconCreditCard />
              </ServiceCards>
              <ServiceCards
                title="Portefeuille numérique intégré"
                text="Lorem ipsum dolor sit amet cons Volutpat consectetur morbi enim mauris.."
              >
                <IconWallet />
              </ServiceCards>
              <ServiceCards
                title="Facturation récurrente"
                text="SwyftPay offre des fonctions permettant de mettre en place des paiements récurrents."
              >
                <IconBilling />
              </ServiceCards>
            </div>
          </div>
        </BaseContainer>
      </div>
      <Footer />
    </>
  );
};

export default ServicesSection;
