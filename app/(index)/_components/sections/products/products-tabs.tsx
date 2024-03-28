"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const tabs = ["For Individuals", "For Businesses"] as const;

export const ProductsTabs: React.FC = () => {
  const [isActive, setActive] = useState<(typeof tabs)[number]>(tabs[0]);

  return (
    <div className="w-fit flex bg-shades-grey-11 border border-shades-grey-15 rounded-full p-3">
      {tabs.map((tab) => (
        <Button
          key={tab}
          onClick={() => setActive(tab)}
          variant={isActive === tab ? "primary" : "ghost"}
        >
          {tab}
        </Button>
      ))}
    </div>
  );
};
