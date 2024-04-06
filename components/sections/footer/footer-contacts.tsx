import Link from "next/link";
import { HiEnvelope, HiMapPin, HiPhone } from "react-icons/hi2";

export const FooterContacts: React.FC = () => {
  return (
    <div className="flex justify-center items-center gap-5 flex-wrap">
      <Link
        href="#"
        className="grow flex gap-x-1.5 justify-center items-center text-shades-white-90 text-sm lg:text-base 2xl:text-lg font-light"
      >
        <HiEnvelope className="inline-block text-shades-green-60 size-5 2xl:size-6" />
        hello@yourbank.com
      </Link>
      <Link
        href="#"
        className="grow flex gap-x-1.5 justify-center items-center text-shades-white-90 text-sm lg:text-base 2xl:text-lg font-light"
      >
        <HiPhone className="inline-block text-shades-green-60 size-5 2xl:size-6" />
        +62 81 234 567 890
      </Link>
      <Link
        href="#"
        className="grow flex gap-x-1.5 justify-center items-center text-shades-white-90 text-sm lg:text-base 2xl:text-lg font-light"
      >
        <HiMapPin className="inline-block text-shades-green-60 size-5 2xl:size-6" />
        Makassar, Indonesia
      </Link>
    </div>
  );
};
