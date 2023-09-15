import { children } from "@/types/base";

export type SectionTitleProps = {
  title?: string;
  children?: children;
  className?: string
  dataAos?:string
};
const SectionTitle: React.FC<SectionTitleProps> = ({ children, title,  className, dataAos }) => {
  return (
    <div data-aos={dataAos}>
      <h2 className={`text-2xl sm:text-3xl md:text-4xl text-primary-900 font-bold ${className}`}> {title}</h2>
      {children}
    </div>
  );
};

export default SectionTitle;
