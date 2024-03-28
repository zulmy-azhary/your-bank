import type { Metadata } from "next";
import { Hero } from "./_components/sections/hero";
import { Products } from "./_components/sections/products";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden flex flex-col px-4 pb-8 lg:px-20 2xl:px-[162px] xl:container lg:py-10 gap-y-20 lg:gap-y-28 2xl:gap-y-32">
      <Hero />
      <Products />
    </main>
  );
}
