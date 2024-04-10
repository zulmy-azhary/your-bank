import { Testimonials } from "@/components/sections/testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <>
      LoginPage
      <Testimonials />
    </>
  );
}
