import { Section } from "@/components/ui/section";

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
  return <div className="flex flex-col lg:flex-row gap-5 2xl:gap-[30px]">FAQS Content</div>;
};

export const FAQS: React.FC = () => {
  return (
    <Section className="flex flex-col gap-y-[60px] lg:gap-y-20">
      <FaqsTitle />
      <FaqsContent />
    </Section>
  );
};
