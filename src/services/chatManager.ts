import { ChatSession } from './chatSession';

class ChatManager {
  private sessions: Map<string, ChatSession> = new Map();

  getSession(characterId: string): ChatSession {
    if (!this.sessions.has(characterId)) {
      this.sessions.set(characterId, new ChatSession(characterId));
    }
    return this.sessions.get(characterId)!;
  }

  clearSession(characterId: string): void {
    this.sessions.delete(characterId);
  }
}

export const chatManager = new ChatManager();