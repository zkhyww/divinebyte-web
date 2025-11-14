import { NextRequest } from "next/server"
import { orchestrateChat } from "../../../lib/ai/divinebyte"

export async function POST(req: NextRequest) {
  const body = await req.json()
  const userId = body?.userId
  const message = body?.message
  if (!userId || typeof message !== "string" || message.length < 1) {
    return new Response(JSON.stringify({ error: "Invalid request body" }), { status: 400, headers: { "Content-Type": "application/json" } })
  }
  const result = await orchestrateChat([{ role: "user", content: message }])
  return result.toAIStreamResponse()
}
