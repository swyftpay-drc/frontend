
import Avatar from "@/components/ui/avatar/Avatar";
import SectionTitle from "../../layouts/section-title";
import TestimonialCard from "./Card";
import avatar from "@/assets/images/rkota.jpeg";

export type TestimonialSectionProps = {
  title?: string;
};
const TestimonialSection: React.FC<TestimonialSectionProps> = ({ title }) => {
  return (
    <div className="h-full  py-12 md:py-32">
      <SectionTitle
        title="Ce que nos clients disent de nous"
        className="text-center p-2 py-8"
      />
      <p className="mb-5 text-center text-gray-800">
      Découvrez les avis de nos clients, la voix la plus crédible de notre entreprise. Leurs retours nous aident à nous améliorer continuellement et témoignent de notre engagement à offrir des solutions financières exceptionnelles. Nous sommes fiers de partager leurs expériences positives, car elles renforcent notre réputation en tant que partenaire financier de confiance.
      </p>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 xl:gap-24 py-12" data-aos="fade-up">
        <TestimonialCard
          client={{ name: "Rosaire Kota", profession: "Developpeur" }}
          text="Cette plateforme a transformé la gestion de mes finances. Son interface conviviale et ses fonctionnalités puissantes m'ont permis de suivre et de gérer efficacement toutes mes transactions en un seul endroit. Une solution vraiment indispensable."
        >
          <Avatar src={avatar} />
        </TestimonialCard>

        <TestimonialCard
          client={{ name: "Benjamin Tondase", profession: "Entrepreneur" }}
          text="J'ai cherché pendant longtemps une solution pour centraliser mes investissements en ligne. Cette plateforme offre une intégration fluide avec diverses institutions financières, facilitant la gestion de mon portefeuille. Je la recommande vivement ."
        >
          <Avatar src={avatar} />
        </TestimonialCard>

        <TestimonialCard
          client={{ name: "Rosaire Kota", profession: "Developpeur" }}
          text="J'ai cherché pendant longtemps une solution pour centraliser mes investissements en ligne. Cette plateforme offre une intégration fluide avec diverses institutions financières, facilitant la gestion de mon portefeuille. Je la recommande vivement ."
        >
          <Avatar src={avatar} />
        </TestimonialCard>
      </div>
    </div>
  );
};

export default TestimonialSection;
