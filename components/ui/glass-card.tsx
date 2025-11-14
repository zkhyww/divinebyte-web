// apps/web/components/ui/glass-card.tsx
import React from "react"

export const GlassCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`relative rounded-2xl p-px ${className || ""}`}>
      <div className="absolute inset-0 rounded-2xl bg-conic-gradient opacity-80 blur-md" />
      <div className="relative h-full rounded-[15px] bg-black/40 backdrop-blur-xl">
        {children}
      </div>
    </div>
  )
}