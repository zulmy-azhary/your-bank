import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import Image, { type StaticImageData } from "next/image";
import fourthAbstract from "@/public/assets/abstract-4.svg";
import bgPattern from "@/public/assets/pattern-background.png";
import { Appear } from "@/components/utils/appear";
import { Reveal } from "@/components/utils/reveal";

type OverviewProps = React.ComponentProps<"div"> & {
  imageUrl: StaticImageData;
  subHeader?: string;
  contentHeader: React.ReactNode;
  description: string;
  havePattern?: boolean;
};

const OverviewContent: React.FC<Omit<OverviewProps, "imageUrl" | "havePattern">> = (props) => {
  const { subHeader, contentHeader, description, className } = props;

  return (
    <Reveal
      from="left"
      wrapperClassName={"lg:row-start-1 lg:col-start-1 lg:col-end-8 overflow-visible z-10"}
      className={cn(
        "h-fit flex flex-col bg-shades-grey-10 p-6 lg:p-[60px] 2xl:p-20 gap-y-3.5 lg:gap-y-5 2xl:gap-y-[23px] rounded-[20px] lg:rounded-se-none lg:rounded-ee-[60px] 2xl:rounded-ee-[80px] text-center lg:text-start -mt-10 lg:mt-0",
        className
      )}
    >
      <div>
        {subHeader ? (
          <Reveal from="left" wrapperClassName="w-full">
            <h5 className="text-sm lg:text-lg 2xl:text-xl">{subHeader}</h5>
          </Reveal>
        ) : null}
        <Reveal from="left" delay={0.4} wrapperClassName="w-full">
          {contentHeader}
        </Reveal>
      </div>
      <Reveal from="left" delay={0.5}>
        <p className="text-sm lg:text-base 2xl:text-lg text-shades-grey-70 font-light">
          {description}
        </p>
      </Reveal>
    </Reveal>
  );
};

const OverviewImage: React.FC<Pick<OverviewProps, "imageUrl" | "havePattern">> = (props) => {
  const { imageUrl, havePattern } = props;

  return (
    <Appear
      delay={0.4}
      className="order-first lg:row-start-1 lg:col-start-5 xl:col-start-6 2xl:col-start-5 lg:col-span-full z-10 relative"
    >
      <Image
        src={imageUrl}
        alt="Billboard Image"
        className="w-full rounded-2xl object-contain grayscale"
        placeholder="blur"
        priority
      />
      {havePattern ? (
        <Image
          src={bgPattern}
          alt="Pattern Image"
          className="w-full rounded-2xl object-contain grayscale absolute inset-0 mix-blend-overlay"
          priority
        />
      ) : null}
    </Appear>
  );
};

export const Overview: React.FC<OverviewProps> = (props) => {
  const { imageUrl, havePattern, ...rest } = props;

  return (
    <Reveal wrapperClassName="w-full">
      <Section className="relative basis-1/2 bg-shades-grey-11 rounded-[20px] p-3.5 lg:p-10 2xl:p-[50px] grid lg:grid-rows-1 lg:grid-cols-12">
        <Appear>
          <Image
            className="absolute top-0 right-0 w-48 md:w-56 lg:w-80 2xl:w-[450px] -z-0 select-none"
            src={fourthAbstract}
            alt="Abstract Image 4"
            quality={32}
            priority
          />
        </Appear>
        <OverviewContent {...rest} />
        <OverviewImage imageUrl={imageUrl} havePattern={havePattern} />
      </Section>
    </Reveal>
  );
};
