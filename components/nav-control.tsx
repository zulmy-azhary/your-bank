"use client";

import { useMediaQuery } from "@/hooks/media-query";
import { Hamburger } from "@/components/ui/hamburger";
import { Button } from "@/components/ui/button";
import { useToggle } from "@/context/toggle";
import { Sidebar } from "@/components/sidebar";
import { AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/utils/reveal";

type NavControlProps = {
  children: React.ReactNode;
};

export const NavControl: React.FC<NavControlProps> = (props) => {
  const { children } = props;
  const { isOpen, setOpen } = useToggle();
  const isLaptop = useMediaQuery("(min-width: 1024px)");

  if (isLaptop) return children;

  return (
    <>
      <Reveal from="right" wrapperClassName="z-[99999]" className="flex">
        <Button className="lg:hidden" onClick={() => setOpen((prev) => !prev)}>
          <Hamburger isOpen={isOpen} />
        </Button>
      </Reveal>
      <AnimatePresence>{isOpen ? <Sidebar>{children}</Sidebar> : null}</AnimatePresence>
    </>
  );
};
