/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import Video from './Video';

function VideoCard({ data: { items }, dr }) {
  const [video, setVideo] = useState(null);
  useEffect(() => {
    return setVideo(items);
  }, []);
  console.log(items);
  return (
    <div className='ml-3 '>
      <div
        className={`flex flex-wrap justify-center items-center justify-items-center gap-4  lg:justify-start flex-col ${
          !dr && 'md:flex-row'
        }  `}
      >
        <Video video={video} />
      </div>
    </div>
  );
}

export default VideoCard;
