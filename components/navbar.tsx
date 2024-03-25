import { MainNav } from "@/components/main-nav";
import { Logo } from "@/components/ui/logo";
import { AuthNav } from "@/components/auth-nav";
import { NavControl } from "@/components/nav-control";
import { Reveal } from "@/components/utils/reveal";
import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <header className="bg-shades-grey-11 py-[14px] px-6 text-white border border-shades-grey-15 rounded-full mt-12 flex flex-row justify-between items-center min-h-[68px] lg:min-h-[70px] 2xl:min-h-[86px]">
      <Reveal delay={0} from="left">
        <Link href="/" className="lg:py-[5px] 2xl:py-[9px]">
          <Logo />
        </Link>
      </Reveal>
      <NavControl>
        <Reveal delay={0.3} className="w-full lg:w-fit">
          <MainNav />
        </Reveal>
        <AuthNav />
      </NavControl>
    </header>
  );
};
