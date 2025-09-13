"use server";

import { auth } from "@/lib/auth";

export const signInUser = async (email: string, password: string) => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
    return { success: true, message: "Signed in successfully" };
  } catch (error) {
    const e = error as Error;
    return { success: false, message: e.message };
  }
};

export const signUpUser = async (
  name: string,
  email: string,
  password: string,
) => {
  try {
    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });
    return { success: true, message: "Signed up successfully" };
  } catch (error) {
    const e = error as Error;
    return { success: false, message: e.message };
  }
};

export const getSuggestions = async (prompt: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/suggestions`,
    {
      method: "POST",
      body: JSON.stringify({ prompt }),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return response.json();
};
