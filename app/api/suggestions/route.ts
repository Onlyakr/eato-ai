import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "Server misconfigured: missing OPENAI_API_KEY" },
        { status: 500 },
      );
    }

    if (typeof prompt !== "string" || !prompt.trim()) {
      return NextResponse.json(
        { error: "Invalid request: 'prompt' is required" },
        { status: 400 },
      );
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
      response_format: { type: "json_object" }, // ensures valid JSON in gpt-4o-mini
    });

    const jsonString = completion.choices[0].message.content;
    const dishes = JSON.parse(jsonString || "[]");

    return NextResponse.json({ dishes }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
