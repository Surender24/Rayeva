export async function generateProposal(input){
  return {
    product_mix: [
      "bamboo toothbrush",
      "recycled notebook",
      "steel water bottle"
    ],
    budget_allocation: {
      toothbrush: 1500,
      notebook: 1500,
      bottle: 2000
    },
    cost_breakdown: {
      total: input.budget
    },
    impact_summary:
      "Switching to sustainable products reduces plastic waste and promotes reusable materials."
  }
}