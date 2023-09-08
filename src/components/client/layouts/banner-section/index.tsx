import { BaseContainer } from "@/components/ui/container/BaseContainer";
import { children } from "@/types/base";
import React from "react";

export type Props = {
  children?: children;
  title: string;
  subTitle: string;
};
const BannerSection: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <>
      <div className="w-full bg-primary-400 pb-10 pt-9 md:pb-18 md:pt-12 lg:pb-18 lg:pt-12">
        <BaseContainer className="flex justify-center items-center">
          <div className="flex flex-col gap-2 md:gap-6 items-center">
            <h1 className="text-2xl md:text-4xl text-primary-900 font-bold">
              {title}
            </h1>
            <h2 className="text-text-primary text-lg text-center sm:pb-2">
              {subTitle}
            </h2>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default BannerSection;
