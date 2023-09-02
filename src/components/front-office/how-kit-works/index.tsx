"use client";

import { BaseContainer } from "@/components/ui/container/BaseContainer";
import Header from "../layouts/navbar";
import Footer from "../layouts/footer";
import BannerPage from "../layouts/banner";
import { AccordionCustomIcon, BaseAccordion } from "@/components/ui/accordion";

export type Props = {
  title?: string;
};

const HowKitWorksSection: React.FC<Props> = (props) => {
  return (
    <>
      <Header />
      <BannerPage />
      <div className="h-full w-full py-32">
        <BaseContainer className="">
          <AccordionCustomIcon />
        </BaseContainer>
      </div>
      <Footer />
    </>
  );
};

export default HowKitWorksSection;
