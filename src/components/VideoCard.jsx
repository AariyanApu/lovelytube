import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import Video from './Video';

function VideoCard({ data: { items }, direction }) {
  const [video, setVideo] = useState(null);
  console.log(video);
  useEffect(() => {
    return () => setVideo(items);
  }, []);

  console.log(video);

  return (
    <div className="ml-3 ">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div
          className={`flex flex-wrap justify-center gap-3  lg:justify-start ${direction} `}
        >
          <Video video={video} />
        </div>
      </motion.div>
    </div>
  );
}

export default VideoCard;
