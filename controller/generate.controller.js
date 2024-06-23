const generateService = require("../services/generate.service");

const generatePromptResponse = async (req, res) => {
    var response = await generateService.generatePrompt(req.body.prompt, req.body.token)
    res.status(200).json({
        data: response.data,
        topic: response.topic
    });
};

const promptHistory = async (req, res) => {
    
    var response = await generateService.promptHistory(req.body.token)
    res.status(200).json({
        data: response.data
    });
};

module.exports = {
    generatePromptResponse,
    promptHistory
};
  