import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

type IconProps = React.ComponentProps<"div"> & {
  icon: IconType | React.ReactNode;
};

export const Icon: React.FC<IconProps> = (props) => {
  const { icon: Icon, className, ...rest } = props;

  return (
    <div
      className={cn(
        "w-fit p-2 2xl:p-3 rounded-full bg-gradient-to-t from-transparent to-shades-green-60/5",
        className
      )}
      {...rest}
    >
      <div className="flex items-center p-3.5 2xl:p-5 rounded-full bg-gradient-to-t from-transparent to-shades-green-60/10 bg-clip-padding relative before:absolute before:inset-0 before:-z-[1] before:rounded-[inherit] before:bg-gradient-to-t before:from-transparent before:from-25% before:to-shades-green-60/20 border border-transparent before:-m-px after:absolute after:inset-0 after:bg-shades-grey-10 after:-z-[1] after:rounded-[inherit]">
        {typeof Icon === "function" ? (
          <Icon className="size-7 2xl:size-[34px] text-shades-green-60" />
        ) : (
          Icon
        )}
      </div>
    </div>
  );
};
