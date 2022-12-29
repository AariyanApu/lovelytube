import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navbar, VideoDetails } from './components';
import { Home, SearchPage } from './pages';

function App() {
  return (
    <div className="md:p-4 pt-4">
      <BrowserRouter>
        <div className="px-5 py-4">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/search/:id" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
