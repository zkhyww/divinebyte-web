const m = new Map<string, unknown>()

export function getCache<T>(key: string): T | undefined {
  return m.get(key) as T | undefined
}

export function setCache(key: string, value: unknown): void {
  m.set(key, value)
}

