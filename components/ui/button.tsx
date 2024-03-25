import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva("rounded-full text-sm 2xl:text-lg transition-colors", {
  variants: {
    variant: {
      primary: "bg-shades-green-60 text-shades-grey-11 hover:bg-shades-green-60/90",
      secondary: "bg-shades-grey-11 text-white border border-shades-grey-15 hover:bg-shades-grey-15/90",
    },
    size: {
      default: "px-[18px] py-[10px] 2xl:px-[24px] 2xl:py-[14px]",
      sm: "px-[20px] py-[14px] 2xl:px-[24px] 2xl:py-[14px]",
      md: "px-[24px] py-[12px] 2xl:px-[30px] 2xl:py-[14px]",
      lg: "px-[24px] py-[14px] 2xl:px-[30px] 2xl:py-[18px]",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

type ButtonProps = React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>;

export const Button: React.FC<ButtonProps> = (props) => {
  const { size, variant, className, children, ...rest } = props;
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...rest}>
      {children}
    </button>
  );
};
