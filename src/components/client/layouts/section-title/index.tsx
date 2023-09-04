import { children } from "@/types/base";

export type SectionTitleProps = {
  title?: string;
  children?: children;
  className?: string;
};
const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  title,
  className,
}) => {
  return (
    <div>
      <h2
        className={`text-3xl pt-8 pb-3 text-primary-900 font-bold ${className}`}
      >
        {" "}
        {title}
      </h2>
      {children}
    </div>
  );
};

export default SectionTitle;
