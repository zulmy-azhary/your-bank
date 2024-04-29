import { Section } from "@/components/ui/section";
import { MissionVisionCard } from "./mission-vision-card";
import { missionVision } from "./data";
import { MissionVisionStatement } from "./mission-vision-statement";
import { Reveal } from "@/components/utils/reveal";

const MissionVisionTitle: React.FC = () => {
  return (
    <div className="space-y-2.5 text-center md:text-start md:basis-7/12">
      <Reveal wrapperClassName="w-full">
        <h2 className="text-[28px] lg:text-[38px] 2xl:text-5xl font-medium text-shades-green-60">
          Mission & Vision
        </h2>
      </Reveal>
      <Reveal delay={0.35}>
        <p className="text-shades-grey-70 text-sm lg:text-base 2xl:text-lg leading-normal font-light">
          We envision being a leading force in the industry, driven by innovation, integrity, and
          inclusivity, creating a brighter financial future for individuals and businesses while
          maintaining a strong commitment to customer satisfaction and community development
        </p>
      </Reveal>
    </div>
  );
};

const MissionVisionContent: React.FC = () => {
  return (
    <div className="space-y-[50px] lg:-space-y-10 xl:-space-y-[84px] 2xl:-space-y-[100px]">
      {missionVision.map((item) => (
        <div
          key={item.title}
          className="flex flex-col gap-y-[30px] lg:gap-x-[30px] xl:gap-x-10 2xl:gap-x-[50px] group lg:odd:flex-row lg:even:flex-row-reverse items-center"
        >
          <MissionVisionCard title={item.title} image={item.image} />
          <MissionVisionStatement title={item.title}>{item.statement}</MissionVisionStatement>
        </div>
      ))}
    </div>
  );
};

export const MissionVision: React.FC = () => {
  return (
    <Section className="flex flex-col gap-y-[50px] md:gap-y-[60px] lg:gap-y-20">
      <MissionVisionTitle />
      <MissionVisionContent />
    </Section>
  );
};
