import { NextResponse } from "next/server"
import { get_user_profile, update_user_profile } from "../../../lib/tools/supabase"

export async function GET() {
  const profile = await get_user_profile()
  return NextResponse.json(profile)
}

export async function POST(req: Request) {
  const body = await req.json()
  const fact = typeof body?.fact === "string" ? body.fact : ""
  const updated = await update_user_profile({ fact })
  return NextResponse.json(updated)
}

