import { IconCalendar, IconGlobe, IconSettings, IconTeam } from "@/components/ui/icons";
import { IconUser } from "@/components/ui/icons/user";
import { children } from "@/types/base";
import React from "react";
const results = [
  {
    title: "Pays",
    result: 5,
    icon: <IconGlobe />,
  },
  {
    title: "Utilisateurs",
    result: 115,
    icon: <IconUser />,
  },
  {
    title: "Services",
    result: 5,
    icon: <IconSettings />,
  },
  {
    title: "Team",
    result: 10,
    icon: <IconTeam />,
  },
];
export const OurResults = () => {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-6 lg:gap-24 py-12">
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
    <div className="flex gap-2 md:gap-6">
      <div className="bg-primary-300/20 flex justify-center items-center py-3 px-4 rounded-xl">
        {children}
      </div>
      <div className="flex flex-col gap-2 justify-center">
        <h6 className="text-text-primary font-bold md:text-xl">{title}</h6>
        <p className="text-text-primary font-bold md:text-4xl">{result}+</p>
      </div>
    </div>
  );
};

export default CardResult;
