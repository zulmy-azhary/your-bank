import { Testimonials } from "@/components/sections/testimonials";
import type { Metadata } from "next";
import { LoginForm } from "./_components";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <>
      <LoginForm />
      <Testimonials />
    </>
  );
}
