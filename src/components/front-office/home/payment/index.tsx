import { children } from "@/types/base"
import SectionTitle from "../../section-title";
import PaymentCard from "./Card";


export type PaymentSectionProps={
    title?: string;
}
const PaymentSection:React.FC<PaymentSectionProps> = ({title}) => {
  return (
    <div className="h-screen">
       <SectionTitle title="Solution de passerelle de paiement numérique" className="text-center"/>
       <p className="mb-5 text-center text-gray-800">Lorem ipsum dolor sit amet consectetur. Volutpat consectetur interdum tincidunt morbi enim mauris. Laoreet pharetra pharetra elementum suspendisse. Id sem molestie iaculis condimentum est malesuada vitae. Sagittis neque faucibus feugiat convallis varius.</p>

       <div className="grid grid-cols-3 gap-24">
         <PaymentCard/>
         <PaymentCard/>
         <PaymentCard/>
       </div>
    </div>
  )
}

export default PaymentSection