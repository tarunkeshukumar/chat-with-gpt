const {Configuration, OpenAIApi} = require("openai");

const API_KEY= "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";

const configuration = new Configuration({
    apiKey:API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function sendMessageToOpenAI(message){
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: message,
        temperature: 0.9,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    })

    return response.data.choices[0].text
}