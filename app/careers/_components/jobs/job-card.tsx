import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IoBriefcase } from "react-icons/io5";

type JobCardProps = {
  position: string;
  description: string;
  location: string;
  department: string;
  requirements: string[];
};

const JobHeader: React.FC<Pick<JobCardProps, "position" | "location" | "department">> = (props) => {
  const { position, location, department } = props;

  return (
    <div className="space-y-1.5 lg:space-y-2.5 2xl:space-y-3.5">
      <h3 className="font-semibold text-xl lg:text-2xl 2xl:text-3xl">{position}</h3>
      <div className="flex flex-wrap gap-1.5 lg:gap-2 2xl:gap-2.5">
        <Badge>Location: {location}</Badge>
        <Badge>Department: {department}</Badge>
      </div>
    </div>
  );
};

const JobDescription: React.FC<Pick<JobCardProps, "description">> = (props) => {
  const { description } = props;

  return (
    <div className="space-y-2 lg:space-y-4 2xl:space-y-5">
      <h4 className="font-semibold text-lg lg:text-xl 2xl:text-2xl">About This Job</h4>
      <p className="font-light text-shades-grey-70 text-sm lg:text-base 2xl:text-lg">
        {description}
      </p>
    </div>
  );
};

const JobRequirements: React.FC<Pick<JobCardProps, "requirements">> = (props) => {
  const { requirements } = props;

  return (
    <div className="space-y-2.5 lg:space-y-4 2xl:space-y-5">
      <h4 className="font-semibold text-lg lg:text-xl 2xl:text-2xl">
        Requirements & Qualifications
      </h4>
      <div className="space-y-3.5 2xl:space-y-5">
        {requirements.map((requirement) => (
          <div key={requirement} className="text-shades-grey-70 flex items-center gap-x-2">
            <IoBriefcase className="size-5 2xl:size-6 shrink-0" />
            <p className="font-light text-sm lg:text-base 2xl:text-lg">{requirement}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const JobCard: React.FC<JobCardProps> = (props) => {
  const { position, description, location, department, requirements } = props;

  return (
    <div className="flex flex-col justify-between gap-y-[30px] lg:gap-y-10 2xl:gap-y-[50px] bg-shades-grey-11 border border-shades-grey-15 rounded-2xl p-6 lg:p-10 2xl:p-[50px]">
      <div className="space-y-[30px] lg:space-y-10 2xl:space-y-[50px]">
        <JobHeader position={position} location={location} department={department} />
        <div className="space-y-[30px] lg:space-y-10">
          <JobDescription description={description} />
          <JobRequirements requirements={requirements} />
        </div>
      </div>
      <Button size="base" className="font-medium">
        Apply Now
      </Button>
    </div>
  );
};
