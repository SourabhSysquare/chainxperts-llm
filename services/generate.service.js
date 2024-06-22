const endpoints = require("../endpoints/endpoints")
const OpenAI = require('openai');
const axios = require('axios')

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

inputPrompt = ""

endpoints.apiConfig.map((api) => {
    inputPrompt += `If the user wants his ${api.name} (${api.desc}) use the following endpoint : '${api.endpoints}'. \n`
})


inputDesc = "Provide the endpoint and api type which I can use for :" 

inputTopic = "Provide a suitable topic for the given question asked by user in 2-3 words, Topic: "
const generatePrompt = async (prompt, bearerToken) => {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'system', content: inputPrompt }, { role: 'user', content: inputDesc + prompt }],
        model: 'gpt-3.5-turbo',
    });

    const topicCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: inputTopic + prompt }],
        model: 'gpt-3.5-turbo',
    });

    response = chatCompletion.choices[0].message.content;
    var endpointRequired = ""
    endpoints.apiConfig.map((apiEnd) => {
        if(response.includes(apiEnd.endpoints)) {
            endpointRequired = apiEnd.endpoints;
        }
    })
    console.log(endpointRequired)

    const config = {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      };
    if(endpointRequired == ""){
        return  {}
    }
    
    const res =  await axios.get(process.env.SERVER_ENDPOINT + endpointRequired, config);
    return {topic: topicCompletion.choices[0].message.content, data: res.data}
}

module.exports = {
    generatePrompt
}