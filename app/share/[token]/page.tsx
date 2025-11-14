async function fetchSnap(token: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/share/${token}`, { cache: "no-store" })
  if (!res.ok) return null
  return res.json()
}

export default async function Page({ params }: { params: { token: string } }) {
  const snap = await fetchSnap(params.token)
  if (!snap) return <div className="container">未找到分享内容</div>
  return (
    <div className="container">
      <h2>分享内容</h2>
      <div className="bubble" style={{ marginTop: 8 }}>{snap.answer}</div>
      <div className="row" style={{ marginTop: 8 }}>
        {(snap.citations || []).map((c: string) => (
          <div key={c} className="bubble">{c}</div>
        ))}
      </div>
    </div>
  )
}

