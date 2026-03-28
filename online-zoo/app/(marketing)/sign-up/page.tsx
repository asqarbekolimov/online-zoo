import { SignUpForm } from "@/components/layout";
import React from "react";

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
