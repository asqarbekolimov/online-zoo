import { SignInForm } from "@/components/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Zoo - Sign In",
  description:
    "Explore the wonders of the animal kingdom from the comfort of your home with Online Zoo. Discover fascinating facts, watch live streams, and support wildlife conservation efforts worldwide.",
};

const SignInPage = () => {
  return (
    <div className="sign-in">
      <div className="sign-in_info">
        <h2 className="heading-2">Sign In</h2>
        <p>Sign in to access your account and enjoy our services.</p>
      </div>
      <SignInForm />
    </div>
  );
};

export default SignInPage;
