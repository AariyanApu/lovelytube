import React from 'react';
import { demoThumbnailUrl } from '../assets/constants';

function Video({ video }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start ">
      {video?.map((item, idx) => (
        <div className="flex" key={idx}>
          <div className="rounded-lg shadow-lg bg-white w-[320px] ">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                className="rounded-t-lg w-[320px] h-[180px]"
                src={item?.snippet?.thumbnails.high.url || demoThumbnailUrl}
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-base font-medium mb-2">
                {item?.snippet.title.slice(0, 55)}
                ...
              </h5>
              <p className="text-gray-700 text-sm mb-4">
                Some quick example text to build
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Video;
