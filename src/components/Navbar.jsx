import { motion } from 'framer-motion';
import React from 'react';
import { logo } from '../assets';
import { navVariants } from '../utils/motion';
import SearchBar from './SearchBar';

function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="flex flex-wrap justify-between"
    >
      <div className="flex justify-between">
        {' '}
        <img
          src={logo}
          alt="logo of lovely tube"
          className="rounded-lg w-[50px] h-[30px] mt-1"
        />
        <h2 className="text-3xl ml-1 font-bold ] "> Lovelytube </h2>
      </div>
      <SearchBar />
    </motion.nav>
  );
}

export default Navbar;
