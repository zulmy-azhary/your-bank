import type { Metadata } from "next";
import { CallToAction } from "@/components/sections/cta";
import { FAQS } from "@/components/sections/faqs";
import { Overview } from "@/components/sections/overview";
import { OurValues } from "./_components/our-values";
import { Benefits } from "./_components/benefits";

export const metadata: Metadata = {
  title: "Careers",
};

export default function CareersPage() {
  return (
    <>
      <Overview />
      <OurValues />
      <Benefits />
      <FAQS />
      <CallToAction />
    </>
  );
}
