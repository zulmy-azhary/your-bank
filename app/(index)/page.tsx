import type { Metadata } from "next";
import { Hero } from "./_components/hero";
import { Products } from "./_components/products";
import { UseCases } from "./_components/use-cases";
import { Features } from "./_components/features";
import { FAQS } from "./_components/faqs";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden flex flex-col px-4 pb-8 lg:px-20 2xl:px-[162px] xl:container lg:py-10 gap-y-20 lg:gap-y-28 2xl:gap-y-32">
      <Hero />
      <Products />
      <UseCases />
      <Features />
      <FAQS />
    </main>
  );
}
