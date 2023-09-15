"use client";

import { BaseContainer } from "@/components/ui/container/BaseContainer";
import Header from "../layouts/navbar";
import Footer from "../layouts/footer";
import { AccordionCustom } from "@/components/ui/accordion";
import BannerSection from "../layouts/banner-section";

export type Props = {
  title?: string;
};

const HowKitWorksSection: React.FC<Props> = (props) => {
  return (
    <>
      <Header />
      <BannerSection
        title="Comment ça marche"
        subTitle=" Transaction - Fonctionnalité - Documentation"
      />
      <div className="h-full w-full py-20">
        <BaseContainer className="">
          <AccordionCustom />
        </BaseContainer>
      </div>
      <Footer />
    </>
  );
};

export default HowKitWorksSection;
