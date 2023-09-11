import React from "react";
export type Props = {
  id?: number;
  className?: string;
  open?: number|boolean;
};
export const IconPlus: React.FC<Props> = ({ className, id, open }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className={`${className} text-primary-900 ${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        fill="currentColor"
        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm1.062 4.312a1 1 0 1 0-2 0v2.75h-2.75a1 1 0 0 0 0 2h2.75v2.75a1 1 0 1 0 2 0v-2.75h2.75a1 1 0 1 0 0-2h-2.75Z"
      />
    </svg>
  );
};
