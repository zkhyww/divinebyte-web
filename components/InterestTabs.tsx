"use client"
const tabs = ["我来寻求平安", "我想学习圣经", "我只是好奇"]
export default function InterestTabs() {
  return (
    <div className="tabs">
      {tabs.map(t => (
        <button key={t} className="btn" onClick={async () => {
          await fetch("/api/profile", { method: "POST", body: JSON.stringify({ fact: `兴趣:${t}` }) })
        }}>{t}</button>
      ))}
    </div>
  )
}
