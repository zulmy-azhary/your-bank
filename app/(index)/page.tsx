import type { Metadata } from "next";
import { Hero } from "./_components/hero";
import { Products } from "./_components/products";
import { UseCases } from "./_components/use-cases";
import { Features } from "./_components/features";
import { FAQS } from "@/components/sections/faqs";
import { Testimonials } from "./_components/testimonials";
import { CallToAction } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <UseCases />
      <Features />
      <FAQS />
      <Testimonials />
      <CallToAction />
    </>
  );
}
