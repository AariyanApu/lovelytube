import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <motion.div whileTap={{ scale: 0.9, transition: { duration: 0.6 } }}>
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
            className=" w-28 h-8 sm:w-48 md:w-72 lg:w-[600px] lg:h-11  p-4 md:pl-10 text-sm text-[#F02262] border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#F02262] focus:border-[#F02262] focus:outline-none"
            placeholder="Search ... "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            id="default-search"
            type="text"
          />

          <button
            type="submit"
            className="absolute right-2.5 bottom-2 md:bottom-3 pr-2  "
          >
            <BsSearch />
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default SearchBar;
