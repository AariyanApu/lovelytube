import React from 'react';
import { logo } from '../assets';
import SearchBar from './SearchBar';

function Navbar() {
  return (
    <div className="flex flex-wrap justify-between">
      <div className="flex justify-between">
        {' '}
        <img
          src={logo}
          alt="logo of lovely tube"
          className="rounded-lg md:w-[50px] md:h-[30px] mt-1"
        />
        <h2 className="text-3xl ml-1 font-bold ] "> Lovelytube </h2>
      </div>
      <SearchBar />
    </div>
  );
}

export default Navbar;
