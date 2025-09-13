export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const prompt = searchParams.get("prompt");
  const response = await fetch(
    `${process.env.OPENAI_API_URL}/v1/chat/completions`,
    {
      method: "POST",
      body: JSON.stringify({ prompt }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    },
  );
  return response;
};
