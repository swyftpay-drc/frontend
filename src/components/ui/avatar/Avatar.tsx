import Image, {StaticImageData} from "next/image";
import React from "react";
export type Props = {
  subTitle?: string;
  className?: string;
  src:  StaticImageData;
};
const Avatar: React.FC<Props> = ({ src, className }) => {
  return (
    <Image
      className={"rounded-full bg-primary-800/20 h-14 w-14 object-cover"}
      src={src}
      width={100}
      height={20}
      alt="Rounded avatar"
    />
  );
};

export default Avatar;
