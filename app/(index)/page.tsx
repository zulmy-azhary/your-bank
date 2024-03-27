import type { Metadata } from "next";
import { Hero } from "./_components/sections/hero/hero-section";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden px-4 pb-8 lg:px-20 2xl:px-[162px] xl:container lg:py-10">
      <Hero />
    </main>
  );
}
