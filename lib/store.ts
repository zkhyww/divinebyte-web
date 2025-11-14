import { ShareSnapshot, ModerationEntry, ConversationLog } from "./types.store"

const shares = new Map<string, ShareSnapshot>()
const moderations: ModerationEntry[] = []
const logs: ConversationLog[] = []

export function putShare(token: string, snap: ShareSnapshot) {
  shares.set(token, snap)
}

export function getShare(token: string): ShareSnapshot | undefined {
  return shares.get(token)
}

export function addModeration(entry: Omit<ModerationEntry, "created_at">) {
  const e: ModerationEntry = { ...entry, created_at: new Date().toISOString() }
  moderations.push(e)
  return e
}

export function listModerations(): ModerationEntry[] {
  return moderations.slice().reverse()
}

export function addLog(entry: Omit<ConversationLog, "created_at">) {
  const e: ConversationLog = { ...entry, created_at: new Date().toISOString() }
  logs.push(e)
  return e
}

export function listLogs(): ConversationLog[] {
  return logs.slice().reverse()
}

