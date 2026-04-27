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

export const donorSchema = z.object({
  name: z.string().trim().min(2, "Name should be at least 2 characters long."),
  email: email("Invalid email address."),
});

export type DonorFormData = z.infer<typeof donorSchema>;

const isValidExpirationDate = (value: string) => {
  const match = /^(0[1-9]|1[0-2])\/\d{2}$/.exec(value);

  if (!match) {
    return false;
  }

  const [monthValue, yearValue] = value.split("/");
  const month = Number(monthValue);
  const year = 2000 + Number(yearValue);
  const expiresAt = new Date(year, month, 0, 23, 59, 59, 999);

  return expiresAt >= new Date();
};

export const paymentSchema = z.object({
  cardNumber: z
    .string()
    .trim()
    .refine(
      (value) => /^\d{16}$/.test(value.replace(/\s/g, "")),
      "Card number must contain 16 digits."
    ),
  expirationDate: z
    .string()
    .trim()
    .refine(
      isValidExpirationDate,
      "Enter a valid expiration date in MM/YY format."
    ),
  cvv: z
    .string()
    .trim()
    .regex(/^\d{3,4}$/, "CVV must contain 3 or 4 digits."),
  cardholderName: z
    .string()
    .trim()
    .min(2, "Cardholder name should be at least 2 characters long."),
});

export type PaymentFormData = z.infer<typeof paymentSchema>;
