import { BaseContainer } from "@/components/ui/container/BaseContainer";
import Banner from "@/components/front-office/home/banner";
import BannerWave from "@/components/ui/clip-path/waves/Banner";
import Header from "@/components/front-office/layouts/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="bg-primary-400">
      <BaseContainer className="pt-32">
        <Banner />
      </BaseContainer>
      </div>
      <BannerWave/>
      <BaseContainer >
      </BaseContainer>
    
    
    </main>
  );
}
