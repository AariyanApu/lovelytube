/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import React from 'react';
import { GoVerified } from 'react-icons/go';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';

const Video = ({ video }) => {
  return (
    <>
      {video?.map((item, idx) => (
        <motion.div
          whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}
          className="flex"
          key={idx}
        >
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
                className="text-gray-900  text-base font-normal mb-2"
              >
                {item?.snippet?.title.slice(0, 50)}
                ...
              </Link>
              <Link
                to={`/channel/${item.snippet.channelId}`}
                className="text-gray-700 text-xs mt-1 flex gap-3"
              >
                {item?.snippet.channelTitle} <GoVerified className="mt-0.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Video;
