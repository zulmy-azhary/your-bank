import type { Metadata } from "next";
import { Overview } from "./_components/overview";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <Overview />
    </>
  );
}
