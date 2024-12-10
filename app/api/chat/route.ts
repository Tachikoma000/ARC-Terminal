import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY, // Note: not NEXT_PUBLIC_
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const chatCompletion = await groq.chat.completions.create({
      messages,
      model: "llama3-8b-8192",
      temperature: 0.9,
      max_tokens: 1024,
      top_p: 1,
      stream: true,
    });

    // Return the response with the correct headers for streaming
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of chatCompletion) {
          const text = chunk.choices[0]?.delta?.content || '';
          controller.enqueue(text);
        }
        controller.close();
      },
    });

    return new NextResponse(stream, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Error processing your request' }, { status: 500 });
  }
}