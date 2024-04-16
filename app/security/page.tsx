import type { Metadata } from "next";
import { Overview } from "./_components/overview";
import { Protects } from "./_components/protects";
import { FAQS } from "@/components/sections/faqs";

export const metadata: Metadata = {
  title: "Security",
};

export default function SecurityPage() {
  return (
    <>
      <Overview />
      <Protects />
      <FAQS />
    </>
  );
}
