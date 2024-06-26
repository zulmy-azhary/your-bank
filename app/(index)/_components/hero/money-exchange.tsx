import { Appear } from "@/components/utils/appear";
import { Reveal } from "@/components/utils/reveal";
import { cn } from "@/lib/utils";
import Image from "next/image";

type MoneyExchangeInfosProps = React.ComponentProps<"div"> & {
  currency: string;
  description: string;
  price: string | number;
  priceClassName?: string;
};

export const MoneyExchangeInfos: React.FC<MoneyExchangeInfosProps> = (props) => {
  const { currency, description, price, className, priceClassName, ...rest } = props;

  return (
    <>
      <div className={cn(" border-b border-shades-grey-15", className)} {...rest}>
        <Reveal
          from="left"
          delay={1.25}
          wrapperClassName="w-full"
          className={cn(
            "space-y-[5px] md:space-y-[6.89px] 2xl:space-y-[8.67px] p-2.5 md:p-[13.77px] 2xl:p-[17.34px]"
          )}
        >
          <div className="flex items-center gap-x-[5px]">
            <Image
              src={`/assets/currency/${currency.toLowerCase()}.svg`}
              width={32}
              height={32}
              sizes="auto"
              className="size-5 md:size-7 2xl:size-9"
              alt={description}
            />
            <span className="text-[9.23px] md:text-[12.4px] 2xl:text-[15.61px] tracking-wide">
              {currency}
            </span>
          </div>
          <p className="text-[8.2px] md:text-[11.02px] 2xl:text-[13.87px] text-white/90 font-extralight">
            {description}
          </p>
        </Reveal>
      </div>
      <div className={cn("flex items-center", priceClassName)}>
        <Reveal delay={1.25} wrapperClassName="w-full" className="h-full">
          <p
            className={cn(
              "text-[10px] md:text-[13.77px] 2xl:text-[17.34px] flex items-center self-center p-2.5 md:p-[13.77px] 2xl:p-[17.34px] h-full"
            )}
          >
            {price}
          </p>
        </Reveal>
      </div>
    </>
  );
};

export const MoneyExchange: React.FC = () => {
  return (
    <div className="space-y-[10px] md:space-y-[13.77px] 2xl:space-y-[17.34px] -translate-y-4">
      <Reveal from="left" delay={1}>
        <h5 className="text-[10.26px] md:text-[13.77px] 2xl:text-[17.34px] leading-normal tracking-wide">
          Money Exchange
        </h5>
      </Reveal>
      <Appear
        delay={1}
        className="grid grid-rows-2 grid-cols-2 grid-flow-col border border-shades-grey-15 rounded-md md:rounded-lg 2xl:rounded-[10.4px] bg-shades-grey-11"
      >
        <MoneyExchangeInfos
          currency="INR"
          description="Indian Rupees"
          price={"5,000"}
          className="border-r"
          priceClassName="border-r border-shades-grey-15"
        />
        <MoneyExchangeInfos currency="USD" description="United States Dollar" price={"12.00"} />
      </Appear>
    </div>
  );
};
