import { openai } from "../openai.js"

export async function generateCatalogTags(input){
  const prompt = `Product: ${JSON.stringify(input)}
Return JSON with primary_category, sub_category, seo_tags, sustainability_filters`

  const response = await openai.chat.completions.create({
    model:"deepseek-chat",
    messages:[{role:"user",content:prompt}],
    response_format:{type:"json_object"}
  })

  return JSON.parse(response.choices[0].message.content)
}