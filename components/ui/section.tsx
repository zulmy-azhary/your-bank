import { cn } from "@/lib/utils";

type SectionProps = React.ComponentProps<"section">;
export const Section: React.FC<SectionProps> = (props) => {
  const { className, children, ...rest } = props;
  return (
    <section className={cn("container mx-auto", className)} {...rest}>
      {children}
    </section>
  );
};
