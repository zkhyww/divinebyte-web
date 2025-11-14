import { NextResponse } from "next/server"
import { listModerations } from "../../../lib/store"

export async function GET() {
  return NextResponse.json({ items: listModerations() })
}

