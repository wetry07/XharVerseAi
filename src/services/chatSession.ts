import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai';
import { genAI, generationConfig } from './geminiConfig';
import { characterPrompts } from './characterPrompts';

export class ChatSession {
  private model: GenerativeModel;
  private history: { role: string; parts: { text: string }[] }[];

  constructor(characterId: string) {
    const { rolePlay, style } = characterPrompts[characterId as keyof typeof characterPrompts];
    
    this.model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
    });
    
    this.history = [{
      role: "user",
      parts: [{ text: `${rolePlay}\n\nStyle guide: ${style}` }]
    }];
  }

  async sendMessage(message: string): Promise<string> {
    try {
      // Add user message to history
      this.history.push({
        role: "user",
        parts: [{ text: message }]
      });

      const chat = this.model.startChat({
        history: this.history,
        generationConfig,
      });

      const result = await chat.sendMessage(message);
      const response = result.response.text();
      
      // Add AI response to history
      this.history.push({
        role: "model",
        parts: [{ text: response }]
      });

      return response;
    } catch (error) {
      console.error('Error sending message:', error);
      return "Sorry, I couldn't process that message right now.";
    }
  }
}