import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { routes } from "@/lib/data";
import { cn } from "@/lib/utils";

export const FooterNavigation: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-y-6 lg:gap-y-10 2xl:gap-y-[50px]">
      <Logo />
      <div className="flex flex-row gap-x-3.5 2xl:gap-x-[26px]">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn("text-sm lg:text-base 2xl:text-lg text-shades-white-90 font-light")}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
