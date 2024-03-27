import { useToggle } from "@/context/toggle";
import { useAnimation, motion } from "framer-motion";
import { useEffect, useRef } from "react";

type SidebarProps = {
  children: React.ReactNode;
};

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { children } = props;
  const { isOpen } = useToggle();

  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      controls.start("visible");
    }

    return () => {
      document.body.removeAttribute("style");
    };
  }, [isOpen]);

  return (
    <motion.div
      ref={ref}
      variants={sidebarVariants}
      initial="hidden"
      animate={controls}
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full fixed inset-0 bg-shades-grey-10 z-[9999]"
    >
      <aside className="container mx-auto px-10 pb-12 pt-32 flex flex-col gap-y-16 items-center">
        {children}
      </aside>
    </motion.div>
  );
};

const sidebarVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};
