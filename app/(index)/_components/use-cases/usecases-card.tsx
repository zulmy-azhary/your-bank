import { Icon } from "@/components/ui/icon";
import { IconType } from "react-icons";

type CardProps = {
  icon: IconType | React.ReactNode;
  description: string;
};

export const Card: React.FC<CardProps> = (props) => {
  const { icon, description } = props;

  return (
    <div className="h-full z-0 px-3.5 py-5 lg:p-6 2xl:p-[30px] flex flex-col items-center gap-y-3.5 2xl:gap-y-6 bg-shades-grey-10 border border-shades-grey-15 rounded-2xl">
      <Icon icon={icon} size="sm" />
      <p className="text-sm lg:text-base 2xl:text-xl text-center">{description}</p>
    </div>
  );
};
