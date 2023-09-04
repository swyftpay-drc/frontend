import React from "react";
import { BaseContainer } from "@/components/ui/container/BaseContainer";
import BannerSection from "@/components/client/home/banner-section";
import BannerWave from "@/components/ui/clip-path/waves/Banner";
import Header from "@/components/client/layouts/navbar";
import PaymentSection from "@/components/client/home/payment-section";
import ServiceSection from "./service-section";
import ExperienceSection from "./experience-section";
import TestimonialSection from "./testimonial-section";
import Footer from "../layouts/footer";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="bg-primary-400 pt-1 pb-4">
        <BaseContainer className="pt-14">
          <BannerSection />
        </BaseContainer>
      </div>
      <BannerWave />
      <BaseContainer>
        <PaymentSection />
        <ServiceSection />
      </BaseContainer>
      <ExperienceSection />
      <BaseContainer>
        <TestimonialSection />
      </BaseContainer>
      <Footer />
    </>
  );
};
