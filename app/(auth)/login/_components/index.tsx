"use client";

import { useForm } from "react-hook-form";
import { AuthCard, AuthCardFormFooter } from "../../_components/auth-card";
import type { z } from "zod";
import { loginSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "@/components/ui/form-input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";

export const LoginForm: React.FC = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = form.handleSubmit((values) => {
    console.log("Login payload: ", values);
    toast.success("Login successful!");
    form.reset();
  });

  return (
    <AuthCard title="Login" description="Welcome back! Please log in to access your account.">
      <form onSubmit={onSubmit} className="flex flex-col gap-y-6 xl:gap-y-[30px] 2xl:gap-y-10">
        <div className="flex flex-col xl:flex-row justify-between gap-y-5 xl:gap-x-6 2xl:gap-x-[30px]">
          <FormInput control={form.control} name="email" placeholder="Enter your Email Address" />
          <FormInput
            control={form.control}
            name="password"
            type="password"
            placeholder="Enter your Password"
          />
        </div>
        <Link href="#" className="underline text-center text-sm xl:text-base 2xl:text-lg">
          Forgot Password?
        </Link>
        <AuthCardFormFooter>
          <Button size="lg" type="submit" className="w-full">
            Login
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="w-full bg-shades-grey-15 border-shades-grey-20"
            asChild
          >
            <Link href="/signup" className="text-center">
              Sign Up
            </Link>
          </Button>
        </AuthCardFormFooter>
      </form>
    </AuthCard>
  );
};
