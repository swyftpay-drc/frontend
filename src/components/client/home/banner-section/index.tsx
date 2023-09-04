"use client";
import React from "react";
import {
  CercleClipPath,
  LeftClipPath,
  RightClipPath,
} from "@/components/ui/clip-path";
import { Button } from "@/components/ui/button";
import BgHiro from "@/assets/images/b.png";
import Image from "next/image";
const Banner = () => {
  return (
    <>
      <div className="sm:py-0 relative">
        <RightClipPath />
        <div className="grid md:grid-cols-2 sm:grid-cols-2">
          <div className="">
            <div className="flex flex-col gap-7">
              <h1 className="md:text-5xl font-bold tracking-tight text-gray-800 sm:text-5xl md:leading-tight ">
                Intégrer les
                <span className="text-primary-900"> paiements mobiles</span> sur
                votre plateforme en ligne grâce à
                <span className="text-primary-900"> SwyftPay</span>
              </h1>
              <div>
                <p className="font-light text-lg text-text-primary">
                  SwyftPay est la solution simple et sécurisée pour faire payer
                  vos clients partout dans le monde
                </p>
              </div>

              <div className="pt-3">
                <Button handleClick={(e) => {}} variant="outlined">
                  S&apos;inscrire maintenant
                </Button>
              </div>
            </div>
          </div>
          <div className="relative">
            {/* <CercleClipPath /> */}
            <div className="absolute top-2 -right-5 bottom-9 z-40">
              <Image src={BgHiro} width={500} height={387} alt="" />
            </div>
          </div>
        </div>
        <LeftClipPath />
      </div>
    </>
  );
};

export default Banner;
