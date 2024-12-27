import React from 'react';
import { Send } from 'lucide-react';

type ChatInputProps = {
  newMessage: string;
  setNewMessage: (message: string) => void;
  handleSend: (e: React.FormEvent) => void;
  isLoading: boolean;
};

export function ChatInput({ newMessage, setNewMessage, handleSend, isLoading }: ChatInputProps) {
  return (
    <form onSubmit={handleSend} className="p-4 bg-white border-t">
      <div className="flex gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-indigo-500"
          disabled={isLoading}
        />
        <button
          type="submit"
          className={`rounded-full p-2 ${
            isLoading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700'
          } text-white`}
          disabled={isLoading}
        >
          <Send className="w-6 h-6" />
        </button>
      </div>
    </form>
  );
}