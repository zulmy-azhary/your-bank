"use client";

import { useToggle } from "@/context/toggle";
import { cn } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { routes as navRoutes } from "@/lib/data";

const isActive = (pathname: string, id: string | string[], path?: string) => {
  return path ? pathname === `/${path}/${id}` || pathname.includes(path) : pathname === "/";
};

type MainNavProps = React.ComponentProps<"nav">;

export const MainNav: React.FC<MainNavProps> = (props) => {
  const { className, ...rest } = props;
  const { onClose } = useToggle();

  const pathname = usePathname();
  const params = useParams();
  const routes = navRoutes.map((route) => ({
    ...route,
    isActive: isActive(pathname, params.id, route.href !== "/" ? route.href : undefined),
  }));

  return (
    <nav
      className="flex flex-col gap-y-4 w-full lg:w-fit lg:flex-row items-center gap-x-1"
      {...rest}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          onClick={onClose}
          className={cn(
            "text-center lg:text-start text-sm 2xl:text-lg px-6 py-3 lg:px-[18px] lg:py-[10px] 2xl:px-6 2xl:py-3 rounded-full transition-colors w-full lg:w-fit",
            route.isActive ? "bg-shades-grey-15" : "hover:text-shades-green-60"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};
