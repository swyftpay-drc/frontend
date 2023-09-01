"use client";
import { IButton} from "@/types/base";
import React, { ReactNode, useState } from "react";

export type Props = IButton
export const Button: React.FC<Props> = ({
  handleClick,
  title,
  children,
  fullWidth,
  variant,
  className
}) => {
  const getVariant =()=>{
    if (variant==='contained') {
      return 'bg-primary-900'
    }
    else if(variant === 'outlined') {
      return 'border-2 border-primary-900 text-primary-900 hover:bg-primary-900 bg-transparent hover:text-white';
    }
    return 'bg-primary-900 hover:bg-primary-800 text-white'
  }
  return (
    <>
      <button
        onClick={handleClick}
        className={`flex gap-2 items-center justify-center bg-primary-900 py-3 px-8  font-semibold min-w-[150px] rounded-full shadow-md disabled:focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 duration-300 ${className} ${getVariant()} shadow-primary-900/50`}
      >
        {children}
        {title}
      </button>
    </>
  );
};
