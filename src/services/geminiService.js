import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

export const analyzeVideo = async (url) => {
  if (!API_KEY) {
    throw new Error("Gemini API Key is missing");
  }

  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

  const prompt = `
    Analyze this YouTube video URL: ${url}
    
    Please provide a structured summary of what this video is likely about based on its URL and your knowledge.
    If you cannot access the specific video content, provide a general summary of the topic implied by the context or channel if known, or a generic template response for testing purposes if the URL is invalid.
    
    Return the response in the following STRICT JSON format:
    {
      "title": "Video Title (inferred or generic)",
      "summary": "A concise summary of the video content (2-3 sentences).",
      "keyTakeaways": [
        "Key point 1",
        "Key point 2",
        "Key point 3",
        "Key point 4"
      ],
      "resources": [
        {
          "title": "Resource Title",
          "type": "Book/Tool/Course/Article",
          "link": "https://example.com",
          "description": "Brief description"
        },
        {
          "title": "Resource Title 2",
          "type": "Book/Tool/Course/Article",
          "link": "https://example.com",
          "description": "Brief description"
        },
        {
          "title": "Resource Title 3",
          "type": "Book/Tool/Course/Article",
          "link": "https://example.com",
          "description": "Brief description"
        }
      ]
    }
    
    Ensure the response is valid JSON without any markdown formatting (no \`\`\`json blocks).
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Clean up potential markdown formatting if the model adds it despite instructions
    const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();

    return JSON.parse(cleanText);
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to analyze video with Gemini.");
  }
};
