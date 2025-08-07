import { Button } from "@/components/ui/button";
import SignInButton from "@/components/header/SignInButton";

const SignInPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1>Sign in</h1>
      <SignInButton />

      <div className="flex gap-2">
        <Button variant="outline">Sign in</Button>
        <Button variant="destructive">Sign in</Button>
        <Button variant="link">Sign in</Button>
        <Button variant="ghost">Sign in</Button>
      </div>
    </div>
  );
};

export default SignInPage;
