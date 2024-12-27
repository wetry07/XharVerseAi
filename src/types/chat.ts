export type Message = {
  text: string;
  sender: 'user' | 'character';
};

export type Character = {
  id: string;
  name: string;
  avatar: string;
  systemPrompt: string;
  lastMessage: string;
};