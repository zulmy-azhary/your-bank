import { Section } from "@/components/ui/section";
import { protects } from "./data";
import { ProtectCard } from "./protect-card";
import { cn } from "@/lib/utils";

const ProtectsTitle: React.FC = () => {
  return (
    <div className="space-y-2.5 text-center md:text-start md:basis-7/12">
      <h2 className="text-[28px] lg:text-[38px] 2xl:text-5xl font-medium">
        How We <span className="text-shades-green-60">Protect You</span>
      </h2>
      <p className="text-shades-grey-70 text-sm lg:text-base 2xl:text-lg leading-normal font-light">
        At YourBank, we prioritize the security and confidentiality of your financial information.
        Our state-of-the-art encryption technology and stringent data protection measures ensure
        your assets and transactions are safeguarded at all times
      </p>
    </div>
  );
};

const ProtectsContent: React.FC = () => {
  return (
    <div
      className={cn(
        "grid md:grid-cols-2 gap-5 2xl:gap-[30px] xl:px-20 2xl:px-[100px] relative",
        "xl:-mt-16 xl:pt-16 2xl:-mt-28"
      )}
    >
      <div
        className={cn(
          "-z-0 hidden xl:block xl:absolute w-full h-4/5 xl:rounded-t-[50px] xl:rounded-b-[20px] overflow-hidden",
          "xl:before:absolute xl:before:inset-0 xl:before:w-full xl:before:h-full xl:before:bg-gradient-to-br xl:before:from-shades-green-60/5 xl:before:to-transparent xl:before:to-30% xl:before:rounded-t-[50px] xl:before:rounded-b-[20px]",
          "xl:after:absolute xl:after:inset-0 xl:after:bg-gradient-to-bl xl:after:from-shades-grey-11 xl:after:to-transparent xl:after:to-80% xl:after:rounded-t-[50px] xl:after:rounded-b-[20px]"
        )}
      >
      </div>
      {protects.map((protect) => (
        <ProtectCard key={protect.title} {...protect} />
      ))}
    </div>
  );
};

export const Protects: React.FC = () => {
  return (
    <Section className="flex flex-col gap-y-[50px] md:gap-y-[60px] xl:gap-y-[120px] 2xl:gap-y-[200px]">
      <ProtectsTitle />
      <ProtectsContent />
    </Section>
  );
};
