
import React from "react";
export type Props ={
    className?: string
    color?:string|'#291FB3'
}
export const IconPlay:React.FC<Props> = ({className, color}) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.6667 28.3334L25 20.0001L16.6667 11.6667V28.3334Z"
        fill={color}
      />
    </svg>
  );
};

