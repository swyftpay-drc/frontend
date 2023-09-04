import Avatar from "@/components/ui/avatar/Avatar";
import SectionTitle from "../../layouts/section-title";
import TestimonialCard from "./Card";
import { IconPaint, IconCalendar, IconConfig } from "@/components/ui/icons";
import Image from "next/image";

export type TestimonialSectionProps = {
  title?: string;
};
const TestimonialSection: React.FC<TestimonialSectionProps> = ({ title }) => {
  return (
    <div className="h-full py-32">
      <div className="flex flex-col gap-3 justify-center items-center">
        <SectionTitle
          title="Ce que nos clients disent de nous"
          className="text-center"
        />
        <p className="font-light text-lg text-text-primary md:w-3/4 text-center">
          Lorem ipsum dolor sit amet consectetur. Volutpat consectetur interdum
          tincidunt morbi enim mauris. Laoreet pharetra pharetra elementum
          suspendisse. Id sem molestie iaculis condimentum est malesuada vitae.
          Sagittis neque faucibus feugiat convallis varius.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-24 py-12">
        <TestimonialCard
          client={{ name: "Rosaire Kota", profession: "Developpeur" }}
          text="Lorem ipsum dolor sit amet consectetur. Volutpat consectetur interdum tincidunt morbi enim mauris. Laoreet pharetra pharetra elementum suspendisse. Id sem molestie iaculis condimentum est malesuada vitae. Sagittis neque faucibus feugiat convallis varius."
        >
          <Avatar src="/docs/images/people/profile-picture-5.jpg" />
        </TestimonialCard>

        <TestimonialCard
          client={{ name: "Benjamin Tondase", profession: "Developpeur" }}
          text="Lorem ipsum dolor sit amet consectetur. Volutpat consectetur interdum tincidunt morbi enim mauris. Laoreet pharetra pharetra elementum suspendisse. Id sem molestie iaculis condimentum est malesuada vitae. Sagittis neque faucibus feugiat convallis varius."
        >
          <Avatar src="/docs/images/people/profile-picture-5.jpg" />
        </TestimonialCard>

        <TestimonialCard
          client={{ name: "Rosaire Kota", profession: "Developpeur" }}
          text="Lorem ipsum dolor sit amet consectetur. Volutpat consectetur interdum tincidunt morbi enim mauris. Laoreet pharetra pharetra elementum suspendisse. Id sem molestie iaculis condimentum est malesuada vitae. Sagittis neque faucibus feugiat convallis varius."
        >
          <Avatar src="/docs/images/people/profile-picture-5.jpg" />
        </TestimonialCard>
      </div>
    </div>
  );
};

export default TestimonialSection;
