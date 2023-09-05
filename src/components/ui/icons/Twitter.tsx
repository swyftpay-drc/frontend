import React from "react";
export type Props = {
  className?: string;
};
export const IconTwitter: React.FC<Props> = ({ className }) => {
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
          d="M43.075 22.5C42.1125 22.9375 41.075 23.225 40 23.3625C41.1 22.7 41.95 21.65 42.35 20.3875C41.3125 21.0125 40.1625 21.45 38.95 21.7C37.9625 20.625 36.575 20 35 20C32.0625 20 29.6625 22.4 29.6625 25.3625C29.6625 25.7875 29.7125 26.2 29.8 26.5875C25.35 26.3625 21.3875 24.225 18.75 20.9875C18.2875 21.775 18.025 22.7 18.025 23.675C18.025 25.5375 18.9625 27.1875 20.4125 28.125C19.525 28.125 18.7 27.875 17.975 27.5V27.5375C17.975 30.1375 19.825 32.3125 22.275 32.8C21.4884 33.0153 20.6626 33.0452 19.8625 32.8875C20.202 33.9531 20.8669 34.8855 21.7638 35.5537C22.6606 36.2218 23.7443 36.5921 24.8625 36.6125C22.967 38.1131 20.6175 38.9241 18.2 38.9125C17.775 38.9125 17.35 38.8875 16.925 38.8375C19.3 40.3625 22.125 41.25 25.15 41.25C35 41.25 40.4125 33.075 40.4125 25.9875C40.4125 25.75 40.4125 25.525 40.4 25.2875C41.45 24.5375 42.35 23.5875 43.075 22.5Z"
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
