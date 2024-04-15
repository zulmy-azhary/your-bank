import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Email Address is required.").email("Invalid Email Address."),
  password: z.string().min(1, "Password is required."),
});

export const signupSchema = z.object({
  firstName: z
    .string()
    .min(1, "First Name is required.")
    .min(3, "First Name must be at least 3 characters."),
  lastName: z
    .string()
    .min(1, "Last Name is required.")
    .min(3, "Last Name must be at least 3 characters."),
  email: z.string().min(1, "Email Address is required.").email("Invalid Email Address."),
  password: z
    .string()
    .min(1, "Password is required.")
    .min(6, "Password must be at least 6 characters."),
});
