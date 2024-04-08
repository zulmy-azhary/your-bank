import { Section } from "@/components/ui/section";
import { benefits } from "./data";
import { BenefitCard } from "./benefit-card";

const BenefitsTitle: React.FC = () => {
  return (
    <div className="space-y-2.5 text-center md:text-start md:basis-7/12">
      <h2 className="text-[28px] lg:text-[38px] 2xl:text-5xl font-medium">
        Our <span className="text-shades-green-60">Benefits</span>
      </h2>
      <p className="text-shades-grey-70 text-sm lg:text-base 2xl:text-lg leading-normal font-light">
        At YourBank, we value our employees and are dedicated to their well-being and success. We
        offer a comprehensive range of benefits designed to support their personal and professional
        growth.
      </p>
    </div>
  );
};

const BenefitsContent: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-[30px] 2xl:gap-[50px]">
      {benefits.map((benefit) => (
        <BenefitCard
          key={benefit.title}
          icon={benefit.icon}
          title={benefit.title}
          description={benefit.description}
        />
      ))}
    </div>
  );
};

export const Benefits: React.FC = () => {
  return (
    <Section className="flex flex-col gap-y-[50px] md:gap-y-[60px] lg:gap-y-20">
      <BenefitsTitle />
      <BenefitsContent />
    </Section>
  );
};
