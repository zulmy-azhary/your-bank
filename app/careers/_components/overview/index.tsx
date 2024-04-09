import { Overview as OverviewSection } from "@/components/sections/overview";

export const Overview: React.FC = () => {
  return (
    <OverviewSection
      imageUrl="/assets/careers-billboard.png"
      contentHeader={
        <h1 className="font-medium text-[28px] lg:text-3xl xl:text-5xl 2xl:text-[58px] !leading-[1.3]">
          Welcome to <span className="text-shades-green-60">YourBank</span> Careers!
        </h1>
      }
      description="Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking."
    />
  );
};
