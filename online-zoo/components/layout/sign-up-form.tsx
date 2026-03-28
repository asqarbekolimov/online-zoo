import Link from "next/link";
import { Icons } from "../icons";
import CustomButton from "../ui/button";

const SignUpForm = () => {
  return (
    <>
      <div className="signin-form-wrapper">
        <form className="signin-form">
          <div className="form-group">
            <label htmlFor="name">
              <span className="required">*</span> Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="login">
              <span className="required">*</span> Email
            </label>
            <input
              type="text"
              name="login"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="login">
              <span className="required">*</span> Login
            </label>
            <input
              type="text"
              name="login"
              placeholder="Enter your login"
              required
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
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">
              <span className="required">*</span> Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              required
            />
          </div>

          <CustomButton className="btn submit-btn">
            <span className="text-button">Sign Up</span>
            <Icons.ArrowRight className="icon-button" />
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
