import { Section } from "@/components/ui/section";
import { ourValues } from "./data";
import { OurValuesCard } from "./ourvalues-card";

const OurValuesTitle: React.FC = () => {
  return (
    <div className="space-y-2.5 text-center md:text-start md:basis-7/12">
      <h2 className="text-[28px] lg:text-[38px] 2xl:text-5xl font-medium">
        Our <span className="text-shades-green-60">Values</span>
      </h2>
      <p className="text-shades-grey-70 text-sm lg:text-base 2xl:text-lg leading-normal font-light">
        At YourBank, our values form the foundation of our organization and guide our actions. We
        believe in upholding the highest standards of integrity, delivering exceptional service, and
        embracing innovation. These values define our culture and shape the way we work together to
        achieve our goals.
      </p>
    </div>
  );
};

const OurValuesContent: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-[50px] lg:gap-[60px] 2xl:gap-20">
      {ourValues.map(({ title, description }) => (
        <OurValuesCard key={title} title={title} description={description} />
      ))}
    </div>
  );
};

export const OurValues: React.FC = () => {
  return (
    <Section className="flex flex-col gap-y-[50px] md:gap-y-[60px] lg:gap-y-20">
      <OurValuesTitle />
      <OurValuesContent />
    </Section>
  );
};
