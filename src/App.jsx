import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Footer, Navbar } from './components';
import { Home, SearchFeed, VideoDetails } from './pages';

function App() {
  return (
    <div className="md:p-4 pt-4 mx-auto max-w-screen-3xl">
      <BrowserRouter>
        <div className="px-5 py-4">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/search/:id" element={<SearchFeed />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
