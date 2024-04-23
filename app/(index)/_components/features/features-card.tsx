import { Appear } from "@/components/utils/appear";
import { Reveal } from "@/components/utils/reveal";
import { HiMiniArrowUpRight } from "react-icons/hi2";

type FeaturesCardProps = {
  idx: number;
  title: string;
  description: string;
};

export const FeaturesCard: React.FC<FeaturesCardProps> = (props) => {
  const { idx, title, description } = props;

  return (
    <div className="space-y-5 lg:space-y-6 2xl:space-y-[30px] rounded-[10px] lg:rounded-[20px] bg-shades-grey-11 border border-shades-grey-15 p-[30px] lg:p-10 2xl:p-[50px]">
      <div className="flex justify-between items-center">
        <Reveal delay={idx + 0.05}>
          <h5 className="text-lg 2xl:text-[22px]">{title}</h5>
        </Reveal>
        <Appear delay={idx + 0.1}>
          <HiMiniArrowUpRight className="text-shades-green-60 size-8 2xl:size-9" />
        </Appear>
      </div>
      <Reveal delay={idx + 0.15}>
        <p className="text-sm lg:text-base 2xl:text-lg font-light tracking-tight text-shades-grey-70">
          {description}
        </p>
      </Reveal>
    </div>
  );
};
