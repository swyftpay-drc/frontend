import React from 'react'
import { IconRight } from "@/components/ui/icons";
import { children } from "@/types/base";
export type Props = {
  children?: children;
  title: string;
  subTitle?: string;
  text: string;
};
const ServiceContent :React.FC<Props> = ({children, title, subTitle, text}) => {
  return (
    <div className="flex gap-3">
     <span>
      <IconRight className='rounded-full border-2 border-primary-900 h-8 w-8 text-white' color='#291FB3' />
    </span>
    <div className="flex flex-col gap-2">
      <h6 className="font-bold text-gray-900 text-lg">
        {title}
      </h6>
      <p className="text-text-primary">
        { text }
      </p>
    </div>
  </div>
  )
}

export default ServiceContent