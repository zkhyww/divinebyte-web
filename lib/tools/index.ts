import { Verse } from "../types"
import * as supabaseTools from "./supabase"
import { getCache, setCache } from "../cache"

export async function tool_search_scripture(params: { query: string; version: string; limit?: number }): Promise<Verse[]> {
  const key = `scripture:${params.version}:${params.query}`
  const cached = getCache<Verse[]>(key)
  if (cached) return cached
  const res = await supabaseTools.search_scripture(params)
  setCache(key, res)
  return res
}

export async function tool_get_user_profile() {
  return supabaseTools.get_user_profile()
}

export async function tool_update_user_profile(params: { fact: string }) {
  return supabaseTools.update_user_profile(params)
}

export async function tool_get_learning_plan(params: { topic: string }) {
  return supabaseTools.get_learning_plan(params)
}

export async function tool_consult_expert(params: { expert_name: string; query: string }) {
  return supabaseTools.consult_expert(params)
}
