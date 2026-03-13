import { openai } from "../openai.js"

export async function generateProposal(input){
  const prompt = `Client needs sustainable products within budget ${input.budget}.
Products:${JSON.stringify(input.products)}
Return JSON with product_mix, budget_allocation, cost_breakdown, impact_summary`

  const response = await openai.chat.completions.create({
    model:"deepseek-chat",
    messages:[{role:"user",content:prompt}],
    response_format:{type:"json_object"}
  })

  return JSON.parse(response.choices[0].message.content)
}