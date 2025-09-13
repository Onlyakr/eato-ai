import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Username must be at least 2 characters" })
      .max(20, { message: "Username must be at most 20 characters" }),
    email: z.email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Confirm password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
