import { GoogleGenerativeAI } from '@google/generative-ai';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export const generationConfig = {
  temperature: 0.9,
  topP: 1,
  topK: 40,
  maxOutputTokens: 2048,
};