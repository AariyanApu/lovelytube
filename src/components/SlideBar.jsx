import React from 'react';
import { categories } from '../assets/constants';

function SlideBar() {
  return (
    <div className="border-r border-gray-200 hidden lg:block">
      {categories?.map((item, idx) => {
        const Icon = categories[idx];
        const SlideBarIcon = Icon.icon;
        const handleClick = () => {};

        return (
          <div className="w-[150px] mr-2 flex gap-1 py-1.5 px-4 hover:bg-gray-100 hover:text-red-600 rounded-lg">
            <button onClick={handleClick} className="" type="button">
              {item.name}
            </button>
            <SlideBarIcon className="mt-1" />
          </div>
        );
      })}
    </div>
  );
}

export default SlideBar;
