import { BaseContainer } from "@/components/ui/container/BaseContainer";
import { BaseAccordion as Accordion } from "@/components/ui/accordion";
import Banner from "@/components/ui/banner";
import BannerWave from "@/components/ui/clip-path/waves/Banner";
import Header from "@/components/ui/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div  className="bg-tertiary-color">
      <BaseContainer className="pt-32">
        <Banner />
      </BaseContainer>
      </div>
      <BannerWave/>
      <BaseContainer >
      <Accordion />
      </BaseContainer>
    
    
    </main>
  );
}
