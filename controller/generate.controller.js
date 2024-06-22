const generateService = require("../services/generate.service");

const generatePromptResponse = async (req, res) => {
    console.log(req.body.prompt)
    var response = await generateService.generatePrompt(req.body.prompt)
    res.status(200).json({
        message: response,
    });
};

module.exports = {
    generatePromptResponse,
};
  