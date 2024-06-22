const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const generatePrompt = async (prompt) => {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'gpt-3.5-turbo',
    });
    response = chatCompletion.choices[0].message.content;
    return response
}

module.exports = {
    generatePrompt
}