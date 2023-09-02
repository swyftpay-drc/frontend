import React from "react";
import { children } from "@/types/base";
import { IClient } from "@/types/client";

export type Props = {
  children?: children;
  client:IClient ;
  subTitle?: string;
  text: string;
};
const TestimonialCard: React.FC<Props> = ({
  children,
  client,
  subTitle,
  text,
}) => {
  return (
    <div className="shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] hover:shadow-2xl hover:shadow-primary-900/20 flex flex-col gap-3 bg-white p-6 py-4 rounded-xl text-left">
      <p className="text-gray-800 w-full">{text}</p>
      <div className="flex gap-4">
        <div className="rounded-full">{children}</div>
       <div className="flex flex-col justify-center">
       <h4 className="text-gray-900 font-bold">{client.name}</h4>
        <h6>{client.profession}</h6>
       </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
