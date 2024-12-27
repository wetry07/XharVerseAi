import React from 'react';
import { Message } from '../../types/chat';

type MessageBubbleProps = {
  message: Message;
};

export function MessageBubble({ message }: MessageBubbleProps) {
  return (
    <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[70%] rounded-lg p-3 ${
          message.sender === 'user'
            ? 'bg-indigo-600 text-white'
            : 'bg-white text-gray-900'
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}