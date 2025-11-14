"use client"

export default function CitationView({ citations }: { citations: string[] }) {
  if (!citations?.length) return null
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {citations.map((c, i) => (
        <span key={`${c}-${i}`} className="text-xs px-2 py-1 rounded-md border bg-white/40 backdrop-blur-md">
          {c}
        </span>
      ))}
    </div>
  )
}