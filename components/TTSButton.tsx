"use client"
export default function TTSButton({ text }: { text: string }) {
  const play = async () => {
    const res = await fetch(`/api/tts?text=${encodeURIComponent(text)}`)
    if (!res.ok) return
    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const audio = new Audio(url)
    audio.play()
  }
  return <button className="btn" onClick={play}>播放语音</button>
}

