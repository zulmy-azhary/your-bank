import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { AuthProviders } from "./auth-providers";
import Image from "next/image";
import fourthAbstract from "@/public/assets/abstract-4.svg";
import bgPattern from "@/public/assets/pattern-background.png";

type AuthCardProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export const AuthCard: React.FC<AuthCardProps> = (props) => {
  const { title, description, children } = props;

  return (
    <Section className="bg-shades-grey-11 border border-shades-grey-15 rounded-2xl p-[30px] lg:px-[200px] lg:py-20 flex flex-col gap-y-10 lg:gap-y-[60px] relative z-0 overflow-hidden">
      <Image
        className="absolute top-0 right-0 w-40 md:w-48 lg:w-60 2xl:w-80 z-10 select-none"
        src={fourthAbstract}
        alt="Abstract Image 4"
        quality={32}
        priority
      />
      <Image
        src={bgPattern}
        alt="Pattern Image"
        className="rounded-2xl w-full h-full object-cover inset-0 -z-0 grayscale absolute mix-blend-overlay opacity-30 pointer-events-none"
        priority
      />
      <div className="space-y-2.5 xl:space-y-4 2xl:space-y-5">
        <h2 className="font-medium text-center text-shades-green-60 text-[28px] xl:text-[38px] 2xl:text-5xl">
          {title}
        </h2>
        <p className="font-light text-center text-shades-grey-75 text-sm xl:text-base 2xl:text-lg">
          {description}
        </p>
      </div>
      {children}
    </Section>
  );
};

export const AuthCardFormFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col gap-y-6 xl:px-[130px] 2xl:px-[254px] z-0">
      {children}
      <div className="space-y-6 2xl:space-y-[30px]">
        <p
          className={cn(
            "flex items-center justify-center text-nowrap gap-x-4 text-sm 2xl:text-lg text-shades-grey-70",
            "before:w-full before:h-px before:bg-shades-grey-70",
            "after:w-full after:h-px after:bg-shades-grey-70"
          )}
        >
          Or Continue With
        </p>
        <AuthProviders />
      </div>
    </div>
  );
};
