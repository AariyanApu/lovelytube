import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navbar, VideoCard } from './components';
import { Home } from './pages';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="px-5 py-4">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/song" element={<VideoCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
