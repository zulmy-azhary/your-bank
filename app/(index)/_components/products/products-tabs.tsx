"use client";

import { Button } from "@/components/ui/button";
import { Appear } from "@/components/utils/appear";
import { Reveal } from "@/components/utils/reveal";
import { useState } from "react";

const tabs = ["For Individuals", "For Businesses"] as const;

export const ProductsTabs: React.FC = () => {
  const [selected, setSelected] = useState<(typeof tabs)[number]>(tabs[0]);

  return (
    <Appear className="w-fit flex bg-shades-grey-11 border border-shades-grey-15 rounded-full p-3">
      {tabs.map((tab, idx) => (
        <Reveal key={tab} delay={(idx + 1) * 0.1}>
          <Button onClick={() => setSelected(tab)} variant={selected === tab ? "primary" : "ghost"}>
            {tab}
          </Button>
        </Reveal>
      ))}
    </Appear>
  );
};
