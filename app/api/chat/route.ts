import { NextRequest } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "edge";

const SYSTEM_PROMPT = `You are a helpful EU visa guidance assistant for MoveTo.Life. You help users understand visa requirements, documents, and timelines for Portugal, Spain, and Greece digital nomad visas.

Key facts you know:
- Portugal D8 Digital Nomad Visa: requires €3,680/mo income (solo), €5,520 (with partner), €6,624 (partner + child). Processing: 6–9 months total.
- Spain Digital Nomad Visa: requires €2,646/mo (200% of Spain's SMI). Processing: 30–90 days at consulate.
- Greece Digital Nomad Visa: requires €3,500/mo. Processing: ~10 business days (fastest in EU).

You are NOT a lawyer and do not provide legal advice. You give guidance, not legal opinions.

Always end responses about complex or individual-specific situations with: "For your specific situation, we recommend consulting a licensed immigration attorney."

Keep answers clear, direct, and under 200 words unless the user explicitly asks for more detail.
Do not use excessive formatting — keep responses conversational and helpful.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "your_gemini_api_key_here") {
      return new Response(
        "AI assistant is not configured yet. Please check visa requirements at the official consulate websites for Portugal, Spain, or Greece.",
        { status: 200, headers: { "Content-Type": "text/plain" } }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_PROMPT,
    });

    // Convert messages to Gemini format
    // Gemini uses "user" and "model" roles (not "assistant")
    const history = messages.slice(0, -1).map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const lastMessage = messages[messages.length - 1];

    const chat = model.startChat({ history });
    const result = await chat.sendMessageStream(lastMessage.content);

    const encoder = new TextEncoder();
    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result.stream) {
            const text = chunk.text();
            if (text) {
              controller.enqueue(encoder.encode(text));
            }
          }
          controller.close();
        } catch (e) {
          controller.error(e);
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response("Sorry, I encountered an error. Please try again.", {
      status: 500,
    });
  }
}