'use client'
import React, {useState} from 'react';
import {children} from "@/types/base";
import {IconMinus, IconPlus} from "@/components/ui/icons";

export type Props = {
    className?: string;
    title: string,
    content: string,
    defaultOpen?: boolean
    children?: children
};
export const CustomAccordion: React.FC<Props> = ({title, content, defaultOpen, children}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`w-full border transition-transform duration-500 ease-in-out my-3 rounded-2xl ${ isOpen?'bg-white/90 border-0 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] mb-12':'bg-transparent'}  `}>
            <button
                onClick={toggleAccordion}
                className="w-full flex justify-between items-center px-4 py-2 focus:outline-none"
            >
                <span className="text-text-primary font-bold xl:text-2xl text-left ">{title}</span>
                <span className="transition-transform transform duration-500">
          {isOpen ? (
              <IconMinus id={1} open={isOpen} className='text-primary-900 transition-transform duration-200 ease-in-out motion-reduce:transition-none'/>
          ) : (
              <IconPlus id={1} open={isOpen} className='text-primary-900 transition-transform duration-200 ease-in-out motion-reduce:transition-none'/>
          )}
        </span>
            </button>
            <div
                className={`p-4 transition-transform duration-200 ease-in-out motion-reduce:transition-none ${
                    isOpen ? 'block' : 'hidden'
                }`}

            >
                {children}
            </div>
        </div>
    );
}
