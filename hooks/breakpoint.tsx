import { useState, useEffect } from "react";

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<"sm" | "md" | "lg" | "xl" | "2xl" | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setBreakpoint("sm");
      } else if (width >= 768 && width < 1024) {
        setBreakpoint("md");
      } else if (width >= 1024 && width < 1440) {
        setBreakpoint("lg");
      } else if (width >= 1440 && width < 1920) {
        setBreakpoint("xl");
      } else {
        setBreakpoint("2xl");
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize once on initial render
    handleResize();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return breakpoint;
};

export default useBreakpoint;
