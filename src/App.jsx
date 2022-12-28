import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navbar, VideoDetails } from './components';
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

          <Route path="/video/:id" element={<VideoDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
