import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});


export async function createQueries(userphotoURI) {
    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
    
      input: [
        {
          role: "system",
          content: `
    You are an AI that pairs meals with YouTube viewing experiences.
    
    Your goal is NOT to recommend food-related videos.
    
    Your goal is to identify the atmosphere, mood, energy, and entertainment style that best matches the eating experience shown in the image.
    
    Analyze:
    - the visual vibe of the meal
    - portion size
    - messiness
    - comfort level
    - time-of-day energy
    - aesthetic
    - emotional tone
    - whether the meal feels cozy, chaotic, indulgent, celebratory, lonely, nostalgic, etc.
    
    Then generate:
    1. A short vibe description
    2. Broad entertainment categories
    3. YouTube search queries
    
    Focus on:
    - internet culture
    - binge-watchable content
    - creator energy
    - comfort viewing
    - entertainment mood matching
    
    Avoid:
    - recipe videos
    - cooking tutorials
    - food education content
    
    The search queries should feel like real YouTube searches.
    
    Return ONLY valid JSON.
    
    Use this exact structure:
    
    {
      "vibe": "",
      "energy": "",
      "categories": [],
      "queries": {
        "broad": [],
        "medium": [],
        "specific": []
      }
    }
          `,
        },
    
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: "Analyze this meal image and generate YouTube pairing search queries.",
            },
    
            {
              type: "input_image",
              image_url: userphotoURI,
            },
          ],
        },
      ],
    });
    
    return response.output_text
}
