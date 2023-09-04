import React from "react";
const misssionAndVisions = [
  {
    titile: "Mission",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, repellendus omnis at in eligendi itaque iusto, perferendis eveniet, mollitia laborum quia? Culpa laudantium natus est a nemo? Sapiente, magni dolore.",
  },
  {
    titile: "Vision",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, repellendus omnis at in eligendi itaque iusto, perferendis eveniet, mollitia laborum quia? Culpa laudantium natus est a nemo? Sapiente, magni dolore.",
  },
];
export const MissionVisionSection = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 lg:gap-24 md:py-12 relative -top-32 z-50 bg-white shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] hover:shadow-2xl hover:shadow-primary-900/20 rounded-xl">
      {misssionAndVisions.map((item, index) => (
        <Card
          title={item.titile}
          description={item.description}
          key={index + "_id"}
        />
      ))}
    </div>
  );
};

type CardProps = {
  title: string;
  description: string;
};
export const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-4  p-4  rounded-xl">
      <h2 className="text-gray-800 font-bold text-3xl">{title}</h2>
      <p className="text-text-primary">{description}</p>
    </div>
  );
};
