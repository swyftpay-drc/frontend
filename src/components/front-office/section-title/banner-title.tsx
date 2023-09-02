import { children } from "@/types/base";

export type BannerTitleProps = {
  title?: string;
  children?: children;
  className?: string;
  description?: string;
};
const BannerTitle: React.FC<BannerTitleProps> = ({
  children,
  title,
  className,
  description,
}) => {
  return (
    <div className="flex flex-col text-center items-center">
      <div>
        <h2
          className={`text-center mt-4 text-3xl text-primary-900 font-bold ${className}`}
        >
          {title}
        </h2>
        <p className={`text-center mt-1`}>{description}</p>
      </div>
    </div>
  );
};

export default BannerTitle;
