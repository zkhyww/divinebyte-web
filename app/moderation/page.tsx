async function fetchList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/moderation/list`, { cache: "no-store" })
  if (!res.ok) return []
  const data = await res.json()
  return data.items || []
}

export default async function Page() {
  const items = await fetchList()
  return (
    <div className="container">
      <h2>审核列表</h2>
      {items.map((it: any) => (
        <div key={it.id} className="bubble">
          <div>原因：{it.reason}</div>
          <div style={{ fontSize: 12, color: "#666" }}>时间：{it.created_at}</div>
        </div>
      ))}
    </div>
  )
}

