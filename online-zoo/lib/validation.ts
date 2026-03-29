import { email, z } from "zod";

export const loginSchema = z.object({
  login: z
    .string()
    .min(3, "Should be at least 3 characters long.")
    .regex(
      /^[a-zA-Z][a-zA-Z]*$/,
      "Must start with a letter and contain only English letters."
    ),
  password: z
    .string()
    .min(6, "Should be at least 6 characters long.")
    .regex(
      /^(?=.*[!@#$%^&*()_+\-=[\]{}';:"\\|,.<>/?])/,
      "Password must contain at least 1 special character."
    ),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    name: z.string().min(3, "Should be at least 3 characters long."),
    email: email("Invalid email address."),
    login: z
      .string()
      .min(3, "Should be at least 3 characters long.")
      .regex(
        /^[a-zA-Z][a-zA-Z]*$/,
        "Must start with a letter and contain only English letters."
      ),
    password: z
      .string()
      .min(6, "Should be at least 6 characters long.")
      .regex(
        /^(?=.*[!@#$%^&*()_+\-=[\]{}';:"\\|,.<>/?])/,
        "Password must contain at least 1 special character."
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
