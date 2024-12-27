import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { characters } from '../config/characters';

export default function ChatList() {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <div className="border-b p-4 bg-indigo-600">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <MessageSquare className="w-6 h-6" />
          Character Verse AI
        </h1>
      </div>
      <div className="divide-y">
        {Object.values(characters).map((character) => (
          <Link
            key={character.id}
            to={`/chat/${character.id}`}
            className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors"
          >
            <img
              src={character.avatar}
              alt={character.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h2 className="font-semibold text-gray-900">{character.name}</h2>
              <p className="text-sm text-gray-500">{character.lastMessage}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}