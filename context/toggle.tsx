"use client";

import { useMediaQuery } from "@/hooks/media-query";
import { createContext, useContext, useEffect, useState } from "react";

interface ToggleCtx {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<ToggleCtx["isOpen"]>>;
  onClose: () => void;
}

const ToggleContext = createContext<ToggleCtx>({} as ToggleCtx);

export const ToggleProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const isLaptop = useMediaQuery("(min-width: 1024px)");

  const [isOpen, setOpen] = useState<boolean>(false);
  const onClose = () => setOpen(false);

  useEffect(() => {
    if (isLaptop) {
      setOpen(false);
    }
  }, [isLaptop]);

  return (
    <ToggleContext.Provider value={{ isOpen, setOpen, onClose }}>{children}</ToggleContext.Provider>
  );
};

export const useToggle = () => useContext(ToggleContext);
