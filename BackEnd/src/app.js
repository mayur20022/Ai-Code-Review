const expresss = require("express")
const app = expresss()
const aiRouter = require("./route/ai.router")

app.use(expresss.json())

app.get("/", (req, res) => {
    res.send("Hello World!")
})
app.use("/ai", aiRouter)



module.exports = app