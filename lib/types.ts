export type Verse = { version: string; book: string; chapter: number; verse: number; text: string; reference: string }
export type Citation = { reference: string; text: string }
export type Profile = { facts: string[]; preferences?: Record<string, unknown>; last_seen_at?: string }
export type LearningPlan = { slug: string; title: string; steps: string[] }
export type ExpertResponse = { expert_name: string; response: string }
export type ChatResult = { answer: string; citations: string[] }
export type ModelSpec = { provider: string; model: string; temperature?: number; max_tokens?: number }
export type RoutingDecision = { primary: ModelSpec; fallbacks: ModelSpec[]; reason: string }
