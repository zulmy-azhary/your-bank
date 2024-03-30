import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { IconType } from "react-icons";

const iconVariants = cva("text-shades-green-60", {
  variants: {
    size: {
      default: "size-7 2xl:size-[34px]",
      sm: "size-6 2xl:size-[30px]",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type IconProps = React.ComponentProps<"div"> &
  VariantProps<typeof iconVariants> & {
    icon: IconType | React.ReactNode;
  };

export const Icon: React.FC<IconProps> = (props) => {
  const { icon: Icon, className, size, ...rest } = props;

  return (
    <div
      className={cn(
        "w-fit h-fit p-2 2xl:p-3 rounded-full bg-gradient-to-t from-transparent to-shades-green-60/5",
        className
      )}
      {...rest}
    >
      <div className="flex items-center p-3.5 2xl:p-5 rounded-full bg-gradient-to-t from-transparent to-shades-green-60/10 bg-clip-padding relative before:absolute before:inset-0 before:-z-[1] before:rounded-[inherit] before:bg-gradient-to-t before:from-transparent before:from-25% before:to-shades-green-60/20 border border-transparent before:-m-px after:absolute after:inset-0 after:bg-shades-grey-10 after:-z-[1] after:rounded-[inherit]">
        {typeof Icon === "function" ? <Icon className={cn(iconVariants({ size }))} /> : Icon}
      </div>
    </div>
  );
};
