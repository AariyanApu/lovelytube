import React from 'react';
import { categories } from '../assets/constants';

function SlideBar() {
  return (
    <div className="border-r border-red-600">
      {categories.map((item, idx) => {
        const Icon = categories[idx];
        const SlideBarIcon = Icon.icon;

        return (
          <div className="flex" key={item.name}>
            {item.name}
            <SlideBarIcon />
          </div>
        );
      })}
    </div>
  );
}

export default SlideBar;
