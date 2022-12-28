import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';

function Video({ video }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start flex-col md:flex-row">
      {video?.map((item, idx) => (
        <div className="flex" key={idx}>
          <div className="rounded-lg shadow-lg bg-white w-[320px] ">
            <Link
              to={`/video/${item?.id.videoId}`}
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <LazyLoadImage
                className="rounded-t-lg w-[360px] h-[200px]"
                src={item?.snippet?.thumbnails?.high?.url}
                alt="Video Thumbnails"
                effect="blur"
              />
            </Link>

            <div className="p-5 flex flex-col">
              <Link
                to={`/video/${item?.id.videoId}`}
                className="text-gray-900 text-base font-medium mb-2"
              >
                {item?.snippet.title.slice(0, 60)}
                ...
              </Link>
              <Link
                to={`/channel/${item.snippet.channelId}`}
                className="text-gray-700 text-xs mt-1"
              >
                {item?.snippet.channelTitle}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Video;
