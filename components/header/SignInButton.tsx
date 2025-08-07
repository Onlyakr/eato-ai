"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "../ui/button";

const SignInButton = () => {
  const signIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return <Button onClick={signIn}>Sign in</Button>;
};
export default SignInButton;
