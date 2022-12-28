import React from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';

function VideoDetails() {
  const { id } = useParams();

  return (
    <div className="">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        controls={true}
        playing={true}
        loop={true}
        playIcon
        width="640px"
        height="360px"
      />
    </div>
  );
}

export default VideoDetails;
