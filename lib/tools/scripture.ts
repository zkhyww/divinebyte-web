import { supabase } from "../supabase/client"

export type SearchParams = { query: string; bible_version: string }
export type ScriptureItem = { reference: string; text: string }

function buildTsQuery(q: string): string {
  const tokens = q.replace(/[^\w\s]/g, " ").trim().split(/\s+/).filter(Boolean)
  if (!tokens.length) return ""
  return tokens.map((t) => `${t}:*`).join(" & ")
}

export async function searchScripture(params: SearchParams): Promise<ScriptureItem[]> {
  const tsq = buildTsQuery(params.query)
  if (!tsq) return []
  const esc = tsq.replace(/'/g, "''")
  const sel = `version,book,chapter,verse,text,rank:ts_rank_cd(text_search_vector, to_tsquery('english', '${esc}'))`
  const { data, error } = await supabase
    .from("scriptures")
    .select(sel)
    .eq("version", params.bible_version)
    .order("rank", { ascending: false })
    .limit(5)
  if (error) throw new Error(error.message)
  return (data ?? []).map((row: any) => ({ reference: `${row.book} ${row.chapter}:${row.verse} ${row.version}`, text: row.text }))
}
