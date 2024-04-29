import { Reveal } from "@/components/utils/reveal";

type MissionVisionStatementProps = {
  title: string;
  children: React.ReactNode;
};

export const MissionVisionStatement: React.FC<MissionVisionStatementProps> = (props) => {
  const { title, children } = props;

  return (
    <div className="text-center lg:text-start space-y-2.5 2xl:space-y-3.5">
      <Reveal wrapperClassName="w-full">
        <h3 className="font-medium text-[26px] xl:text-[32px] 2xl:text-[38px]">{title}</h3>
      </Reveal>
      <Reveal delay={0.35}>
        <p className="font-light text-shades-grey-70 text-sm xl:text-base 2xl:text-lg">{children}</p>
      </Reveal>
    </div>
  );
};
