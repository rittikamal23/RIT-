import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const data = await request.json()
  console.log("[v0] Contact form submission:", data)
  return NextResponse.json({ ok: true })
}
