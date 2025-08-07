"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const SignOutButton = () => {
  const router = useRouter();

  const signOut = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/signin");
          },
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return <Button onClick={signOut}>Sign out</Button>;
};

export default SignOutButton;
