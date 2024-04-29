import Image from "next/image";
import type { pressReleases } from "./data";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Reveal } from "@/components/utils/reveal";
import { Appear } from "@/components/utils/appear";

type PressReleaseCardProps = React.ComponentProps<"div"> & {
  pressRelease: (typeof pressReleases)[number];
};

const PressReleaseHeader: React.FC<
  Pick<PressReleaseCardProps["pressRelease"], "title" | "location" | "date">
> = (props) => {
  const { title, location, date } = props;
  const formattedDate = format(new Date(date), "dd/MM/yyyy");

  return (
    <div className="space-y-2.5 lg:space-y-3.5 2xl:space-y-5">
      <Reveal>
        <h3 className="text-lg lg:text-xl 2xl:text-2xl">{title}</h3>
      </Reveal>
      <div className="flex flex-wrap gap-1.5 2xl:gap-2.5">
        <Reveal delay={0.35}>
          <Badge>Location: {location}</Badge>
        </Reveal>
        <Reveal delay={0.4}>
          <Badge>Date: {formattedDate}</Badge>
        </Reveal>
      </div>
    </div>
  );
};

export const PressReleaseCard: React.FC<PressReleaseCardProps> = (props) => {
  const { pressRelease, className, ...rest } = props;
  const { image, title, location, date, description } = pressRelease;

  return (
    <div
      className={cn(
        "h-full bg-shades-grey-11 border border-shades-grey-15 p-5 lg:p-6 2xl:p-[30px] rounded-t-[40px] rounded-b-2xl space-y-[30px] lg:space-y-10 2xl:space-y-[51px]",
        className
      )}
      {...rest}
    >
      <Appear delay={0.5}>
        <Image
          src={image}
          alt={`${title} Image`}
          placeholder="blur"
          priority
          className="object-cover grayscale rounded-t-[30px] rounded-b-xl max-h-[207px] lg:max-h-[277px] 2xl:max-h-[333px]"
        />
      </Appear>
      <div className="lg:px-6 2xl:px-[30px] space-y-6 2xl:space-y-[30px]">
        <PressReleaseHeader title={title} location={location} date={date} />
        <Reveal delay={0.45}>
          <p className="font-light text-shades-grey-70 text-sm lg:text-base 2xl:text-lg">
            {description}
          </p>
        </Reveal>
      </div>
    </div>
  );
};
