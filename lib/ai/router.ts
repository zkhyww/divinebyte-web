type PoolModel = { model: string; priority: number; timeout_ms?: number }
type RoutingConfig = {
  routing_strategy: string
  pools: Record<string, PoolModel[]>
  rules: { intent: string; pool: string }[]
  global_fallback_pool: string
}

const defaultConfig: RoutingConfig = {
  routing_strategy: "priority_failover",
  pools: {
    standard: [
      { model: "deepseek/deepseek-chat-v3.1:free", priority: 1, timeout_ms: 8000 },
      { model: "z-ai/glm-4.5-air:free", priority: 2, timeout_ms: 8000 },
      { model: "openai/gpt-4o-mini", priority: 3, timeout_ms: 8000 }
    ],
    expert: [
      { model: "google/gemini-2.5-flash", priority: 1, timeout_ms: 10000 },
      { model: "moonshotai/kimi-k2:free", priority: 2, timeout_ms: 10000 }
    ],
    fallback: [
      { model: "openai/gpt-4o-mini", priority: 1, timeout_ms: 8000 },
      { model: "nvidia/nemotron-nano-12b-v2-vl:free", priority: 2, timeout_ms: 8000 }
    ]
  },
  rules: [
    { intent: "standard_query", pool: "standard" },
    { intent: "expert_consultation", pool: "expert" }
  ],
  global_fallback_pool: "fallback"
}

export async function routeModel(intent: string): Promise<{ model: string }> {
  const rule = defaultConfig.rules.find((r) => r.intent === intent) ?? defaultConfig.rules[0]
  const poolName = rule.pool
  const pool = (defaultConfig.pools[poolName] ?? []).slice().sort((a, b) => a.priority - b.priority)
  const selected = pool[0] ?? defaultConfig.pools[defaultConfig.global_fallback_pool][0]
  return { model: selected.model }
}
