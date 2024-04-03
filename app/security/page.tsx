import { FAQS } from "@/components/sections/faqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security",
};

export default function SecurityPage() {
  return (
    <>
      SecurityPage
      <FAQS />
    </>
  );
}
