import { RoutingDecision } from "../types"
import { SYSTEM_PROMPT } from "../prompt"
import { getEnv } from "../env"

async function callOpenRouter(model: string, content: string): Promise<string> {
  const env = getEnv()
  if (!env.OPENROUTER_API_KEY) return content
  const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content }
      ]
    })
  })
  if (!r.ok) return content
  const data = await r.json()
  const text = data?.choices?.[0]?.message?.content || content
  return text
}

export async function invoke(decision: RoutingDecision, prompt: string): Promise<string> {
  const primary = decision.primary
  if (primary.provider === "openrouter") {
    try {
      const res = await callOpenRouter(primary.model, prompt)
      if (res) return res
    } catch {}
    for (const fb of decision.fallbacks) {
      if (fb.provider !== "openrouter") continue
      try {
        const res = await callOpenRouter(fb.model, prompt)
        if (res) return res
      } catch {}
    }
  }
  return prompt
}
