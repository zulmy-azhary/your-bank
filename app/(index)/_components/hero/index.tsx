import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import Image from "next/image";
import { HiCheckBadge } from "react-icons/hi2";
import { Transaction } from "./transaction";
import { MoneyExchange } from "./money-exchange";
import { MonthlyIncome } from "./monthly-income";
import { SupportedCurrency } from "./supported-currency";
import { cn } from "@/lib/utils";

const HeroContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center lg:items-start gap-y-[30px] md:gap-y-[40px] 2xl:gap-y-[50px] lg:basis-1/2">
      <div className="flex flex-col gap-y-3 md:gap-y-4 2xl:gap-y-5 items-center lg:items-start">
        <p className="flex items-center gap-x-1 2xl:gap-x-1.5 w-fit text-xs md:text-sm 2xl:text-lg font-extralight p-2 pr-4 2xl:py-2.5 2xl:pl-3 2xl:pr-5 bg-shades-grey-15 rounded-full leading-6">
          <HiCheckBadge className="size-5 text-shades-green-60" /> No LLC Required, No Credit Check.
        </p>
        <div className="text-center lg:text-start space-y-2 md:space-y-2.5 2xl:space-y-3.5">
          <h1 className="text-[28px] md:text-[38px] 2xl:text-5xl 2xl:leading-normal font-medium">
            Welcome to YourBank Empowering Your{" "}
            <span className="text-shades-green-60">Financial Journey</span>
          </h1>
          <p className="text-sm md:text-base 2xl:text-lg text-white/90 font-extralight tracking-tight md:tracking-normal xl:max-w-xl 2xl:max-w-full">
            At YourBank, our mission is to provide comprehensive banking solutions that empower
            individuals and businesses to achieve their financial goals. We are committed to
            delivering personalized and innovative services that prioritize our customers&apos;
            needs.
          </p>
        </div>
      </div>
      <Button size="lg">Open Account</Button>
    </div>
  );
};

const HeroImage: React.FC = () => {
  return (
    <div className="flex flex-col items-center relative">
      <div className="space-y-3">
        <Card
          className={cn(
            "min-w-[305.45px] md:min-w-[410.19px] 2xl:min-w-[515.02px]",
            "relative bg-clip-padding border border-transparent",
            "before:absolute before:inset-0 before:-z-[1] before:rounded-[inherit] before:bg-gradient-to-tr before:from-shades-green-60/20 before:from-0% before:via-transparent before:via-10% before:to-100% before:to-transparent before:-m-px",
            "after:absolute after:inset-0 after:-z-[2] after:rounded-[inherit] after:bg-shades-grey-15 after:bg-gradient-to-tr after:from-transparent after:from-0% after:via-transparent after:via-90% after:to-100% after:to-shades-green-60/20 after:-m-px"
          )}
        >
          <Image
            src="/assets/abstract-1.svg"
            alt="Abstract 1 Image"
            width={0}
            height={0}
            sizes="auto"
            priority
            className="absolute -z-10 top-0 right-0 -translate-y-6 translate-x-[3.25rem] md:-translate-y-24 md:translate-x-32 lg:-translate-y-2 lg:translate-x-24 xl:translate-x-36 2xl:translate-y-2 2xl:translate-x-[10.75rem] w-60 md:w-80 2xl:w-96"
          />
          <MonthlyIncome income={"+ $5000,00"} />
          <Transaction />
          <MoneyExchange />
          <Button
            variant="accent"
            className="w-full px-[15px] py-2 md:px-[21px] md:py-[11px] 2xl:px-[26px] 2xl:py-3.5 text-[9.23px] md:text-[12.4px] 2xl:text-[15.61px] font-light tracking-wide"
          >
            Exchange
          </Button>
        </Card>
        <SupportedCurrency />
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <Section className="flex flex-col gap-y-20 lg:flex-row justify-between xl:justify-start xl:gap-x-20 2xl:gap-x-8">
      <HeroContent />
      <HeroImage />
    </Section>
  );
};
