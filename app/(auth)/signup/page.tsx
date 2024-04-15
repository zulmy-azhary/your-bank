import { Testimonials } from "@/components/sections/testimonials";
import type { Metadata } from "next";
import { SignUpForm } from "./_components";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function SignUpPage() {
  return (
    <>
      <SignUpForm />
      <Testimonials />
    </>
  );
}
