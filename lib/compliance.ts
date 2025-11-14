import data from "../../config/sensitive-topics.json"

export function isSensitive(input: string): boolean {
  const q = input.toLowerCase()
  return (data.blocked || []).some((t: string) => q.includes(t.toLowerCase()))
}

export function complianceMessage(topic: string): string {
  return `我的设计是为了在信仰和圣经智慧上提供指引。关于${topic}的专业问题，我建议您咨询相关的专业人士。`
}

