import { NextResponse } from "next/server"
import { putShare } from "../../../lib/store"

function token(): string {
  return Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)
}

export async function POST(req: Request) {
  const body = await req.json()
  const t = token()
  const url = `/share/${t}`
  const snap = { answer: body?.answer || "", citations: body?.citations || [] }
  putShare(t, snap)
  return NextResponse.json({ ok: true, url, token: t })
}
