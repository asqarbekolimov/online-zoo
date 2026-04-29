"use client";

import Link from "next/link";
import { Icons } from "../icons";
import CustomButton from "../ui/button";
import { useForm } from "react-hook-form";
import { RegisterFormData, registerSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const SignUpForm = () => {
  const router = useRouter();
  const { setUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      toast.loading("Signing in...");
      const res = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          login: data.login,
          password: data.password,
        }),
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
        setUser(result.data);
      }
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="signin-form-wrapper">
        <form onSubmit={handleSubmit(onSubmit)} className="signin-form">
          <div className={`form-group ${errors.name ? "error" : ""}`}>
            <label htmlFor="name">
              <span className="required">*</span> Name
            </label>
            <input
              {...register("name")}
              type="text"
              name="name"
              placeholder="Enter your name"
              className={errors.name ? "error" : ""}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>
          <div className={`form-group ${errors.email ? "error" : ""}`}>
            <label htmlFor="email">
              <span className="required">*</span> Email
            </label>
            <input
              {...register("email")}
              type="text"
              name="email"
              placeholder="Enter your email"
              className={errors.email ? "error" : ""}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
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
          <div
            className={`form-group ${errors.confirmPassword ? "error" : ""}`}
          >
            <label htmlFor="confirmPassword">
              <span className="required">*</span> Confirm Password
            </label>
            <input
              {...register("confirmPassword")}
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className={errors.confirmPassword ? "error" : ""}
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword.message}</p>
            )}
          </div>

          <CustomButton className="btn submit-btn">
            {isSubmitting ? (
              "Loading..."
            ) : (
              <>
                <span className="text-button">Sign Up</span>
                <Icons.ArrowRight className="icon-button" />
              </>
            )}
          </CustomButton>
        </form>
        <p className="form-info">
          Already have an account? <Link href="/sign-in">Sign in</Link>
        </p>
      </div>
    </>
  );
};

export default SignUpForm;
