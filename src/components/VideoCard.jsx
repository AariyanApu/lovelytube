import React, { useEffect, useState } from 'react';
import Video from './Video';

const VideoCard = ({ data }) => {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    setVideo(data.items);
  });

  return (
    <div className="ml-4">
      <Video video={video} />
    </div>
  );
};

export default VideoCard;
