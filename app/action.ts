"use server";

import { auth } from "@/lib/auth";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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
  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error("Server misconfigured: missing OPENAI_API_KEY");
    }

    if (typeof prompt !== "string" || !prompt.trim()) {
      throw new Error("Invalid request: 'prompt' is required");
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful chef assistant." },
        {
          role: "user",
          content: `Suggest 3 dishes based on: ${prompt}.
          Return JSON with format:
          [
            { "name": "Dish name", "description": "Short description", "ingredients": ["item1","item2"], "cuisine": "cuisine", "spiciness": "spiciness", "diet": "diet" }
          ]`,
        },
      ],
      response_format: { type: "json_object" },
    });

    const jsonString = completion.choices[0].message.content;
    const dishes = JSON.parse(jsonString || "[]");

    return { dishes };
  } catch (error) {
    const e = error as Error;
    throw new Error(e.message || "Something went wrong");
  }
};
