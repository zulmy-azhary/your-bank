import { Section } from "@/components/ui/section";
import { Container } from "./container";
import { useCases } from "./data";
import { Reveal } from "@/components/utils/reveal";

const UseCasesTitle: React.FC = () => {
  return (
    <div className="space-y-2.5 text-center md:text-start md:basis-7/12">
      <Reveal wrapperClassName="w-full">
        <h2 className="text-[28px] lg:text-[38px] 2xl:text-5xl font-medium text-shades-green-60">
          Use Cases
        </h2>
      </Reveal>
      <Reveal delay={0.35}>
        <p className="text-shades-grey-70 text-sm lg:text-base 2xl:text-lg leading-normal font-light">
          Discover a range of comprehensive and customizable banking products at YourBank, designed to
          suit your unique financial needs and aspirations
        </p>
      </Reveal>
    </div>
  );
};

const UseCasesContent: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-10 2xl:gap-y-[60px]">
      {useCases.map(({ title, description, metrics, cards }) => (
        <Container
          key={title}
          title={title}
          description={description}
          metrics={metrics}
          cards={cards}
        />
      ))}
    </div>
  );
};

export const UseCases: React.FC = () => {
  return (
    <Section className="flex flex-col gap-y-[60px] lg:gap-y-20">
      <UseCasesTitle />
      <UseCasesContent />
    </Section>
  );
};
