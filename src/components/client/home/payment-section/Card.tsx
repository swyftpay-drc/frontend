import { children } from "@/types/base";
import React from "react";
export type Props = {
  children?: children;
  title: string;
  subTitle?: string;
  text: string;
  dataAos?:string
};
const PaymentCard: React.FC<Props> = ({ children, title, subTitle, text ,dataAos}) => {
  return (
    <div className="shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] hover:shadow-2xl hover:shadow-primary-900/20 flex flex-col gap-3 bg-white p-4 rounded-xl py-12 text-center items-center " data-aos={dataAos}>
      <div className="bg-primary-300/20 flex justify-center items-center p-5 rounded-xl">{children}</div>
      <h4 className="text-gray-900 font-bold">{title}</h4>
      <p className="text-gray-800">{text}</p>
    </div>
  );
};

export default PaymentCard;
