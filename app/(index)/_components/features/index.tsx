import { Section } from "@/components/ui/section"

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
}

const FeaturesContent: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-10 2xl:gap-y-[60px]">
      Features Content
    </div>
  );
};

export const Features: React.FC = () => {
  return (
    <Section className="flex flex-col gap-y-[60px] lg:gap-y-20">
      <FeaturesTitle />
      <FeaturesContent />
    </Section>
  )
}
