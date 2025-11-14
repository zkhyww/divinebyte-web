const bibleKeywords = ["圣经", "经文", "饶恕", "祷告", "恩典", "信心", "保罗", "大卫"]
const stressKeywords = ["压力", "焦虑", "难过", "失眠", "沮丧"]

export function isBibleQuestion(input: string): boolean {
  const q = input.toLowerCase()
  return bibleKeywords.some(k => q.includes(k.toLowerCase()))
}

export function extractCareFact(input: string): string | null {
  const q = input.toLowerCase()
  if (stressKeywords.some(k => q.includes(k.toLowerCase()))) return "用户因工作压力而焦虑"
  return null
}

export function isExpertIntent(input: string): boolean {
  const q = input.toLowerCase()
  return q.includes("保罗") || q.includes("大卫") || q.includes("专家")
}

export function getExpertNameFromInput(input: string): string {
  const q = input.toLowerCase()
  if (q.includes("保罗")) return "paul"
  if (q.includes("大卫")) return "david"
  return "paul"
}

export function isLearningIntent(input: string): boolean {
  const q = input.toLowerCase()
  return q.includes("学习") || q.includes("课程") || q.includes("路径")
}

export function getLearningTopic(input: string): string {
  const q = input.toLowerCase()
  if (q.includes("祷告")) return "祷告"
  if (q.includes("恩典")) return "恩典"
  if (q.includes("信心")) return "信心"
  return "圣经入门"
}
