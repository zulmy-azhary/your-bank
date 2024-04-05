import { Section } from "@/components/ui/section";
import { TestimonialsTabs } from "./testimonials-tabs";
import { TestimonialsCarousel } from "./testimonials-carousel";

const TestimonialsTitle: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-y-5 md:flex-row md:justify-between">
      <div className="space-y-2.5 text-center md:text-start md:basis-7/12">
        <h2 className="text-[28px] lg:text-[38px] 2xl:text-5xl font-medium">
          Our <span className="text-shades-green-60">Testimonials</span>
        </h2>
        <p className="text-shades-grey-70 text-sm lg:text-base 2xl:text-lg leading-normal font-light">
          Discover how YourBank has transformed lives with innovative digital solutions and
          personalized customer service. See why our clients trust us for a secure and prosperous
          financial journey
        </p>
      </div>
      <div className="md:self-end">
        <TestimonialsTabs />
      </div>
    </div>
  );
};

export const Testimonials: React.FC = () => {
  return (
    <Section className="flex flex-col gap-y-[40px] lg:gap-y-20 2xl:gap-y-[100px]">
      <TestimonialsTitle />
      <TestimonialsCarousel />
    </Section>
  );
};
