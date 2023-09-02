import React from "react";
export type Props = {
  className?: string;
};
export const IconFacebook: React.FC<Props> = ({ className }) => {
  return (
    <>
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.4975 41.875H31.4975V31.8625H36.0025L36.4975 26.8875H31.4975V24.375C31.4975 24.0435 31.6292 23.7255 31.8636 23.4911C32.098 23.2567 32.416 23.125 32.7475 23.125H36.4975V18.125H32.7475C31.0899 18.125 29.5002 18.7835 28.3281 19.9556C27.156 21.1277 26.4975 22.7174 26.4975 24.375V26.8875H23.9975L23.5025 31.8625H26.4975V41.875Z"
          fill="#1B1B1C"
          fill-opacity="0.6"
        />
        <rect
          x="1"
          y="1"
          width="58"
          height="58"
          rx="29"
          stroke="#1B1B1C"
          stroke-opacity="0.6"
          stroke-width="2"
        />
      </svg>
    </>
  );
};
