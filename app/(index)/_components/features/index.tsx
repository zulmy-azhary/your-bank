import { Section } from "@/components/ui/section";
import { FeaturesCard } from "./features-card";
import { FeaturesTabs } from "./features-tabs";
import { features } from "./data";

const FeaturesTitle: React.FC = () => {
  return (
    <div className="space-y-2.5 text-center md:text-start md:basis-7/12">
      <h2 className="text-[28px] lg:text-[38px] 2xl:text-5xl font-medium">
        Our <span className="text-shades-green-60">Features</span>
      </h2>
      <p className="text-shades-grey-70 text-sm lg:text-base 2xl:text-lg leading-normal font-light">
        Experience a host of powerful features at YourBank, including seamless online banking,
        secure transactions, and personalized financial insights, all designed to enhance your
        banking experience
      </p>
    </div>
  );
};

const FeaturesContent: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 2xl:gap-[30px]">
      <div className="basis-1/4 overflow-x-hidden">
        <FeaturesTabs />
      </div>
      <div className="basis-3/4 grid md:grid-cols-2 md:grid-rows-2 gap-5 2xl:gap-[30px]">
        {features.map(({ title, description }) => (
          <FeaturesCard key={title} title={title} description={description} />
        ))}
      </div>
    </div>
  );
};

export const Features: React.FC = () => {
  return (
    <Section className="flex flex-col gap-y-[60px] lg:gap-y-20">
      <FeaturesTitle />
      <FeaturesContent />
    </Section>
  );
};
