import React, { useState } from 'react';

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
        {/* <button
          type="submit"
          className="text-white absolute right-2.5 bottom-1 bg-[#F02262] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 "
        >
          Search
        </button> */}
        <div class="absolute right-2.5 bottom-3 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
