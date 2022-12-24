import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        {' '}
        Search
      </label>

      <div className="relative">
        <input
          className="w-[600px] h-11 p-4 pl-10 text-sm text-[#F02262] border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#F02262] focus:border-[#F02262] focus:outline-none"
          placeholder="Search ... "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          id="default-search"
          type="text"
        />

        <div className="absolute right-2.5 bottom-3 flex items-center pl-3 pointer-events-none">
          <BsSearch />
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
