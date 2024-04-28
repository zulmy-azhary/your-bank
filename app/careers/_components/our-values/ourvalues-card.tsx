import { Reveal } from "@/components/utils/reveal";

type OurValuesCardProps = {
  title: string;
  description: string;
};

export const OurValuesCard: React.FC<OurValuesCardProps> = (props) => {
  const { title, description } = props;

  return (
    <div className="h-full pl-5 lg:pl-6 2xl:pl-[30px] space-y-3.5 lg:space-y-5 2xl:space-y-[30px] border-l border-shades-green-60">
      <Reveal from="left">
        <h3 className="font-medium text-3xl xl:text-[40px] 2xl:text-[58px] text-shades-grey-30">
          {title}
        </h3>
      </Reveal>
      <Reveal from="left" delay={0.35}>
        <p className="text-sm xl:text-base 2xl:text-lg font-light text-shades-grey-70">
          {description}
        </p>
      </Reveal>
    </div>
  );
};
