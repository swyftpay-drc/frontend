import React from "react";
import { BaseContainer } from "@/components/ui/container/BaseContainer";
import Banner from "@/components/front-office/home/banner";
import BannerWave from "@/components/ui/clip-path/waves/Banner";
import Header from "@/components/front-office/layouts/navbar";
import PaymentSection from "@/components/front-office/home/payment";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="bg-primary-400">
        <BaseContainer className="pt-32">
          <Banner />
        </BaseContainer>
      </div>
      <BannerWave />
      <BaseContainer>
        <PaymentSection />
      </BaseContainer>
    </>
  );
};
