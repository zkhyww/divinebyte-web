"use client"
import CitationView from "./citation-view"
import { GlassCard } from "../components/ui/glass-card"

function parseCitations(text: string) {
  const matches = Array.from(text.matchAll(/\[([A-Za-z]+\s\d+:\d+\s[A-Z0-9-]+)\]/g))
  return matches.map((m) => m[1])
}

export function MessageBubble({ role, content }: { role: "user" | "assistant"; content: string }) {
  const citations = role === "assistant" ? parseCitations(content) : []
  const isGlass = (document?.documentElement.getAttribute("data-theme") || "glass") === "glass"
  const clsBase = "px-3 py-2 rounded-lg whitespace-pre-wrap transition-all duration-300"
  const glass = "bg-white/10 backdrop-blur-md border border-white/20"
  const userSolid = "bg-blue-600 text-white"
  const aiCls = isGlass ? glass : "bg-amber-100 text-gray-900 border"
  return (
    <div className={`mb-3 flex ${role === "user" ? "justify-end" : "justify-start"}`}>
      {role === "assistant" ? (
        <GlassCard className="max-w-[70%]">
          <div className={`${clsBase} ${aiCls}`}>{content}</div>
        </GlassCard>
      ) : (
        <div className={`${clsBase} ${userSolid} shadow-[0_0_20px_rgba(59,130,246,0.4)]`}>{content}</div>
      )}
      {role === "assistant" ? <CitationView citations={citations} /> : null}
    </div>
  )
}