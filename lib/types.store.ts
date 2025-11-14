export type ShareSnapshot = { answer: string; citations: string[] }
export type ModerationEntry = { id: string; userId?: string; messageId?: string; reason: string; details?: Record<string, unknown>; created_at: string }
export type ConversationLog = { id: string; userId?: string; role: "user"|"assistant"; content: string; meta?: Record<string, unknown>; created_at: string }

