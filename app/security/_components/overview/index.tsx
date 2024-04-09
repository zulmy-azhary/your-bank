import { Overview as OverviewSection } from "@/components/sections/overview";
import securityBillboard from "@/public/assets/security-billboard.png";

export const Overview: React.FC = () => {
  return (
    <OverviewSection
      imageUrl={securityBillboard}
      contentHeader={
        <h1 className="font-medium text-[28px] lg:text-3xl xl:text-5xl 2xl:text-[58px] !leading-[1.3]">
          Your Security is Our <span className="text-shades-green-60">Top Priority</span>
        </h1>
      }
      description="At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority."
    />
  );
};
