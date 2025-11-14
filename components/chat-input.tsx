"use client"
import { FormEvent } from "react"
import { GlassCard } from "../components/ui/glass-card"

export function ChatInput({ input, handleInputChange, handleSubmit, isLoading }: { input: string; handleInputChange: (e: any) => void; handleSubmit: (e: FormEvent) => void; isLoading: boolean }) {
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl p-4 flex gap-2 border-t fixed bottom-0 left-1/2 -translate-x-1/2 bg-transparent">
      <GlassCard className="flex-1">
        <div className="flex items-center gap-2 px-3 py-2 rounded-2xl">
          <input className="flex-1 bg-transparent outline-none" value={input} onChange={handleInputChange} placeholder="输入你的问题..." />
          <button className="px-4 py-2 rounded-xl bg-blue-600 text-white active:scale-95 transition-transform disabled:opacity-60" type="submit" disabled={isLoading}>发送</button>
        </div>
      </GlassCard>
    </form>
  )
}