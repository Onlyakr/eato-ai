import SignUpForm from "@/components/auth/SignUpForm";
import Logo from "@/components/header/Logo";

const SignUpPage = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-8 px-4 py-2 md:px-8">
      <Logo />
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
