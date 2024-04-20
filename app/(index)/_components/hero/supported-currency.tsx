import { Appear } from "@/components/utils/appear";
import { Reveal } from "@/components/utils/reveal";
import Image from "next/image";

const currencies = ["Dollar", "Euro", "Bitcoin", "Ethereum"] as const;

export const SupportedCurrency: React.FC = () => {
  return (
    <Appear delay={0.5} className="self-end w-fit ml-auto translate-x-6 md:translate-x-0 lg:translate-x-12 flex gap-x-2 justify-between items-center bg-[#22251B] rounded-full p-[5.13px] pl-4 md:p-[6.89px] md:pl-[16.53px] 2xl:p-[9px] 2xl:pl-[21px]">
      <Appear delay={0.75}>
        <p className="text-[9.23px] md:text-[12.4px] 2xl:text-[15.61px] font-light tracking-wide">
          Supported Currency
        </p>
      </Appear>
      <div className="bg-shades-grey-10 border border-shades-grey-15 rounded-full flex items-center gap-x-1 md:gap-x-[5.51px] 2xl:gap-x-[6.94px] p-[5.13px] md:p-[6.89px] 2xl:p-[8.67px]">
        {currencies.map((currency, idx) => (
          <Reveal delay={(idx + 1) * 0.4} key={currency} className="p-1.5 bg-shades-grey-15 rounded-full">
            <Image
              src={`/assets/currency/${currency.toLowerCase()}.svg`}
              className="size-2.5 md:size-4 2xl:size-5"
              width={0}
              height={0}
              sizes="auto"
              alt={currency}
            />
          </Reveal>
        ))}
      </div>
    </Appear>
  );
};
