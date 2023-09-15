import React from "react";
import { IconRight } from "@/components/ui/icons";
import { children } from "@/types/base";
export type Props = {
  children?: children;
  title: string;
  text: string;
};
const ServiceCards: React.FC<Props> = ({ children, title, text }) => {
  return (
    <div className="w-full flex flex flex-col text-center items-center gap-3 p-5 ">
      <div className="bg-primary-300/20 flex justify-center items-center p-5 rounded-xl">
        {children}
      </div>
      <div className="flex flex-col gap-2">
        <h6 className="font-bold text-gray-900 md:text-lg">{title}</h6>
        <p className="text-text-primary align-center">{text}</p>
      </div>
    </div>
  );
};

export default ServiceCards;
