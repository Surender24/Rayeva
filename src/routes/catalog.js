import express from "express"
import { generateCatalogTags } from "../services/catalogService.js"

const router = express.Router()

router.post("/generate", async (req,res)=>{
  try{
    const data = await generateCatalogTags(req.body)
    res.json(data)
  }catch(e){
    res.status(500).json({error:e.message})
  }
})

export default router