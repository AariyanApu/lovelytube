import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';

function VideoCard({ data: { items }, direction }) {
  const [video, setVideo] = useState(null);



  useEffect(() => {
    return () => setVideo(items);
  }, []);


  console.log(video)

  return (
    <div className="ml-3 ">


<h1> hello</h1>
{video?.map((item)=>(<h1>{item.snippet.title}</h1>))}

      {/* <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className={`flex flex-wrap justify-center gap-3  lg:justify-start ${direction} `}>
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
      </motion.div> */}
    </div>
  );
}

export default VideoCard;
