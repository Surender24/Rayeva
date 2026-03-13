import express from "express"
import dotenv from "dotenv"
import catalogRoutes from "./routes/catalog.js"
import proposalRoutes from "./routes/proposal.js"

dotenv.config()
const app = express()
app.use(express.json())
app.get("/", (req, res) => {
  res.send("Rayeva AI Assignment API is running 🚀");
});

app.use("/api/catalog", catalogRoutes)
app.use("/api/proposal", proposalRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})