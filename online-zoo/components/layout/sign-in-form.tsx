"use client";

import Link from "next/link";
import { Icons } from "../icons";
import CustomButton from "../ui/button";
import { useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const SignInForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      toast.loading("Signing in...");
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.dismiss();
        toast.error(result.error, { removeDelay: 500 });
        return;
      }

      toast.dismiss();
      toast.success("Successfully signed in!", { removeDelay: 500 });
      if (result) {
        localStorage.setItem("user", JSON.stringify(result.data));
      }
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="signin-form-wrapper">
        <form onSubmit={handleSubmit(onSubmit)} className="signin-form">
          <div className={`form-group ${errors.login ? "error" : ""}`}>
            <label htmlFor="login">
              <span className="required">*</span> Login
            </label>
            <input
              {...register("login")}
              type="text"
              name="login"
              placeholder="Enter your login"
              className={errors.login ? "error" : ""}
            />
            {errors.login && <p className="error">{errors.login.message}</p>}
          </div>

          <div className={`form-group ${errors.password ? "error" : ""}`}>
            <label htmlFor="password">
              <span className="required">*</span> Password
            </label>
            <input
              {...register("password")}
              type="password"
              name="password"
              placeholder="Enter your password"
              className={errors.password ? "error" : ""}
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>

          <CustomButton disabled={isSubmitting} className="btn submit-btn">
            {isSubmitting ? (
              "Loading..."
            ) : (
              <>
                <span className="text-button">Sign In</span>
                <Icons.ArrowRight className="icon-button" />
              </>
            )}
          </CustomButton>
        </form>
        <p className="form-info">
          Don&apos;t have an account? <Link href="/sign-up">Sign up</Link>
        </p>
      </div>
    </>
  );
};

export default SignInForm;
