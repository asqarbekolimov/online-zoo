import Link from "next/link";
import { Icons } from "../icons";
import CustomButton from "../ui/button";

const SignInForm = () => {
  return (
    <>
      <div className="signin-form-wrapper">
        <form className="signin-form">
          <div className="form-group">
            <label htmlFor="name">
              <span className="required">*</span> Login
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your login"
              required
              autoComplete="username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <span className="required">*</span> Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              autoComplete="current-password"
            />
          </div>

          <CustomButton className="btn submit-btn">
            <span className="text-button">Sign In</span>
            <Icons.ArrowRight className="icon-button" />
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
