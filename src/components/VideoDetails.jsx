import React from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';

function VideoDetails() {
  const { id } = useParams();

  return (
    <div className="h-48 w-80">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        controls={true}
        playing={true}
        loop={true}
        playIcon
      />
    </div>
  );
}

export default VideoDetails;
