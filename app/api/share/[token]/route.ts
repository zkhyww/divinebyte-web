import { NextResponse } from "next/server"
import { getShare } from "../../../../lib/store"

export async function GET(_: Request, { params }: { params: { token: string } }) {
  const snap = getShare(params.token)
  if (!snap) return NextResponse.json({ error: "not_found" }, { status: 404 })
  return NextResponse.json(snap)
}

