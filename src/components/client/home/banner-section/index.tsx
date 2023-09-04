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
      <div className="py-32 sm:py-0 relative">
        <RightClipPath />
        <div className="grid grid-cols-12 sm:grid-cols-2">
          <div className="">
            <div className="flex flex-col gap-7">
              <h1 className="font-bold tracking-tight text-gray-800 sm:text-4xl lg:text-5xl sm:leading-loose" style={{ lineHeight:'1.2'}}>
              Intégrez <span className="text-primary-900">SwyftPay</span> pour des <span className="text-primary-900">paiements mobiles</span> en ligne avec facilité.
              </h1>
              <div>
                <p className="font-light text-lg text-text-primary">
                SwyftPay simplifie et sécurise les paiements de vos clients à l&apos;échelle mondiale, offrant une expérience transparente pour vos transactions internationales.
                </p>
              </div>

              <div className="pt-3">
                <Button handleClick={(e) => {}}>
                  S&apos;inscrire maintenant
                </Button>
              </div>
            </div>
          </div>
          <div className="relative">
            <CercleClipPath />
            <div className="absolute top-5 -right-10 bottom-9 z-40">
              <Image src={BgHiro} width={520} alt="" />
            </div>
          </div>
        </div>
        <LeftClipPath />
      </div>
    </>
  );
};

export default Banner;
