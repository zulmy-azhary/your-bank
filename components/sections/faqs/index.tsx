import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { HiMiniChevronDown } from "react-icons/hi2";
import { faqs } from "./data";
import { FaqCard } from "./faq-card";

const FaqsTitle: React.FC = () => {
  return (
    <div className="space-y-2.5 text-center md:text-start md:basis-7/12">
      <h2 className="text-[28px] lg:text-[38px] 2xl:text-5xl font-medium">
        <span className="text-shades-green-60">Frequently</span> Asked Questions
      </h2>
      <p className="text-shades-grey-70 text-sm lg:text-base 2xl:text-lg leading-normal font-light">
        Still you have any questions? Contact our Team via support@yourbank.com
      </p>
    </div>
  );
};

const FaqsContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center relative after:absolute after:inset-x-0 after:h-1/3 after:bottom-0 after:bg-gradient-to-t after:from-shades-grey-10 after:from-25% md:after:from-50% after:to-transparent after:pointer-events-none">
      <div className="w-full grid md:grid-cols-2 md:grid-rows-2 gap-5 lg:gap-[30px]">
        {faqs.map(({ question, answer }) => (
          <FaqCard key={question} question={question} answer={answer} />
        ))}
      </div>
      <Button variant="secondary" className="flex items-center gap-x-1 z-10">
        Load All FAQ&apos;s <HiMiniChevronDown className="size-6" />
      </Button>
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
