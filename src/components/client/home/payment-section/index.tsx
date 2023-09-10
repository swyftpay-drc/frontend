import { children } from "@/types/base";
import SectionTitle from "../../layouts/section-title";
import PaymentCard from "./Card";
import { IconPaint, IconCalendar, IconConfig } from "@/components/ui/icons";

export type PaymentSectionProps = {
  title?: string;
};
const PaymentSection: React.FC<PaymentSectionProps> = ({ title }) => {
  return (
    <div className="h-full">
      <SectionTitle
        title="Solution de passerelle de paiement numérique"
        className="text-center p-2 py-8"
        dataAos="fade-up"
      />
      <p className="mb-5 text-center text-gray-800" data-aos="fade-up">
        Notre solution de passerelle de paiement numérique offre une méthode
        sécurisée et fluide pour traiter les transactions en ligne. Elle
        simplifie le processus de paiement pour vos clients et garantit la
        sécurité de vos transactions électroniques..
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-8 xl:gap-24 py-12">
        <PaymentCard
          title="Planification financière détaillée"
          text="Nous élaborons des plans financiers complets, adaptés à vos besoins spécifiques pour vous guider vers l'indépendance financière."
          dataAos="fade-right"
        >
          <IconCalendar />
        </PaymentCard>

        <PaymentCard
          title="Approche personnalisée"
          text="Chaque client bénéficie d'une approche sur mesure. Nous considérons votre situation financière unique pour vous offrir des solutions adaptées à vos objectifs."
          dataAos="fade-up"
        >
          <IconPaint />
        </PaymentCard>

        <PaymentCard
          title="Gestion de l'investissement"
          text="Notre équipe expérimentée gère stratégiquement vos investissements, maximisant ainsi les rendements et minimisant les risques."
          dataAos="fade-left"
        >
          <IconConfig />
        </PaymentCard>
      </div>
    </div>
  );
};

export default PaymentSection;
