import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import Image from "next/image";

type OverviewProps = React.ComponentProps<"div"> & {
  imageUrl: string;
  subHeader?: string;
  contentHeader: React.ReactNode;
  description: string;
};

const OverviewContent: React.FC<Omit<OverviewProps, "imageUrl">> = (props) => {
  const { subHeader, contentHeader, description, className, ...rest } = props;

  return (
    <div
      className={cn(
        "lg:row-start-1 lg:col-start-1 lg:col-end-8 h-fit flex flex-col bg-shades-grey-10 p-6 lg:p-[60px] 2xl:p-20 gap-y-3.5 lg:gap-y-5 2xl:gap-y-[23px] rounded-[20px] lg:rounded-se-none lg:rounded-ee-[60px] 2xl:rounded-ee-[80px] text-center lg:text-start -mt-10 lg:mt-0 z-10",
        className
      )}
      {...rest}
    >
      <div>
        {subHeader ? <h5 className="text-sm lg:text-lg 2xl:text-xl">{subHeader}</h5> : null}
        {contentHeader}
      </div>
      <p className="text-sm lg:text-base 2xl:text-lg text-shades-grey-70 font-light">
        {description}
      </p>
    </div>
  );
};

const OverviewImage: React.FC<Pick<OverviewProps, "imageUrl">> = (props) => {
  const { imageUrl } = props;

  return (
    <div className="order-first lg:row-start-1 lg:col-start-5 xl:col-start-6 2xl:col-start-5 lg:col-span-full z-10">
      <Image
        src={imageUrl}
        alt="Billboard Image"
        className="w-full rounded-2xl object-contain"
        width={52}
        height={52}
        sizes="auto"
        priority
      />
    </div>
  );
};

export const Overview: React.FC<OverviewProps> = (props) => {
  const { imageUrl, ...rest } = props;

  return (
    <Section className="relative basis-1/2 bg-shades-grey-11 rounded-[20px] p-3.5 lg:p-10 2xl:p-[50px] grid lg:grid-rows-1 lg:grid-cols-12">
      <Image
        width={32}
        height={32}
        sizes="auto"
        className="absolute top-0 right-0 w-48 md:w-56 lg:w-80 2xl:w-[450px] -z-0 select-none"
        src="/assets/abstract-4.svg"
        alt="Abstract Image 4"
        priority
      />
      <OverviewContent {...rest} />
      <OverviewImage imageUrl={imageUrl} />
    </Section>
  );
};
