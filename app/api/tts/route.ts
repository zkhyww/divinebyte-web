import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  return NextResponse.json({ error: "not_implemented" }, { status: 501 })
}
