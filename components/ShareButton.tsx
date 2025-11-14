"use client"
export default function ShareButton({ answer, citations }: { answer: string; citations: string[] }) {
  const share = async () => {
    const res = await fetch("/api/share", { method: "POST", body: JSON.stringify({ answer, citations }) })
    const data = await res.json()
    if (data?.url) navigator.clipboard.writeText(location.origin + data.url)
  }
  return <button className="btn" onClick={share}>一键分享</button>
}

