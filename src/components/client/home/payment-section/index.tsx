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
        La solution de passerelle de paiement numérique de Swyftpay constitue le
        socle de notre plateforme fintech, facilitant des transactions en ligne
        sécurisées et efficaces pour les entreprises et les particuliers. Elle
        offre une variété de méthodes de paiement, une gestion en temps réel des
        transactions et une intégration aisée pour une expérience de paiement
        optimale.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-24 py-12">
        <PaymentCard
          title="Planification financière détaillée"
          text="Lorem ipsum dolor sit amet cons Volutpat consectetur morbi enim mauris.."
          dataAos="fade-right"
        >
          <IconCalendar />
        </PaymentCard>

        <PaymentCard
          title="Approche personnalisée"
          text="Lorem ipsum dolor sit amet cons Volutpat consectetur morbi enim mauris.."
          dataAos="fade-up"
        >
          <IconPaint />
        </PaymentCard>

        <PaymentCard
          title="Gestion de l'investissement"
          text="Lorem ipsum dolor sit amet cons Volutpat consectetur morbi enim mauris.."
          dataAos="fade-left"
        >
          <IconConfig />
        </PaymentCard>
      </div>
    </div>
  );
};

export default PaymentSection;
