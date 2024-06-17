import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error('Missing Gemini API key');
}

const genAI = new GoogleGenerativeAI(API_KEY);

export async function generateContent(topic: string, pages: number): Promise<string> {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  
    const prompt = `Generate a well-structured, informative document about "${topic}" that would fill approximately ${pages} pages. Use the following formatting:
    - Start with a main title using a single '#' at the beginning of the line
    - Use '##' for section headings
    - Use '###' for subsection headings
    - For lists, use the following format:
      - Item Name: Item description
    - Separate paragraphs with a blank line
    - Aim for about 150 words per page
    Include an introduction, several main sections with subheadings, and a conclusion.
  
    For example, when listing bicycle components, format it like this:
    - Seat: The seat for the rider.
    - Pedals: The pedals are used to propel the bicycle.
    - Chain: A metal chain that transfers power from the pedals to the rear wheel.`;
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
  
    return text;
  }