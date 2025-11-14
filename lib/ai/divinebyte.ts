import { streamText } from "ai"
import { openrouter } from "@openrouter/ai-sdk-provider"
import { searchScripture } from "../tools/scripture"

type Msg = { role: "user" | "ai"; content: string }

function buildPrompt(question: string, citations: { reference: string; text: string }[]) {
  const lines = citations.map((c) => `- [${c.reference}] ${c.text}`)
  return [
    `用户问题：${question}`,
    `经文参考：`,
    ...lines,
    `请严格依据上述经文，用简洁中文回答，并在每个引用句末保留标准化引用格式如 [John 1:1 KJV]。`
  ].join("\n")
}

export async function orchestrateChat(messages: Msg[]) {
  const last = [...messages].reverse().find((m) => m.role === "user")
  const q = last ? last.content : ""
  const verses = await searchScripture({ query: q, bible_version: "KJV" })
  const prompt = buildPrompt(q, verses)
  const result = await streamText({ model: openrouter("deepseek/deepseek-chat-v3.1:free"), prompt })
  return result
}
