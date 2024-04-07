import { Section } from "@/components/ui/section";
import Image from "next/image";

const OverviewContent: React.FC = () => {
  return (
    <div className="lg:row-start-1 lg:col-start-1 lg:col-end-8 h-fit flex flex-col bg-shades-grey-10 p-6 lg:p-[60px] 2xl:p-20 gap-y-3.5 lg:gap-y-5 2xl:gap-y-[23px] rounded-[20px] lg:rounded-se-none lg:rounded-ee-[60px] 2xl:rounded-ee-[80px] text-center lg:text-start -mt-10 lg:mt-0 z-10">
      {/* <h5>Welcome to YourBank</h5> */}
      <h1 className="font-medium text-[28px] lg:text-3xl xl:text-5xl 2xl:text-[58px] !leading-[1.3]">
        Welcome to <span className="text-shades-green-60">YourBank</span> Careers!
      </h1>
      <p className="text-sm lg:text-base 2xl:text-lg text-shades-grey-70 font-light">
        Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are
        committed to fostering a culture of excellence and providing opportunities for professional
        growth. With a focus on innovation, customer service, and integrity, we strive to make a
        positive impact in the lives of our customers and communities. Join us today and be a part
        of our mission to shape the future of banking.
      </p>
    </div>
  );
};

const OverviewImage: React.FC = () => {
  return (
    <div className="order-first lg:row-start-1 lg:col-start-5 xl:col-start-6 lg:col-span-full z-10">
      <Image
        src="/assets/overview-careers.png"
        alt="Careers Billboard"
        className="w-full rounded-2xl object-contain"
        width={52}
        height={52}
        sizes="auto"
        objectFit="contain"
        priority
      />
    </div>
  );
};

export const Overview: React.FC = () => {
  return (
    <Section className="relative basis-1/2 bg-shades-grey-11 rounded-[20px] p-3.5 lg:p-10 2xl:p-[50px] grid lg:grid-rows-1 lg:grid-cols-12">
      <Image
        width={32}
        height={32}
        sizes="auto"
        className="absolute top-0 right-0 w-48 md:w-56 lg:w-80 2xl:w-[450px] -z-0 select-none"
        src="/assets/abstract-4.svg"
        alt="Abstract Image 4"
        priority
      />
      <OverviewContent />
      <OverviewImage />
    </Section>
  );
};
