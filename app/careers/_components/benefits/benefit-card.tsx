import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/utils/reveal";
import type { IconType } from "react-icons";

type BenefitCardProps = {
  icon: IconType;
  title: string;
  description: string;
};

export const BenefitCard: React.FC<BenefitCardProps> = (props) => {
  const { icon, title, description } = props;

  return (
    <div className="h-full space-y-5 lg:space-y-6 2xl:space-y-[30px] p-6 lg:p-10 2xl:p-[50px] bg-shades-grey-11 border border-shades-grey-15 rounded-t-[40px] rounded-b-[14px] md:rounded-bl-[40px] md:rounded-tl-[14px] 2xl:rounded-tr-[50px] 2xl:rounded-bl-[50px] 2xl:rounded-tl-[20px] 2xl:rounded-br-[20px]">
      <div className="flex items-center gap-x-3.5 2xl:gap-x-5">
        <Reveal wrapperClassName="z-10 shrink-0">
          <Icon icon={icon} />
        </Reveal>
        <Reveal from="left" delay={0.35}>
          <h3 className="text-lg lg:text-xl 2xl:text-2xl">{title}</h3>
        </Reveal>
      </div>
      <Reveal delay={0.4}>
        <p className="text-sm lg:text-base 2xl:text-lg font-light text-shades-grey-70">
          {description}
        </p>
      </Reveal>
    </div>
  );
};
