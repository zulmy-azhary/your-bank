"use client";

import { useMediaQuery } from "@/hooks/media-query";
import { Hamburger } from "@/components/ui/hamburger";
import { Button } from "@/components/ui/button";
import { useToggle } from "@/context/toggle";
import { Sidebar } from "@/components/sidebar";
import { AnimatePresence } from "framer-motion";

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
      <Button className="relative z-50 lg:hidden" onClick={() => setOpen((prev) => !prev)}>
        <Hamburger isOpen={isOpen} />
      </Button>
      <AnimatePresence>{isOpen ? <Sidebar>{children}</Sidebar> : null}</AnimatePresence>
    </>
  );
};
