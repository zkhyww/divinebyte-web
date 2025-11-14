"use client"
import { useState } from "react"
import Quote from "./Quote"
import ShareButton from "./ShareButton"
import TTSButton from "./TTSButton"

export default function Chat() {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [citations, setCitations] = useState<string[]>([])
  const [messageId, setMessageId] = useState<string>("")
  const genId = () => Math.random().toString(36).slice(2)
  const ask = async () => {
    setMessageId(genId())
    const res = await fetch("/api/chat", { method: "POST", body: JSON.stringify({ question, version: "WEB" }) })
    const data = await res.json()
    setAnswer(data.answer || "")
    setCitations(Array.isArray(data.citations) ? data.citations : [])
  }
  return (
    <div>
      <div className="row">
        <input value={question} onChange={e => setQuestion(e.target.value)} className="bubble" placeholder="请输入问题" />
        <button onClick={ask} className="btn">发送</button>
      </div>
      <div className="bubble" style={{ marginTop: 8 }}>{answer}</div>
      <div className="row" style={{ marginTop: 8 }}>
        <ShareButton answer={answer} citations={citations} />
        <TTSButton text={answer} />
      </div>
      <div className="row" style={{ marginTop: 8 }}>
        {citations.map(c => (
          <Quote key={c} text="" reference={c} />
        ))}
      </div>
      {citations.map(c => (
        <Quote key={c} text="" reference={c} />
      ))}
    </div>
  )
}
