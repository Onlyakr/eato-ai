import SignInForm from "@/components/auth/SignInForm";
import Logo from "@/components/header/Logo";

const SignInPage = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-8 px-4 py-2 md:px-8">
      <Logo />
      <SignInForm />
    </div>
  );
};

export default SignInPage;
