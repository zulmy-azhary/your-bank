import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/utils/reveal";
import { Appear } from "@/components/utils/appear";

type MissionVisionCardProps = {
  title: string;
  image: StaticImageData;
};

export const MissionVisionCard: React.FC<MissionVisionCardProps> = (props) => {
  const { title, image } = props;

  return (
    <Appear
      className={cn(
        "relative shrink-0 lg:basis-2/5 xl:basis-5/12 bg-shades-grey-11 p-5 xl:p-[60px] !pb-0 rounded-t-[50px] overflow-hidden",
        "before:absolute before:-inset-8 xl:before:inset-2",
        "before:bg-[radial-gradient(#CAFF3333_2px,transparent_2px)] xl:before:bg-[radial-gradient(#CAFF3333_3px,transparent_3px)] before:object-center before:bg-[size:10px_10px] xl:before:bg-[size:12px_12px] 2xl:before:bg-[size:14px_14px] before:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]",
        "after:absolute after:inset-x-0 lg:after:inset-x-auto lg:after:w-px after:bg-shades-green-60 after:bottom-0 lg:group-odd:after:right-0 lg:group-even:after:left-0 after:h-px lg:after:h-auto lg:after:inset-y-1/3"
      )}
    >
      <Reveal delay={0.4}>
        <Image
          src={image}
          alt={`${title} Image`}
          placeholder="blur"
          priority
          className="rounded-t-[50px] grayscale h-[309px] lg:h-80 xl:h-[440px] 2xl:h-[561px] object-cover"
        />
      </Reveal>
    </Appear>
  );
};
