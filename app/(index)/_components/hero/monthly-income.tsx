import { cn } from "@/lib/utils";
import { HiMiniPlus, HiPlusCircle } from "react-icons/hi2";

type MonthlyIncomeProps = React.ComponentProps<"div"> & {
  income?: string | number;
};

export const MonthlyIncome: React.FC<MonthlyIncomeProps> = (props) => {
  const { income, className, ...rest } = props;

  return (
    <div
      className={cn(
        "absolute top-0 left-0 -translate-y-6 md:-translate-y-9 -translate-x-1/4 md:-translate-x-14 2xl:-translate-y-10 flex items-center gap-x-[5px] md:gap-x-[6.89px] bg-[#22251B] px-[10px] py-2 md:px-[13.77px] md:py-[11.02px] 2xl:px-[17px] 2xl:py-[14px] rounded-md md:rounded-lg 2xl:rounded-[10.4px]",
        className
      )}
      {...rest}
    >
      <HiMiniPlus className="size-[22px] md:size-8 2xl:size-9 p-1.5 2xl:p-2 rounded-full bg-shades-green-60 text-shades-grey-10" />
      <div className="space-y-[0.51] md:space-y-[0.69px]">
        <p className="text-[10px] md:text-[13.77px] 2xl:text-[17.34px] leading-normal font-light tracking-wide">
          {income}
        </p>
        <p className="text-white/90 text-[8px] md:text-[11.02px] 2xl:text-[13.87px] leading-normal font-extralight tracking-wide">
          Monthly Income
        </p>
      </div>
    </div>
  );
};
