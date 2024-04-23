import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { HiMiniChevronDown } from "react-icons/hi2";
import { faqs } from "./data";
import { FaqCard } from "./faq-card";
import { Reveal } from "@/components/utils/reveal";

const FaqsTitle: React.FC = () => {
  return (
    <div className="space-y-2.5 text-center md:text-start md:basis-7/12">
      <Reveal wrapperClassName="w-full">
        <h2 className="text-[28px] lg:text-[38px] 2xl:text-5xl font-medium">
          <span className="text-shades-green-60">Frequently</span> Asked Questions
        </h2>
      </Reveal>
      <Reveal delay={0.35}>
        <p className="text-shades-grey-70 text-sm lg:text-base 2xl:text-lg leading-normal font-light">
          Still you have any questions? Contact our Team via support@yourbank.com
        </p>
      </Reveal>
    </div>
  );
};

const FaqsContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center relative after:absolute after:inset-x-0 after:h-1/3 after:bottom-0 after:bg-gradient-to-t after:from-shades-grey-10 after:from-25% md:after:from-50% after:to-transparent after:pointer-events-none">
      <div className="w-full grid md:grid-cols-2 md:grid-rows-2 gap-5 lg:gap-[30px]">
        {faqs.map(({ question, answer }, idx) => (
          <Reveal key={question} delay={(idx + 1) * 0.25} className="h-full">
            <FaqCard question={question} answer={answer} />
          </Reveal>
        ))}
      </div>
      <Reveal wrapperClassName="z-10">
        <Button variant="secondary" className="flex items-center gap-x-1">
          Load All FAQ&apos;s <HiMiniChevronDown className="size-6" />
        </Button>
      </Reveal>
    </div>
  );
};

export const FAQS: React.FC = () => {
  return (
    <Section className="flex flex-col gap-y-[50px] md:gap-y-[60px] lg:gap-y-20">
      <FaqsTitle />
      <FaqsContent />
    </Section>
  );
};
