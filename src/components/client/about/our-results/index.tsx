import { IconCalendar } from "@/components/ui/icons";
import { children } from "@/types/base";
import React from "react";
const results = [
  {
    title: "Pays",
    result: 5,
    icon: <IconCalendar />,
  },
  {
    title: "Utilisateurs",
    result: 115,
    icon: <IconCalendar />,
  },
  {
    title: "Services",
    result: 5,
    icon: <IconCalendar />,
  },
  {
    title: "Team",
    result: 10,
    icon: <IconCalendar />,
  },
];
export const OurResults = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-6 lg:gap-24 py-12">
      {results.map((item, index) => (
        <CardResult title={item.title} key={index + "_id"} result={item.result}>
          {item.icon}
        </CardResult>
      ))}
    </div>
  );
};

export type Props = {
  children?: children;
  title: string;
  result?: number;
};
const CardResult: React.FC<Props> = ({ children, title, result }) => {
  return (
    <div className="flex gap-3">
      <div className="bg-primary-300/20 flex justify-center items-center p-3 rounded-xl">
        {children}
      </div>
      <div className="flex flex-col gap-2 justify-center">
        <h6 className="text-text-primary font-bold text-xl">{title}</h6>
        <p className="text-text-primary font-bold text-4xl">{result}+</p>
      </div>
    </div>
  );
};

export default CardResult;
