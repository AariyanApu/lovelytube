import { motion } from 'framer-motion';
import React from 'react';
import { categories } from '../assets/constants';
import Footer from './Footer';

function SlideBar({ setSelectedItem }) {
  const handleClick = (e) => {
    setSelectedItem(e.target.value);
  };
  return (
    <div className="border-r border-gray-200 hidden lg:block ">
      {categories?.map((item, idx) => {
        const Icon = categories[idx];
        const SlideBarIcon = Icon.icon;

        return (
          <div className="mr-2" key={idx}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-[160px] mr-2 flex gap-1 py-1.5 px-4 hover:bg-gray-100 hover:text-red-600 rounded-lg"
              >
                <SlideBarIcon className="text-xl mr-1" />
                <button
                  onClick={handleClick}
                  className="text-base "
                  type="button"
                  value={item.name}
                >
                  {item.name}
                </button>
              </motion.div>
            </motion.div>
          </div>
        );
      })}
      <Footer />
    </div>
  );
}

export default SlideBar;
