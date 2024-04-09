import { Overview as OverviewSection } from "@/components/sections/overview";

export const Overview: React.FC = () => {
  return (
    <OverviewSection
      imageUrl="/assets/about-billboard.png"
      subHeader="Welcome to YourBank"
      contentHeader={
        <h1 className="font-medium text-[28px] lg:text-3xl xl:text-5xl 2xl:text-[58px] !leading-[1.3]">
          Where Banking Meets <span className="text-shades-green-60">Excellence!</span>
        </h1>
      }
      description="At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence."
    />
  );
};
