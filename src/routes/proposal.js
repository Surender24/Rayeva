import express from "express"
import { generateProposal } from "../services/proposalService.js"

const router = express.Router()

router.post("/generate", async (req,res)=>{
  try{
    const data = await generateProposal(req.body)
    res.json(data)
  }catch(e){
    res.status(500).json({error:e.message})
  }
})

export default router