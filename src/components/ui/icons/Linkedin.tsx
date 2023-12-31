import React from "react";
export type Props = {
  className?: string;
};
export const IconLinkedin: React.FC<Props> = ({ className }) => {
  return (
    <>
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
      >
        <path
          d="M23.675 21.25C23.6747 21.9131 23.4109 22.5488 22.9419 23.0174C22.4728 23.486 21.8368 23.7491 21.1737 23.7488C20.5107 23.7484 19.8749 23.4847 19.4063 23.0157C18.9377 22.5466 18.6747 21.9106 18.675 21.2475C18.6753 20.5845 18.939 19.9487 19.4081 19.4801C19.8772 19.0115 20.5132 18.7484 21.1762 18.7488C21.8393 18.7491 22.475 19.0128 22.9436 19.4819C23.4122 19.951 23.6753 20.587 23.675 21.25ZM23.75 25.6H18.75V41.25H23.75V25.6ZM31.65 25.6H26.675V41.25H31.6V33.0375C31.6 28.4625 37.5625 28.0375 37.5625 33.0375V41.25H42.5V31.3375C42.5 23.625 33.675 23.9125 31.6 27.7L31.65 25.6Z"
          fill="black"
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
