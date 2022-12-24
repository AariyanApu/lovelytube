import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navbar, SongCard } from './components';
import { Home } from './pages';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="md:px-5 md:py-4">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/song" element={<SongCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
