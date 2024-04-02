import { cn } from "@/lib/utils";

type CardProps = React.ComponentProps<"div">;

export const Card: React.FC<CardProps> = (props) => {
  const { className, children, ...rest } = props;
  return (
    <div
      className={cn(
        "min-w-60 min-h-80 bg-[#1A1A1A] border border-shades-grey-15 rounded-md md:rounded-lg 2xl:rounded-[10.4px] p-[21px] lg:p-7 2xl:p-[35px] relative",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
