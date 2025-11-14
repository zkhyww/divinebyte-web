import { tool_search_scripture, tool_get_user_profile, tool_update_user_profile, tool_consult_expert, tool_get_learning_plan } from "../tools/index"
import { isSensitive, complianceMessage } from "../compliance"
import { isBibleQuestion, extractCareFact, isExpertIntent, getExpertNameFromInput, isLearningIntent, getLearningTopic } from "../intent"
import { fmtAnswer } from "../format"
import { selectModel } from "./router"
import { invoke } from "./invoke"
import { logConversation } from "../logging"

export async function elaraChat(input: { question: string; version: string }) {
  const q = input.question || ""
  if (isSensitive(q)) return { answer: complianceMessage(q), citations: [] }
  const decision = selectModel(q)
  await logConversation({ role: "user", content: q })
  const profile = await tool_get_user_profile()
  const careFact = extractCareFact(q)
  if (careFact) await tool_update_user_profile({ fact: careFact })
  const verses = await tool_search_scripture({ query: q, version: input.version, limit: 5 })
  const top = verses.slice(0, 3)
  const citation = top[0]?.reference || ""
  const verseText = top[0]?.text || ""
  const care = profile.facts && profile.facts.length > 0 ? `我记得你提到过：${profile.facts[0]}。` : ""
  const formatted = fmtAnswer(citation, verseText, care)
  let answer = await invoke(decision, formatted)
  const citations = top.map(v => v.reference).filter(Boolean)
  if (isExpertIntent(q)) {
    const expert = getExpertNameFromInput(q)
    const ex = await tool_consult_expert({ expert_name: expert, query: q })
    answer = `${answer} 我咨询了我们的${expert}顾问，他的看法是："${ex.response}"。`
  }
  if (isLearningIntent(q)) {
    const topic = getLearningTopic(q)
    const plan = await tool_get_learning_plan({ topic })
    const steps = plan.steps.join("，")
    answer = `${answer} 我为你推荐一个学习路径：${plan.title}。步骤：${steps}。`
  }
  await logConversation({ role: "assistant", content: answer, meta: { citations } })
  return { answer, citations }
}
