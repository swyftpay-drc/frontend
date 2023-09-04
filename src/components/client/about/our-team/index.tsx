import React from 'react'
import SectionTitle from '../../layouts/section-title'
import { children } from '@/types/base'
import teamImg from "@/assets/images/team.png"
import Image from 'next/image';

const Ourteams = [
    {
      name: "Patient Utshidi",
      role: 'Project Manager',
      imageUrl:teamImg,
    },
    {
        name: "Rosaire Kota",
        role: 'Project Manager',
        imageUrl:teamImg,
    },
    {
        name: "Rosaire Kota",
        role: 'Project Manager',
        imageUrl:teamImg,
    },
    {
        name: "Rosaire Kota",
        role: 'Project Manager',
        imageUrl:teamImg,
    },
    {
        name: "Rosaire Kota",
        role: 'Project Manager',
        imageUrl:teamImg,
    },
  ];
const OurTeam = () => {
  return (
    <div className='py-32 '>
     <SectionTitle title='Notre équipe' className='text-center'/>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-6 lg:gap-24 py-12">
      {Ourteams.map((item, index) => (
        <CardTeam name={item.name} key={index + "_id"} role={item.role}>
          <Image src={item.imageUrl} width={1000} alt={item.name+'_uuid'}/>
        </CardTeam>
      ))}
    </div>
    </div>
  )
}

export default OurTeam


export type Props = {
    children?: children;
    name: string;
    role: string;
  };
  const CardTeam: React.FC<Props> = ({ children, name, role }) => {
    return (
      <div className="flex gap-3 flex-col">
        <div className="rounded-xl">
          {children}
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <h6 className="text-text-primary font-bold text-xl">{name}</h6>
          <p className="text-text-primary font-light">{role}</p>
        </div>
      </div>
    );
  };

  