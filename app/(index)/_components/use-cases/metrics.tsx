import { Separator } from "@/components/ui/separator";
import { Reveal } from "@/components/utils/reveal";
import { cn } from "@/lib/utils";
import { Fragment } from "react";

type Metric = {
  percentage: string | number;
  description: string;
};

type MetricProps = React.ComponentProps<"div"> & Metric;

const MetricContent: React.FC<MetricProps> = (props) => {
  const { percentage, description, className, ...rest } = props;

  return (
    <div className={cn("space-y-[5px] text-center lg:text-start", className)} {...rest}>
      <p className="text-shades-green-60 font-medium text-[40px] 2xl:text-[58px] leading-normal">
        {percentage}%
      </p>
      <p className="text-shades-grey-70 font-extralight text-sm lg:text-[15px] 2xl:text-lg leading-normal">
        {description}
      </p>
    </div>
  );
};

type MetricsProps = {
  metrics: Metric[];
};

export const Metrics: React.FC<MetricsProps> = (props) => {
  const { metrics } = props;
  return metrics.map((metric, idx) => {
    const isLastElement = metric === metrics[metrics.length - 1];

    return (
      <Fragment key={metric.description}>
        <Reveal wrapperClassName="w-full basis-full">
          <MetricContent percentage={metric.percentage} description={metric.description} />
        </Reveal>
        {isLastElement ? null : (
          <Reveal
            delay={(idx + 1) * 0.1}
            wrapperClassName="overflow-visible w-full lg:w-px"
            className="h-full"
          >
            <Separator style="dashed" />
          </Reveal>
        )}
      </Fragment>
    );
  });
};
