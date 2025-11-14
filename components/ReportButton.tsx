"use client"
export default function ReportButton({ messageId }: { messageId?: string }) {
  const report = async () => {
    await fetch("/api/moderation", { method: "POST", body: JSON.stringify({ messageId, reason: "不准确" }) })
  }
  return <button className="btn" onClick={report}>举报/纠错</button>
}

