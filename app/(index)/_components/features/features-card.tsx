import { HiMiniArrowUpRight } from "react-icons/hi2";

type FeaturesCardProps = {
  title: string;
  description: string;
};

export const FeaturesCard: React.FC<FeaturesCardProps> = (props) => {
  const { title, description } = props;

  return (
    <div className="space-y-5 lg:space-y-6 2xl:space-y-[30px] rounded-[10px] lg:rounded-[20px] bg-shades-grey-11 border border-shades-grey-15 p-[30px] lg:p-10 2xl:p-[50px]">
      <div className="flex justify-between items-center">
        <h5 className="text-lg 2xl:text-[22px]">{title}</h5>
        <HiMiniArrowUpRight className="text-shades-green-60 size-8 2xl:size-9" />
      </div>
      <p className="text-sm lg:text-base 2xl:text-lg font-light tracking-tight text-shades-grey-70">
        {description}
      </p>
    </div>
  );
};
