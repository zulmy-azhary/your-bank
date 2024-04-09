import type { Metadata } from "next";
import { CallToAction } from "@/components/sections/cta";
import { FAQS } from "@/components/sections/faqs";
import { Overview } from "./_components/overview";
import { OurValues } from "./_components/our-values";
import { Benefits } from "./_components/benefits";
import { Jobs } from "./_components/jobs";

export const metadata: Metadata = {
  title: "Careers",
};

export default function CareersPage() {
  return (
    <>
      <Overview />
      <OurValues />
      <Benefits />
      <Jobs />
      <FAQS />
      <CallToAction />
    </>
  );
}
