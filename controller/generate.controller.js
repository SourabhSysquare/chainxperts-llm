const generateService = require("../services/generate.service");

const generatePromptResponse = async (req, res) => {
    var response = await generateService.generatePrompt(req.body.prompt, req.body.token)
    res.status(200).json({
        message: response,
    });
};

module.exports = {
    generatePromptResponse,
};
  