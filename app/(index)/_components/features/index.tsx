import { Section } from "@/components/ui/section";
import { FeaturesCard } from "./features-card";
import { FeaturesTabs } from "./features-tabs";
import { features } from "./data";
import { Reveal } from "@/components/utils/reveal";

const FeaturesTitle: React.FC = () => {
  return (
    <div className="space-y-2.5 text-center md:text-start md:basis-7/12">
      <Reveal wrapperClassName="w-full">
        <h2 className="text-[28px] lg:text-[38px] 2xl:text-5xl font-medium">
          Our <span className="text-shades-green-60">Features</span>
        </h2>
      </Reveal>
      <Reveal delay={0.35}>
        <p className="text-shades-grey-70 text-sm lg:text-base 2xl:text-lg leading-normal font-light">
          Experience a host of powerful features at YourBank, including seamless online banking,
          secure transactions, and personalized financial insights, all designed to enhance your
          banking experience
        </p>
      </Reveal>
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
        {features.map(({ title, description }, idx) => {
          const delay = (idx + 1) * 0.25;

          return (
            <Reveal key={title} delay={delay}>
              <FeaturesCard idx={delay} title={title} description={description} />
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};

export const Features: React.FC = () => {
  return (
    <Section className="flex flex-col gap-y-[50px] md:gap-y-[60px] lg:gap-y-20">
      <FeaturesTitle />
      <FeaturesContent />
    </Section>
  );
};
