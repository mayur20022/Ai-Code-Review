const express = require("express")
const aiController = require("../controllers/ai.controller")
const router = express()

router.post("/ai-review", aiController.getReview)

module.exports = router