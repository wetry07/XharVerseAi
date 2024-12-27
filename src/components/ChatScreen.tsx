import React from 'react';
import { useParams } from 'react-router-dom';
import { characters } from '../config/characters';
import { ChatHeader } from './chat/ChatHeader';
import { MessageBubble } from './chat/MessageBubble';
import { ChatInput } from './chat/ChatInput';
import { useChat } from '../hooks/useChat';

export default function ChatScreen() {
  const { id } = useParams();
  const character = characters[id as keyof typeof characters];
  const { messages, newMessage, setNewMessage, isLoading, sendMessage } = useChat(character.id);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendMessage(newMessage);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <ChatHeader character={character} />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <MessageBubble key={index} message={message} />
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white text-gray-500 rounded-lg p-3">
              Typing...
            </div>
          </div>
        )}
      </div>

      <ChatInput
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        handleSend={handleSend}
        isLoading={isLoading}
      />
    </div>
  );
}