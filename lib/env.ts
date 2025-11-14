export function getEnv() {
  return {
    OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY || "",
    ELEVENLABS_API_KEY: process.env.ELEVENLABS_API_KEY || "",
    SUPABASE_URL: process.env.SUPABASE_URL || "",
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY || ""
  }
}

export function has(key: string): boolean {
  const e = getEnv() as Record<string, string>
  return !!e[key]
}

