import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { SongCard } from './components';
import { Home } from './pages';

function App() {
  return (
    <div className="bg-gray-400">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/song" element={<SongCard />} />
      </Routes>
    </div>
  );
}

export default App;
