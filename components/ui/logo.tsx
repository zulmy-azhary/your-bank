import { cn } from "@/lib/utils";
import Image from "next/image";

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-x-1">
      <div className={cn("relative size-7 lg:size-8 2xl:size-10")}>
        <Image src={"/logo.svg"} alt="Logo" sizes="auto" fill priority />
      </div>
      <h5 className={cn("tracking-wide font-normal text-base lg:text-lg 2xl:text-2xl")}>
        YourBanK
      </h5>
    </div>
  );
};
