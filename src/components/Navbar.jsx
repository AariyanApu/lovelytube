import { motion } from 'framer-motion';
import React from 'react';
import { logo } from '../assets';
import SearchBar from './SearchBar';

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="flex flex-wrap justify-between"
    >
      {/* For logo and title */}

      <div className="flex ">
        <img
          src={logo}
          alt="logo of lovely tube"
          className="rounded-lg w-12 h-8 lg:w-[50px] lg:h-[30px] md:w-[40px] md:h-[25px] md:mt-1"
        />
        <h2 className=" text-2xl md:text-3xl ml-1 font-bold "> Lovelytube </h2>
      </div>

      {/* for Searchbar */}

      <SearchBar />
    </motion.nav>
  );
}

export default Navbar;
