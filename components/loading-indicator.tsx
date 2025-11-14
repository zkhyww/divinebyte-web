"use client"

export function LoadingIndicator() {
  return (
    <div className="flex items-center gap-1">
      <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 animate-pulse" />
      <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 animate-pulse" style={{ animationDelay: "100ms" }} />
      <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 animate-pulse" style={{ animationDelay: "200ms" }} />
    </div>
  )
}