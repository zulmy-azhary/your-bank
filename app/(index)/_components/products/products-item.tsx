import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

type ProductsItem = React.ComponentProps<"div"> & {
  icon: IconType;
  title: string;
  description: string;
};

export const ProductsItem: React.FC<ProductsItem> = (props) => {
  const { icon, title, description, className, ...rest } = props;

  return (
    <div className={cn("flex flex-col items-center gap-y-5 basis-full", className)} {...rest}>
      <Icon icon={icon} />
      <div className="text-center space-y-3">
        <h4 className="text-xl 2xl:text-2xl">{title}</h4>
        <p className="text-shades-grey-70 font-light text-sm md:text-base 2xl:text-lg leading-normal 2xl:leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
};
