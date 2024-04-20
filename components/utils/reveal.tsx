"use client";

import { cn } from "@/lib/utils";
import { motion, type MotionProps, useAnimation, useInView, type Variant } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type RevealProps = React.ComponentProps<"div"> &
  MotionProps & {
    children: React.ReactNode;
    from?: "left" | "right" | "top" | "bottom";
    delay?: number;
    slider?: boolean;
    wrapperClassName?: string;
    sliderClassName?: string;
  };

export const Reveal: React.FC<RevealProps> = (props) => {
  const {
    children,
    from = "bottom",
    delay = 0.25,
    slider = false,
    className,
    wrapperClassName,
    sliderClassName,
    ...rest
  } = props;

  const [direction] = useState<NonNullable<RevealProps["from"]>>(() => {
    if (from === "left") return "left";
    if (from === "right") return "right";
    if (from === "top") return "top";
    return "bottom";
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const sliderControls = useAnimation();
  const isHorizontalDirection = direction === "left" || direction === "right";

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      sliderControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative w-fit",
        isHorizontalDirection ? "overflow-x-hidden" : "overflow-y-hidden",
        wrapperClassName
      )}
    >
      <motion.div
        variants={revealVariants}
        initial={direction}
        animate={controls}
        transition={{ duration: 0.5, delay }}
        className={cn(className)}
        {...rest}
      >
        {children}
      </motion.div>
      {slider ? (
        <motion.div
          variants={sliderVariants}
          initial="hidden"
          animate={sliderControls}
          transition={{ duration: 0.7, ease: "easeIn" }}
          className={cn("absolute inset-0 z-10 bg-shades-green-60", sliderClassName)}
        />
      ) : null}
    </div>
  );
};

const revealVariants: Record<NonNullable<RevealProps["from"]> | "visible", Variant> = {
  left: { opacity: 0, x: "-100%" },
  right: { opacity: 0, x: "100%" },
  top: { opacity: 0, y: -75 },
  bottom: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0, x: 0 },
};

const sliderVariants = {
  hidden: { top: 0 },
  visible: { top: "100%" },
};
