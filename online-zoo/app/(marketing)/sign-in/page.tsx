import { SignInForm } from "@/components/layout";

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
