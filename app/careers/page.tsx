import { CallToAction } from "@/components/sections/cta";
import { FAQS } from "@/components/sections/faqs";
import { Overview } from "@/components/sections/overview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
};

export default function CareersPage() {
  return (
    <>
      <Overview />
      <FAQS />
      <CallToAction />
    </>
  );
}
