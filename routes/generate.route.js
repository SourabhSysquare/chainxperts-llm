
const express = require("express");
const router = express.Router();
const generate = require("../controller/generate.controller");

router.post("/prompt", generate.generatePromptResponse);
router.post("/history", generate.promptHistory);


module.exports = router;
