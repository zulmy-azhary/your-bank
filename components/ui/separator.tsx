import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const separatorVariants = cva(
  "relative block w-full h-px lg:w-px lg:h-full border-b lg:border-l border-shades-grey-15",
  {
    variants: {
      style: {
        solid: "border-solid",
        dashed: "border-dashed",
        dotted: "border-dotted",
        doubled: "border-double",
      },
    },
    defaultVariants: {
      style: "solid",
    },
  }
);

type SeparatorProps = React.ComponentProps<"span"> & VariantProps<typeof separatorVariants>;

export const Separator: React.FC<SeparatorProps> = (props) => {
  const { style, className, ...rest } = props;
  return <span className={cn(separatorVariants({ style }), className)} {...rest} />;
};
