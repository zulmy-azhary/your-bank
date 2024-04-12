import type { Metadata } from "next";
import { Overview } from "./_components/overview";
import { MissionVision } from "./_components/mission-vision";
import { PressReleases } from "./_components/press-releases";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <Overview />
      <MissionVision />
      <PressReleases />
    </>
  );
}
