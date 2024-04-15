"use client";

import { Icon } from "@/components/ui/icon";
import { IoLogoApple, IoLogoFacebook, IoLogoGoogle } from "react-icons/io5";
import { toast } from "sonner";

const providers = [
  {
    name: "Google",
    icon: IoLogoGoogle,
  },
  {
    name: "Facebook",
    icon: IoLogoFacebook,
  },
  {
    name: "Apple",
    icon: IoLogoApple,
  },
];

export const AuthProviders: React.FC = () => {
  const login = (name: string) => {
    toast.info(`Login with ${name}.`);
  };

  return (
    <div className="flex items-center justify-center gap-x-5">
      {providers.map((provider, idx) => (
        <button key={idx} type="button" onClick={() => login(provider.name)} className="group">
          <Icon icon={provider.icon} className="group-hover:opacity-90" />
        </button>
      ))}
    </div>
  );
};
