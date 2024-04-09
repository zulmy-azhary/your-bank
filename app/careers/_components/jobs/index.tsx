import { Section } from "@/components/ui/section";
import { JobCard } from "./job-card";
import { jobs } from "./data";

const JobsTitle: React.FC = () => {
  return (
    <div className="space-y-2.5 text-center md:text-start md:basis-7/12">
      <h2 className="text-[28px] lg:text-[38px] 2xl:text-5xl font-medium text-shades-green-60">
        Job Openings
      </h2>
      <p className="text-shades-grey-70 text-sm lg:text-base 2xl:text-lg leading-normal font-light">
        Explore exciting job openings at YourBank, where we value talent, innovation, and a passion
        for customer service. Join our team and be part of shaping a brighter future in the banking
        industry
      </p>
    </div>
  );
};

const JobsContent: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-5 2xl:gap-[30px]">
      {jobs.map((job) => (
        <JobCard
          key={job.position}
          position={job.position}
          description={job.description}
          location={job.location}
          department={job.department}
          requirements={job.requirements}
        />
      ))}
    </div>
  );
};

export const Jobs: React.FC = () => {
  return (
    <Section className="flex flex-col gap-y-[50px] md:gap-y-[60px] lg:gap-y-20">
      <JobsTitle />
      <JobsContent />
    </Section>
  );
};
