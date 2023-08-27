"use client";
import React, { ReactNode, useState } from "react";
export type variant = "contained" | "outlined" | "gradient" | "text";
export type size = "sm" | "md" | "lg";
export type color = "white";
export type fullWidth = boolean;
export type ripple = boolean;
export type className = string;
export type children = ReactNode;

export interface Props {
  handleClick: (e: any) => void;
  title?: string;
  variant?: variant;
  size?: size;
  color?: color;
  fullWidth?: fullWidth;
  ripple?: ripple;
  className?: className;
  children: children;
}
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
        className={`flex gap-2 items-center justify-center bg-primary-900 py-3 px-8  font-semibold min-w-[150px] rounded-full shadow-md disabled:focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 duration-300 ${className} ${getVariant()}`}
      >
        {children}
        {title}
      </button>
    </>
  );
};
