import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/utils/reveal";
import { cn } from "@/lib/utils";
import Image from "next/image";

const CallToActionContent: React.FC = () => {
  return (
    <div className="space-y-3.5 text-center xl:text-start z-0">
      <Reveal delay={0.35} wrapperClassName="w-full">
        <h2 className="text-2xl md:text-[26px] lg:text-[40px] lg:leading-normal">
          Start your financial journey with{" "}
          <span className="text-shades-green-60">YourBank today!</span>
        </h2>
      </Reveal>
      <Reveal delay={0.45}>
        <p className="text-shades-grey-70 text-sm lg:text-lg 2xl:text-lg leading-normal font-light">
          Ready to take control of your finances? Join YourBank now, and let us help you achieve your
          financial goals with our tailored solutions and exceptional customer service
        </p>
      </Reveal>
    </div>
  );
};

export const CallToAction: React.FC = () => {
  return (
    <Reveal wrapperClassName="w-full">
      <Section
        className={cn(
          "flex flex-col xl:flex-row items-center xl:justify-between gap-y-6 xl:gap-x-[150px] p-[30px] md:p-[60px] 2xl:p-20 bg-shades-grey-11",
          "relative bg-clip-padding border border-transparent rounded-[20px]",
          "before:absolute before:inset-0 before:-z-[1] before:rounded-[inherit] before:bg-gradient-150 before:from-shades-green-60/20 before:from-20% before:via-transparent before:via-60% before:to-transparent before:-m-px",
          "after:absolute after:inset-0 after:-z-[2] after:rounded-[inherit] after:bg-shades-grey-15 after:-m-px"
        )}
      >
        <Image
          width={32}
          height={32}
          sizes="auto"
          className="absolute top-0 left-0 w-36 md:w-44 lg:w-48 2xl:w-64 pointer-events-none"
          src="/assets/abstract-3.svg"
          alt="Abstract Image 3"
          priority
        />
        <CallToActionContent />
        <Reveal delay={0.4} wrapperClassName="overflow-visible shrink-0">
          <Button size="lg">
            Open Account
          </Button>
        </Reveal>
      </Section>
    </Reveal>
  );
};
