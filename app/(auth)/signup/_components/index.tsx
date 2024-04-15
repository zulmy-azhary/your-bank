"use client";

import { useForm } from "react-hook-form";
import { AuthCard, AuthCardFormFooter } from "../../_components/auth-card";
import type { z } from "zod";
import { signupSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "@/components/ui/form-input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const SignUpForm: React.FC = () => {
  const router = useRouter();
  
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = form.handleSubmit((values) => {
    console.log("Register payload: ", values);
    toast.success("Register successful!");
    router.push("/login");
  });

  return (
    <AuthCard
      title="Sign Up"
      description="Join our community today! Create an account to unlock exclusive features and personalized experiences."
    >
      <form onSubmit={onSubmit} className="flex flex-col gap-y-6 xl:gap-y-[30px] 2xl:gap-y-10">
        <div className="grid xl:grid-cols-2 gap-y-5 xl:gap-x-6 2xl:gap-x-[30px] xl:gap-y-[30px]">
          <FormInput control={form.control} name="firstName" placeholder="Enter your First Name" />
          <FormInput control={form.control} name="lastName" placeholder="Enter your Last Name" />
          <FormInput control={form.control} name="email" placeholder="Enter your Email Address" />
          <FormInput
            control={form.control}
            name="password"
            type="password"
            placeholder="Enter your Password"
          />
        </div>
        <AuthCardFormFooter>
          <Button size="lg" type="submit" className="w-full">
            Sign Up
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="w-full bg-shades-grey-15 border-shades-grey-20"
            asChild
          >
            <Link href="/login" className="text-center">
              Login
            </Link>
          </Button>
        </AuthCardFormFooter>
      </form>
    </AuthCard>
  );
};
