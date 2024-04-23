"use client";

import { Button } from "@/components/ui/button";
import { Appear } from "@/components/utils/appear";
import { Reveal } from "@/components/utils/reveal";
import { cn } from "@/lib/utils";
import { useState } from "react";

const tabs = ["Outline Banking", "Financial Tools", "Customer Support"] as const;

export const FeaturesTabs: React.FC = () => {
  const [selected, setSelected] = useState<(typeof tabs)[number]>(tabs[0]);

  return (
    <Appear className="overflow-x-auto modified-scrollbar h-fit rounded-[10px] 2xl:rounded-xl bg-shades-grey-11 p-5 lg:py-10 xl:p-10 2xl:p-[50px] flex flex-nowrap lg:flex-col md:justify-center lg:justify-start gap-x-5 gap-y-6">
      {tabs.map((tab) => (
        <Reveal key={tab} wrapperClassName="lg:w-full shrink-0">
          <Button
            onClick={() => setSelected(tab)}
            variant="secondary"
            className={cn(
              "lg:w-full",
              selected === tab
                ? "text-shades-green-60 bg-shades-grey-10 hover:bg-shades-grey-10"
                : null
            )}
          >
            {tab}
          </Button>
        </Reveal>
      ))}
    </Appear>
  );
};
