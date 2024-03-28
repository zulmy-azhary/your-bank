import { Section } from "@/components/ui/section";
import { ProductsItem } from "./products-item";
import { HiArchiveBoxArrowDown, HiBanknotes, HiBriefcase } from "react-icons/hi2";
import { ProductsTabs } from "./products-tabs";

const ProductsTitle: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-y-5 md:flex-row md:justify-between">
      <div className="space-y-2.5 text-center md:text-start md:basis-7/12">
        <h2 className="text-[28px] lg:text-[38px] 2xl:text-5xl font-medium">
          Our <span className="text-shades-green-60">Products</span>
        </h2>
        <p className="text-shades-grey-70 text-sm lg:text-base 2xl:text-lg leading-normal font-light">
          Discover a range of comprehensive and customizable banking products at YourBank, designed
          to suit your unique financial needs and aspirations
        </p>
      </div>
      <div className="md:self-end">
        <ProductsTabs />
      </div>
    </div>
  );
};

const ProductsContent: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-y-[30px] lg:gap-x-4 xl:gap-x-10">
      <ProductsItem
        icon={HiBriefcase}
        title="Checking Accounts"
        description="Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access."
      />
      <div>
        <span className="relative block w-full h-px lg:w-px lg:h-full bg-shades-grey-15" />
      </div>
      <ProductsItem
        icon={HiArchiveBoxArrowDown}
        title="Saving Accounts"
        description="Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you."
      />
      <div>
        <span className="relative block w-full h-px lg:w-px lg:h-full bg-shades-grey-15" />
      </div>
      <ProductsItem
        icon={HiBanknotes}
        title="Loans and Mortgages"
        description="Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need."
      />
    </div>
  );
};

export const Products: React.FC = () => {
  return (
    <Section className="flex flex-col gap-y-[60px] lg:gap-y-20 2xl:gap-y-[100px]">
      <ProductsTitle />
      <ProductsContent />
    </Section>
  );
};
