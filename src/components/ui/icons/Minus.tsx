import React from "react";

export type Props = {
    id?: number;
    className?: string;
    open?: number | boolean;
};

export const MinusIcon: React.FC<Props> = ({className, id, open}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"

             className={`${className} text-primary-900 ${
                 id === open ? "rotate-180" : ""
             } h-6 w-6 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>

    );
};