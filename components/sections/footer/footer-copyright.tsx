import { Reveal } from "@/components/utils/reveal";
import Link from "next/link";
import { socials } from "./data";
import { Appear } from "@/components/utils/appear";

export const FooterCopyright: React.FC = () => {
  return (
    <Reveal
      wrapperClassName="w-full"
      className="flex justify-between items-center flex-col gap-y-5 md:flex-row bg-shades-grey-10 border border-shades-grey-15 rounded-xl md:rounded-full pt-[50px] pb-10 md:p-3 md:pr-6 2xl:p-4 2xl:pr-[30px] mt-6 md:mt-0"
    >
      <div className="flex items-center gap-x-2 2xl:gap-x-3.5 -mt-[72px] md:mt-0 basis-full">
        {socials.map(({ href, icon: Icon }, idx) => (
          <Reveal key={idx} delay={(idx + 1) * 0.1} className="flex">
            <Link href={href} className="rounded-full bg-shades-green-60 w-fit p-2.5">
              <Icon className="size-6 text-shades-grey-15" />
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal wrapperClassName="grow basis-full">
        <p className="text-center text-shades-grey-70 font-light text-sm">
          YourBank All Rights Reserved
        </p>
      </Reveal>
      <div className="flex flex-row items-center gap-x-2 text-shades-grey-70 font-light text-sm basis-full justify-end">
        <Reveal delay={0.35}>
          <Link href="#">Privacy Policy</Link>
        </Reveal>
        <Appear delay={0.45}>|</Appear>
        <Reveal delay={0.4}>
          <Link href="#">Terms of Service</Link>
        </Reveal>
      </div>
    </Reveal>
  );
};
