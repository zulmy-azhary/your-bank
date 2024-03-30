import { cn } from "@/lib/utils";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

type TransactionCardProps = React.ComponentProps<"div"> & {
  name: string;
  price: string;
};

const TransactionCard: React.FC<TransactionCardProps> = (props) => {
  const { name, price, className, ...rest } = props;
  return (
    <div
      className={cn(
        "flex w-full relative items-center justify-between bg-shades-grey-11 border rounded-md md:rounded-lg 2xl:rounded-[10.4px] px-3 py-2 md:px-[17px] md:py-[11px] 2xl:px-[21px] 2xl:py-[14px] border-shades-grey-15",
        className
      )}
      {...rest}
    >
      <div className="flex items-center gap-x-[5.13px] md:gap-x-[6.89px] 2xl:gap-x-[8.67px]">
        <HiOutlineSwitchHorizontal className="size-6 md:size-8 2xl:size-9 rounded-full p-1.5 2xl:p-2 text-shades-grey-11 bg-shades-green-60" />
        <div>
          <p className="text-[9.23px] md:text-[12.4px] 2xl:text-[15.61px] leading-normal font-extralight tracking-wide">
            Transaction
          </p>
          <p className="text-[10.26px] md:text-[13.77px] 2xl:text-[17.34px] leading-normal font-light tracking-wide">
            {name}
          </p>
        </div>
      </div>
      <p className="self-end text-xs md:text-base 2xl:text-xl tracking-wide">{price}</p>
    </div>
  );
};

export const Transaction: React.FC = () => {
  return (
    <div className="space-y-[10px] md:space-y-[13.77px] 2xl:space-y-[17.34px]">
      <h5 className="text-[10.26px] md:text-[13.77px] 2xl:text-[17.34px] leading-normal tracking-wide">
        Your Transactions
      </h5>
      <div className="flex flex-col items-center">
        <TransactionCard name="Joel Kenley" price="-$68.00" className="z-20" />
        <TransactionCard
          name="Mark Smith"
          price="-$68.00"
          className="opacity-50 w-11/12 -translate-y-1/3 z-10"
        />
        <TransactionCard
          name="Lenen Roy"
          price="-$68.00"
          className="opacity-20 w-10/12 -translate-y-2/3"
        />
      </div>
    </div>
  );
};
