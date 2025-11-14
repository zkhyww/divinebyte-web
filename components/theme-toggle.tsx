"use client"
import { useEffect, useState } from "react"

type Theme = "glass" | "parchment"

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("glass")
  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme) || "glass"
    setTheme(saved)
    document.documentElement.setAttribute("data-theme", saved)
  }, [])
  const toggle = () => {
    const next: Theme = theme === "glass" ? "parchment" : "glass"
    setTheme(next)
    localStorage.setItem("theme", next)
    document.documentElement.setAttribute("data-theme", next)
  }
  return (
    <button onClick={toggle} className="px-3 py-2 rounded-full border shadow-sm bg-white/30 backdrop-blur-md">
      {theme === "glass" ? "🌞 琉璃光影" : "🌙 素雅书卷"}
    </button>
  )
}