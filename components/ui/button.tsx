import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva(
  "rounded-full w-fit text-sm 2xl:text-lg transition-colors disabled:opacity-30",
  {
    variants: {
      variant: {
        primary: "bg-shades-green-60 text-shades-grey-11 hover:bg-shades-green-60/90",
        secondary:
          "bg-shades-grey-11 text-white border border-shades-grey-15 hover:bg-shades-grey-15/90",
        accent: "bg-[#22251B] text-shades-green-65 hover:bg-[#22251B]/90",
        ghost: "bg-transparent text-white hover:text-white/90",
      },
      size: {
        default: "px-[18px] py-2.5 2xl:px-6 2xl:py-3.5",
        sm: "px-5 py-3.5 2xl:px-6 2xl:py-3.5",
        base: "px-5 py-3 2xl:px-[30px] 2xl:py-4",
        md: "px-6 py-3 2xl:px-[30px] 2xl:py-3.5",
        lg: "px-6 py-3.5 2xl:px-[30px] 2xl:py-[18px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { size, variant, className, asChild = false, ...rest } = props;

  const Comp = asChild ? Slot : "button";

  return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...rest} />;
});

Button.displayName = "Button";
