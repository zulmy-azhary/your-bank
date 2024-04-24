import { Icon } from "@/components/ui/icon";
import { protects } from "./data";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/utils/reveal";

type ProtectCardProps = (typeof protects)[number] & React.ComponentPropsWithoutRef<"div">;

export const ProtectCard: React.FC<ProtectCardProps> = (props) => {
  const { icon, title, description, className } = props;

  return (
    <Reveal
      wrapperClassName={cn(
        "rounded-[20px] bg-shades-grey-11 border border-shades-grey-15 p-6 lg:p-10 2xl:p-[50px] z-10",
        className
      )}
      className="h-full space-y-[18px] lg:space-y-5 2xl:space-y-6"
    >
      <div className="flex items-center gap-x-3.5 2xl:gap-x-5">
        <Icon size="sm" icon={icon} />
        <Reveal>
          <h3 className="text-lg lg:text-xl 2xl:text-2xl">{title}</h3>
        </Reveal>
      </div>
      <Reveal delay={0.35}>
        <p className="font-light text-shades-grey-70 text-sm lg:text-base 2xl:text-lg">
          {description}
        </p>
      </Reveal>
    </Reveal>
  );
};
