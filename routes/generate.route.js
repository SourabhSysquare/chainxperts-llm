
const express = require("express");
const router = express.Router();
const generate = require("../controller/generate.controller");

router.post("/prompt", generate.generatePromptResponse);


module.exports = router;
