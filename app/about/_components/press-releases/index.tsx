import { Section } from "@/components/ui/section";
import { pressReleases } from "./data";
import { PressReleaseCard } from "./card";

const PressReleasesTitle: React.FC = () => {
  return (
    <div className="space-y-2.5 text-center md:text-start md:basis-7/12">
      <h2 className="text-[28px] lg:text-[38px] 2xl:text-5xl font-medium text-shades-green-60">
        Press Releases
      </h2>
      <p className="text-shades-grey-70 text-sm lg:text-base 2xl:text-lg leading-normal font-light">
        Stay updated with the latest happenings and exciting developments at YourBank through our
        press releases.
      </p>
    </div>
  );
};

const PressReleasesContent: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-5 2xl:gap-[30px]">
      {pressReleases.map((pressRelease) => (
        <PressReleaseCard key={pressRelease.title} pressRelease={pressRelease} />
      ))}
    </div>
  );
};

export const PressReleases: React.FC = () => {
  return (
    <Section className="flex flex-col gap-y-[50px] md:gap-y-[60px] lg:gap-y-20">
      <PressReleasesTitle />
      <PressReleasesContent />
    </Section>
  );
};
