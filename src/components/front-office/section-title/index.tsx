import { children } from "@/types/base";

export type SectionTitleProps = {
  title?: string;
  children?: children;
  className?: string
};
const SectionTitle: React.FC<SectionTitleProps> = ({ children, title,  className }) => {
  return (
    <div>
      <h2 className={`text-4xl text-primary-900 font-bold p-2 py-8 ${className}`}> {title}</h2>
      {children}
    </div>
  );
};

export default SectionTitle;
