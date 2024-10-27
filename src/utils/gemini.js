const { GoogleGenerativeAI } = require("@google/generative-ai");

export const getReults= async(prompt)=>{
    const genAI = new GoogleGenerativeAI("AIzaSyBerVVJ9xPUwgIhblF1XWy7zUlVIgVoXiQ");
    const m = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); 
    const gptResults = await m.generateContent(prompt);
    console.log("gemini",gptResults.response.text());
    return gptResults.response.text();
}   


