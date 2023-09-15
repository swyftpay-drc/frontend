"use client";
import React from "react";
import {
  CircleClipPath,
  LeftClipPath,
  RightClipPath,
} from "@/components/ui/clip-path";
import { Button } from "@/components/ui/button";
import BgHiro from "@/assets/images/b.png";
import Image from "next/image";
const Banner = () => {
  return (
    <>
      <div className="sm:py-0 relative mt-16 xl:mt-20">
        <div className="hidden md:flex">
          {" "}
          <RightClipPath />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="w-full">
            <div className="flex flex-col gap-3 md:gap-7">
              <h1
                className="font-bold tracking-tight text-gray-800 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl sm:leading-loose"
                style={{ lineHeight: "1.2" }}
              >
                Intégrez <span className="text-primary-900">SwyftPay</span> pour
                des <span className="text-primary-900">paiements mobiles</span>{" "}
                en ligne avec facilité.
              </h1>
              <div>
                <p className="font-light text-lg text-text-primary">
                  SwyftPay simplifie et sécurise les paiements de vos clients à
                  l&apos;échelle mondiale, offrant une expérience transparente
                  pour vos transactions internationales.
                </p>
              </div>

              <div className="mt-4 md:pt-3">
                <Button handleClick={(e) => {}} variant="contained">
                  S&apos;inscrire maintenant
                </Button>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="hidden md:flex">
              {" "}
              <CircleClipPath />
            </div>
            <div className="absolute top-5 -right-10 xl:-right-24 bottom-9 hidden lg:block z-20">
              <Image src={BgHiro} width={520} alt="banner-img" className="sm:w-3/5 md:w-3/4 xl:w-11/12 opacity-95" />
            </div>
          </div>
        </div>

        <div className="hidden md:flex">
          {" "}
          <LeftClipPath />
        </div>
      </div>
    </>
  );
};

export default Banner;
