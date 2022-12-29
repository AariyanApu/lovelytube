import { motion } from 'framer-motion';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';

function Video({ video }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="flex flex-wrap justify-center md:ml-48 lg:ml-0 gap-3  lg:justify-start flex-col lg:flex-row">
        {video?.map((item, idx) => (
          <motion.div whileHover={{ scale: 1.05 }} className="flex" key={idx}>
            <div className="rounded-lg shadow-lg bg-white w-[320px]  ">
              <Link to={`/video/${item?.id.videoId}`}>
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
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Video;
