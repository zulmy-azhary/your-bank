"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { testimonials } from "./data";
import { Button } from "@/components/ui/button";
import { HiMiniArrowLeft, HiMiniArrowRight } from "react-icons/hi2";
import { TestimonialCard } from "./testimonials-card";
import useBreakpoint from "@/hooks/breakpoint";
import { Reveal } from "@/components/utils/reveal";

export const TestimonialsCarousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [offset, setOffset] = useState<32 | 60 | 80>(32);
  const breakpoint = useBreakpoint();
  const containerRef = useRef<HTMLUListElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
  // Control wether carousel can slide prev or next
  const canScrollPrev = activeSlide > 0;
  const canScrollNext = activeSlide < testimonials.length - 1;
  const offsetX = useMotionValue(-offset);
  const animatedX = useSpring(offsetX, {
    damping: 30,
    stiffness: 100,
  });

  function handleCarouselResponsive(size: typeof breakpoint) {
    const fallbackWidth = itemsRef.current.at(0)?.getBoundingClientRect().width;
    if (fallbackWidth === undefined) return;
    let activeSlideValue: number; // Current Slide
    let offsetValue: 32 | 60 | 80; // Gap between items
    let offsetXValue: number; // Offset between items

    if (size === "sm") {
      activeSlideValue = 1;
      offsetValue = 32;
      offsetXValue = -fallbackWidth - 32;
    } else if (size === "md") {
      activeSlideValue = 0;
      offsetValue = 32;
      offsetXValue = 0;
    } else if (size === "lg") {
      activeSlideValue = 1;
      offsetValue = 60;
      offsetXValue = -60;
    } else if (size === "xl") {
      activeSlideValue = 1;
      offsetValue = 60;
      offsetXValue = -60;
    } else {
      activeSlideValue = 1;
      offsetValue = 80;
      offsetXValue = -80;
    }

    setActiveSlide(activeSlideValue);
    setOffset(offsetValue);
    offsetX.set(offsetXValue);
  }

  useEffect(() => {
    handleCarouselResponsive(breakpoint);
  }, [breakpoint, itemsRef.current.at(0)?.getBoundingClientRect().width]);

  function scrollPrev() {
    //prevent scrolling past first item
    if (!canScrollPrev) return;

    const nextWidth = itemsRef.current.at(activeSlide - 1)?.getBoundingClientRect().width;
    if (nextWidth === undefined) return;
    offsetX.set(offsetX.get() + offset + nextWidth);

    setActiveSlide((prev) => prev - 1);
  }

  function scrollNext() {
    // prevent scrolling past last item
    if (!canScrollNext) return;

    const nextWidth = itemsRef.current.at(activeSlide + 1)?.getBoundingClientRect().width;
    if (nextWidth === undefined) return;
    offsetX.set(offsetX.get() - offset - nextWidth);

    setActiveSlide((prev) => prev + 1);
  }

  return (
    <div className="flex flex-row flex-wrap xl:flex-nowrap justify-center items-center gap-x-5 gap-y-[30px] xl:gap-x-10 2xl:gap-x-[50px] relative overflow-x-hidden">
      <Reveal delay={0.5} from="left" wrapperClassName="justify-self-end xl:justify-self-start z-10 overflow-visible">
        <Button
          variant="secondary"
          className="p-3 2xl:p-3.5"
          type="button"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        >
          <HiMiniArrowLeft className="size-5 xl:size-6" />
        </Button>
      </Reveal>
      <div className="order-first xl:order-none overflow-x-hidden">
        <motion.ul
          ref={containerRef}
          className="order-first xl:order-none flex flex-row gap-x-8 lg:gap-x-[60px] 2xl:gap-x-20"
          style={{
            x: animatedX,
          }}
        >
          {testimonials.map(({ user, comment }, idx) => (
            <motion.li
              key={idx}
              ref={(el) => {
                itemsRef.current[idx] = el as HTMLLIElement;
              }}
              className="list-none shrink-0 max-w-fit lg:shrink-0 lg:basis-1/3"
              transition={{
                ease: "easeInOut",
                duration: 0.5,
              }}
            >
              <Reveal wrapperClassName="h-full" className="h-full">
                <TestimonialCard user={user} comment={comment} />
              </Reveal>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <Reveal delay={0.5} from="right" wrapperClassName="justify-self-end xl:justify-self-start z-10 overflow-visible">
        <Button
          variant="secondary"
          className="p-3 2xl:p-3.5 justify-self-start xl:justify-self-end z-10"
          type="button"
          onClick={scrollNext}
          disabled={!canScrollNext}
        >
          <HiMiniArrowRight className="size-5 xl:size-6" />
        </Button>
      </Reveal>
      <GradientEdges />
    </div>
  );
};

const GradientEdges: React.FC = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[25vw] bg-gradient-to-r from-shades-grey-10 xl:from-25% to-transparent" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[25vw] bg-gradient-to-l from-shades-grey-10 xl:from-25% to-transparent" />
    </>
  );
};
