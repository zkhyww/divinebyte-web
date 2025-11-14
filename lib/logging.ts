import { addLog, addModeration } from "./store"

export async function logConversation(params: { userId?: string; role: "user"|"assistant"; content: string; meta?: Record<string, unknown> }) {
  const id = Math.random().toString(36).slice(2)
  addLog({ id, ...params })
  return { ok: true, id }
}

export async function recordModeration(params: { userId?: string; messageId?: string; reason: string; details?: Record<string, unknown> }) {
  const id = Math.random().toString(36).slice(2)
  const e = addModeration({ id, ...params })
  return { ok: true, id: e.id }
}
