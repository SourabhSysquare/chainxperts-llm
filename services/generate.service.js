const endpoints = require("../endpoints/endpoints")
const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

inputPrompt = "If the user want the balance data use the following endpoint : '/fin-manager/balance-mode' and it is GET api."
inputPrompt += "If the user want the goal set by user use the following endpoint : 'fin-manager/goal' and it is GET api."

inputDesc = "Provide the endpoint and api type which I can use for :" 
const generatePrompt = async (prompt) => {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'system', content: inputPrompt }, { role: 'user', content: inputDesc + prompt }],
        model: 'gpt-3.5-turbo',
    });
    response = chatCompletion.choices[0].message.content;
    var endpointRequired = ""
    endpoints.endpoints.map((apiEnd) => {
        if(response.includes(apiEnd)) {
            endpointRequired = apiEnd;
        }
    })
    console.log(endpointRequired)
    return endpointRequired
}

module.exports = {
    generatePrompt
}