import { Metadata } from "next";
import { SignUpForm } from "@/components/layout";

export const metadata: Metadata = {
  title: "Online Zoo - Sign Up",
  description:
    "Explore the wonders of the animal kingdom from the comfort of your home with Online Zoo. Discover fascinating facts, watch live streams, and support wildlife conservation efforts worldwide.",
};

const SignUpPage = () => {
  return (
    <div className="sign-in">
      <div className="sign-in_info">
        <h2 className="heading-2">Sign In</h2>
        <p>Sign in to access your account and enjoy our services.</p>
      </div>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
