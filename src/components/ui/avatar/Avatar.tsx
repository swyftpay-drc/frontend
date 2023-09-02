import Image from "next/image";
import React from "react";
export type Props = {
  subTitle?: string;
  className?: string;
  src: string;
};
const Avatar: React.FC<Props> = ({ src, className }) => {
  return (
    <Image
      className={"w-20 h-20 rounded-full bg-primary-800/20"}
      src={src}
      width={100}
      height={20}
      alt="Rounded avatar"
    />
  );
};

export default Avatar;
