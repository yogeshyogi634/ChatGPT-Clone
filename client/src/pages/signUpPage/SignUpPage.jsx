import { SignUp } from "@clerk/clerk-react";
import "./signUpPage.scss";

const SignUpPage = () => {
  return (
    <div className="signUpPage">
      <SignUp path="/sign-up" signInUrl="sign-in" />
    </div>
  );
};

export default SignUpPage;
