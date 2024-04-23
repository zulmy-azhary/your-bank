import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { IconType } from "react-icons";
import { Card } from "./usecases-card";
import { Metrics } from "./metrics";
import { Reveal } from "@/components/utils/reveal";
import { Appear } from "@/components/utils/appear";

type ContainerProps = React.ComponentProps<"div"> & {
  title: string;
  description: string;
  metrics: {
    percentage: string | number;
    description: string;
  }[];
  cards: {
    icon: IconType | React.ReactNode;
    description: string;
  }[];
};
export const Container: React.FC<ContainerProps> = (props) => {
  const { title, description, metrics, cards, className, ...rest } = props;

  return (
    <div
      className={cn(
        "flex flex-col group lg:odd:flex-row lg:even:flex-row-reverse lg:gap-x-[60px] 2xl:gap-x-[100px]",
        className
      )}
      {...rest}
    >
      <Appear className="relative basis-1/2 bg-shades-grey-11 rounded-[20px] p-5 lg:p-10 2xl:p-[50px] grid grid-cols-2 grid-rows-2 gap-2.5 2xl:gap-5">
        <Image
          width={32}
          height={32}
          sizes="auto"
          className="absolute top-0 group-odd:left-0 group-even:right-0 group-even:scale-x-[-1] even:right-0 w-28 md:w-44 lg:w-52 -z-0"
          src="/assets/abstract-3.svg"
          alt="Abstract Image 3"
          priority
        />
        {cards.map(({ icon, description }, idx) => (
          <Reveal
            key={description}
            delay={(idx + 1) * 0.1}
            wrapperClassName="w-full"
            className="w-full h-full"
          >
            <Card icon={icon} description={description} />
          </Reveal>
        ))}
      </Appear>
      <div className="basis-1/2 flex flex-col items-center lg:items-start gap-y-[50px] 2xl:gap-y-[62px]">
        <div className="space-y-2.5 text-center lg:text-start">
          <Reveal delay={0.4} wrapperClassName="w-full">
            <h3 className="text-xl lg:text-[26px] 2xl:text-3xl leading-normal 2xl:leading-normal">
              {title}
            </h3>
          </Reveal>
          <Reveal delay={0.5}>
            <p className="text-shades-grey-70 text-sm lg:text-base 2xl:text-lg font-light leading-normal">
              {description}
            </p>
          </Reveal>
        </div>
        <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-y-[30px] lg:gap-x-12">
          <Metrics metrics={metrics} />
        </div>
        <Reveal delay={0.5}>
          <Button variant="secondary" size="sm">
            Learn More
          </Button>
        </Reveal>
      </div>
    </div>
  );
};
