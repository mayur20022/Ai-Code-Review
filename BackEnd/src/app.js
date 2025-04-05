const expresss = require("express")
const app = expresss()
const aiRouter = require("./route/ai.router")
const cors = require("cors")


app.use(expresss.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello World!")
})
app.use("/ai", aiRouter)



module.exports = app