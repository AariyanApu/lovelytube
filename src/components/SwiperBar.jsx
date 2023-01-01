// Import Swiper styles
import React from 'react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';

import { Swiper, SwiperSlide } from 'swiper/react';
import { categories } from '../assets/constants';

const SwiperBar = ({ setSelectedItem }) => {
  const handleClick = (e) => {
    setSelectedItem(e.target.value);
  };
  return (
    <div className="lg:hidden block p-3">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="w-full h-auto"
      >
        {categories?.map((item) => (
          <SwiperSlide
            key={item?.name}
            className=" text-center text-sm flex justify-center justify-items-center py-0.5 border border-gray-200  hover:bg-gray-100 hover:text-red-600 rounded-lg "
          >
            <button
              onClick={handleClick}
              className="w-full h-auto"
              type="button"
              value={item?.name}
            >
              {item?.name.slice(0,9)}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperBar;
