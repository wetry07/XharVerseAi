import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatList from './components/ChatList';
import ChatScreen from './components/ChatScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatList />} />
        <Route path="/chat/:id" element={<ChatScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;