"use client";

import { motion, type MotionProps, useAnimation, useInView, type Variant } from "framer-motion";
import { useEffect, useRef } from "react";

type AppearProps = React.ComponentProps<"div"> &
  MotionProps & {
    delay?: number;
  };

export const Appear: React.FC<AppearProps> = (props) => {
  const { delay = 0.25, ...rest } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={revealVariants}
      initial={"hidden"}
      animate={controls}
      transition={{ duration: 0.5, delay }}
      {...rest}
    />
  );
};

const revealVariants: Record<string, Variant> = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
