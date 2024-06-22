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

    // Prase endpoint
    var endpointRequired = ""

    endpoints.apiConfig.map((apiEnd) => {
        if (response.includes(apiEnd.endpoints)) {
            endpointRequired = apiEnd.endpoints;
        }
    })

    //Save History  
    const data = {
        prompt: prompt,
        title: topicCompletion.choices[0].message.content,
        content: endpointRequired
    };

    const headers = {
        Authorization: `Bearer ${bearerToken}`,
        'Content-Type': 'application/json'
    };

    await axios.put(process.env.SERVER_ENDPOINT + "/fin-manager/search-history", data, { headers })

    // if no api recieved
    if (endpointRequired == "") {
        return { topic: "No Related Data found", data: [] }
    }

    //Get API Response
    const config = {
        headers: {
            Authorization: `Bearer ${bearerToken}`,
        },
    };

    const res = await axios.get(process.env.SERVER_ENDPOINT + endpointRequired, config);

    return { topic: topicCompletion.choices[0].message.content, data: res.data }
}

module.exports = {
    generatePrompt
}