import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Character } from '../../types/chat';

type ChatHeaderProps = {
  character: Character;
};

export function ChatHeader({ character }: ChatHeaderProps) {
  return (
    <div className="bg-indigo-600 p-4 flex items-center gap-4">
      <Link to="/" className="text-white">
        <ArrowLeft className="w-6 h-6" />
      </Link>
      <img
        src={character.avatar}
        alt={character.name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <h1 className="text-xl font-semibold text-white">{character.name}</h1>
    </div>
  );
}