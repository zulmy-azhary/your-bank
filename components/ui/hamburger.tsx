"use client";

import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"div"> & {
  isOpen: boolean;
};

export const Hamburger: React.FC<Props> = (props) => {
  const { isOpen, ...rest } = props;

  return (
    <div
      {...rest}
      className={cn(
        "relative z-50 flex w-6 cursor-pointer flex-col items-end gap-y-[6px] transition-all duration-500 lg:hidden",
        isOpen && "rotate-[225deg]"
      )}
    >
      <span
        className={cn(
          "h-[2px] w-full border-none bg-shades-grey-20 transition-all duration-300",
          isOpen ? "translate-y-2 rotate-90" : "delay-300"
        )}
      />
      <span
        className={cn(
          "h-[2px] w-full border-none bg-shades-grey-20 transition-all duration-300",
          isOpen ? "invisible opacity-0" : "delay-300"
        )}
      />
      <span
        className={cn(
          "h-[2px] w-1/2 border-none bg-shades-grey-20 transition-all duration-300",
          isOpen ? "w-full -translate-y-2" : "delay-300"
        )}
      />
    </div>
  );
};
