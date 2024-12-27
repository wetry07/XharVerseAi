import { useState, useEffect } from 'react';
import { Message } from '../types/chat';
import { chatManager } from '../services/chatManager';

export function useChat(characterId: string) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Clear chat history when character changes
  useEffect(() => {
    setMessages([]);
    chatManager.clearSession(characterId);
  }, [characterId]);

  const sendMessage = async (message: string) => {
    if (!message.trim() || isLoading) return;

    setNewMessage('');
    setMessages(prev => [...prev, { text: message, sender: 'user' }]);
    setIsLoading(true);

    try {
      const chatSession = chatManager.getSession(characterId);
      const response = await chatSession.sendMessage(message);
      setMessages(prev => [...prev, { text: response, sender: 'character' }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        text: "Sorry, I couldn't process that message right now.", 
        sender: 'character' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    newMessage,
    setNewMessage,
    isLoading,
    sendMessage,
  };
}