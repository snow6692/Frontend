//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

// const { Configuration, openAIApi } = require("openai");
// const configuration = new Configuration({ apikey: "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" });
// const openai = new openAIApi(configuration);

// export async function sendMsgToOpenAI(message) {
//     const res = await openai.createCompletion({
//         model: "gpt-3.5-turbo-instruct",
//         prompt: message,
//         temperature: 0.7,
//         max_tokens: 256,
//         top_p: 1.0,
//         frequency_penalty: 0.0,
//         presence_penalty: 0.0,
//         stop: ["\n"]
//     });
//     return res.data.choices[0].text;
// }

// export default Openai;