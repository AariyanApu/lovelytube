import React from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { Error, Loader, VideoCard } from '../components';
import { useGetRelatedVideoDetailsQuery } from '../redux/services/youtube';

function VideoDetails() {
  const { id } = useParams();
  const relatedid = id;

  const { data, isFetching, err } = useGetRelatedVideoDetailsQuery({
    relatedid,
  });

  console.log(data);
  if (isFetching) return <Loader />;
  if (err) return <Error />;

  return (
    <div className="flex  flex-col  lg:flex-row  justify-between p-5">
      <div className="h-[45vh]  lg:h-[77vh] w-full mb-5">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          className="w-[620px] h-[320px]"
          controls={true}
          playing={true}
          loop={true}
          width="100%"
          height="100%"
        />
      </div>

      <VideoCard data={data} />
    </div>
  );
}

export default VideoDetails;
