import React, { useEffect, useState } from 'react';

import Video from './Video';

function VideoCard({ data: { items }, style }) {
  const [video, setVideo] = useState(null);


  useEffect(() => {
    return ()=> setVideo(items);
  },[]);

  return (
    <div className="ml-3 ">
      <Video video={video}  />
    </div>
  );
}

export default VideoCard;
