export default function Quote({ text, reference }: { text: string; reference: string }) {
  return (
    <div className="bubble">
      <div>{text}</div>
      <div style={{ fontSize: 12, color: "#666" }}>{reference}</div>
    </div>
  )
}

