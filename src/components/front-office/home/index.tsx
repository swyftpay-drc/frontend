import React from "react";
import { BaseContainer } from "@/components/ui/container/BaseContainer";
import BannerSection from "@/components/front-office/home/banner-section";
import BannerWave from "@/components/ui/clip-path/waves/Banner";
import Header from "@/components/front-office/layouts/navbar";
import PaymentSection from "@/components/front-office/home/payment-section";
import ServiceSection from "./service-section";
import ExperienceSection from "./experience-section";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="bg-primary-400">
        <BaseContainer className="pt-32">
          <BannerSection />
        </BaseContainer>
      </div>
      <BannerWave />
      <BaseContainer>
        <PaymentSection />
        <ServiceSection />
      </BaseContainer>
      <ExperienceSection/>
    </>
  );
};
