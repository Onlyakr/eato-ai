"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

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

  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: -2 }}
      whileTap={{ scale: 0.8, rotate: 2 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="cursor-pointer"
    >
      <Button onClick={signOut}>Sign out</Button>
    </motion.div>
  );
};

export default SignOutButton;
