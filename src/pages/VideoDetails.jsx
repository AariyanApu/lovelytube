import React from 'react';
import { GoVerified } from 'react-icons/go';
import ReactPlayer from 'react-player/youtube';
import { Link, useParams } from 'react-router-dom';
import { Error, Loader } from '../components';
import {
  useGetRelatedVideoDetailsByIdQuery,
  useGetRelatedVideoDetailsQuery,
} from '../redux/services/youtube';

function VideoDetails() {
  const { id } = useParams();
  const relatedId = id;

  const { data, isFetching, err } = useGetRelatedVideoDetailsQuery({
    relatedId: relatedId,
  });
  const videoCardDAta = data;
  console.log(videoCardDAta);
  const { data: videoDetailsData } = useGetRelatedVideoDetailsByIdQuery({
    relatedId: relatedId,
  });
  if (isFetching) return <Loader />;
  if (err) return <Error />;

  return (
    <div className="flex  flex-col  lg:flex-row  justify-around p-5 mb-32">
      <div className="mb-32 lg:mb-0 aspect-video w-full">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${relatedId}`}
          controls={true}
          playing={true}
          loop={true}
          width="100%"
          height="100%"
          className="rounded-lg aspect-video"
        />

        <h1 className="text-lg lg:text-2xl pt-5 pb-2">
          {videoDetailsData?.items[0].snippet.title}
        </h1>

        <Link
          to={`/channel/${videoDetailsData?.items[0].snippet.channelId}`}
          className="text-gray-700 text-sm lg:text-base mt-1 flex gap-3"
        >
          {videoDetailsData?.items[0].snippet.channelTitle}{' '}
          <GoVerified className="mt-0.5" />
        </Link>

        {/* <p className="text-sm justify-center ">
          {videoDetailsData?.items[0].snippet.description}
        </p> */}
      </div>

      {/* <VideoCard data={videoCardDAta} dr={true} /> */}
    </div>
  );
}

export default VideoDetails;
