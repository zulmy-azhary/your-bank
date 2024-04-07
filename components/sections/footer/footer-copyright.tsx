import Link from "next/link";
import { BiLogoFacebookCircle, BiLogoLinkedinSquare, BiLogoTwitter } from "react-icons/bi";

export const FooterCopyright: React.FC = () => {
  return (
    <div className="w-full flex justify-between items-center flex-col gap-y-5 md:flex-row bg-shades-grey-10 border border-shades-grey-15 rounded-xl md:rounded-full pt-[50px] pb-10 md:p-3 md:pr-6 2xl:p-4 2xl:pr-[30px] mt-6 md:mt-0">
      <div className="flex items-center gap-x-2 2xl:gap-x-3.5 -mt-[72px] md:mt-0 basis-full">
        <Link href="#" className="rounded-full bg-shades-green-60 w-fit p-2.5">
          <BiLogoFacebookCircle className="size-6 text-shades-grey-15" />
        </Link>
        <Link href="#" className="rounded-full bg-shades-green-60 w-fit p-2.5">
          <BiLogoTwitter className="size-6 text-shades-grey-15" />
        </Link>
        <Link href="#" className="rounded-full bg-shades-green-60 w-fit p-2.5">
          <BiLogoLinkedinSquare className="size-6 text-shades-grey-15" />
        </Link>
      </div>
      <p className="grow text-center text-shades-grey-70 font-light text-sm basis-full">
        YourBank All Rights Reserved
      </p>
      <div className="flex flex-row items-center gap-x-2 text-shades-grey-70 font-light text-sm basis-full justify-end">
        <Link href="#">Privacy Policy</Link>|<Link href="#">Terms of Service</Link>
      </div>
    </div>
  );
};
