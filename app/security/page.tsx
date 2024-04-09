import { FAQS } from "@/components/sections/faqs";
import type { Metadata } from "next";
import { Overview } from "./_components/overview";

export const metadata: Metadata = {
  title: "Security",
};

export default function SecurityPage() {
  return (
    <>
      <Overview />
      <FAQS />
    </>
  );
}
