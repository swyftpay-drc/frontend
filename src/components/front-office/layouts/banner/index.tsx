"use client";

import { BaseContainer } from "@/components/ui/container/BaseContainer";
import SectionTitle from "../../section-title";
import BannerTitle from "../../section-title/banner-title";

export type Props = {
  title?: string;
};

const BannerPage: React.FC<Props> = (props) => {
  return (
    <>
      <div className="bg-primary-400 pt-7 pb-7">
        <BaseContainer className="flex flex-col text-center items-center">
          <BannerTitle
            title="Comment ça marche"
            className=" text-primary md:leading-tight hover:text-primary-900 duration-300"
            description="Transaction - Fonctionnalité - Documentation"
          />
        </BaseContainer>
      </div>
    </>
  );
};

export default BannerPage;
