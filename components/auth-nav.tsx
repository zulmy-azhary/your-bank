"use client";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/utils/reveal";
import { useToggle } from "@/context/toggle";
import Link from "next/link";

export const AuthNav: React.FC = () => {
  const { onClose } = useToggle();

  return (
    <div className="flex flex-col lg:flex-row gap-y-8 w-full lg:w-fit items-center gap-x-1">
      <Link
        href="/signup"
        onClick={onClose}
        className="text-center lg:text-start text-sm 2xl:text-lg px-[18px] py-[10px] 2xl:py-3 2xl:px-6 rounded-full transition-colors w-full hover:text-shades-green-60"
      >
        <Reveal delay={0.45} wrapperClassName="w-full">
          Sign Up
        </Reveal>
      </Link>
      <Link href="/login" onClick={onClose} className="w-full lg:w-fit mx-auto">
        <Reveal delay={0.55} wrapperClassName="w-full">
          <Button className="w-full">Login</Button>
        </Reveal>
      </Link>
    </div>
  );
};
