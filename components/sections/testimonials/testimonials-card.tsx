import { Card } from "@/components/ui/card";
import { Appear } from "@/components/utils/appear";
import { Reveal } from "@/components/utils/reveal";
import Image from "next/image";

type TestimonialCardProps = {
  user: string;
  comment: string;
};

export const TestimonialCard: React.FC<TestimonialCardProps> = (props) => {
  const { user, comment } = props;

  return (
    <Card className="flex flex-col items-center gap-y-[30px] lg:border-none lg:bg-transparent lg:!p-0 h-full">
      <Appear className="flex flex-row items-center gap-x-4 w-full">
        <span className="relative block w-full h-px border-b border-shades-grey-15" />
        <Image
          src="/assets/double-quotes.svg"
          alt="Double quotes"
          className="size-11 2xl:size-14"
          width={0}
          height={0}
          sizes="auto"
        />
        <span className="relative block w-full h-px border-b border-shades-grey-15" />
      </Appear>
      <Reveal delay={0.35}>
        <p className="text-sm text-center lg:text-base 2xl:text-lg font-light">{comment}</p>
      </Reveal>
      <Reveal wrapperClassName="mt-auto">
        <h5 className="font-medium text-shades-green-60 2xl:text-lg">{user}</h5>
      </Reveal>
    </Card>
  );
};
