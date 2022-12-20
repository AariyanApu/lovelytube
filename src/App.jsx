import React from 'react';
import { SongCard } from './components';
import { Home } from './pages';

function App() {
  return (
    <div className="bg-gray-400">
      App
      <Home />
      <SongCard />
    </div>
  );
}

export default App;
