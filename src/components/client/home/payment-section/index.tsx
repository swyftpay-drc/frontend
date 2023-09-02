import { children } from "@/types/base";
import SectionTitle from "../../layouts/section-title";
import PaymentCard from "./Card";
import {IconPaint, IconCalendar, IconConfig } from "@/components/ui/icons";

export type PaymentSectionProps = {
  title?: string;
};
const PaymentSection: React.FC<PaymentSectionProps> = ({ title }) => {
  return (
    <div className="h-full">
      <SectionTitle
        title="Solution de passerelle de paiement numérique"
        className="text-center p-2 py-8"
      />
      <p className="mb-5 text-center text-gray-800">
        Lorem ipsum dolor sit amet consectetur. Volutpat consectetur interdum
        tincidunt morbi enim mauris. Laoreet pharetra pharetra elementum
        suspendisse. Id sem molestie iaculis condimentum est malesuada vitae.
        Sagittis neque faucibus feugiat convallis varius.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-24 py-12">
        <PaymentCard
          title="Planification financière détaillée"
          text="Lorem ipsum dolor sit amet cons Volutpat consectetur morbi enim mauris.."
        >
          <IconCalendar/>
        </PaymentCard>

        <PaymentCard
          title="Approche personnalisée"
          text="Lorem ipsum dolor sit amet cons Volutpat consectetur morbi enim mauris.."
        >
          <IconPaint/>
        </PaymentCard>

        <PaymentCard
          title="Gestion de l'investissement"
          text="Lorem ipsum dolor sit amet cons Volutpat consectetur morbi enim mauris.."
        >
          <IconConfig/>
        </PaymentCard>
      </div>
    </div>
  );
};

export default PaymentSection;
