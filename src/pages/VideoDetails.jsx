import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { Link, useParams } from 'react-router-dom';
import { Error, Loader, VideoCard } from '../components';
import {
  useGetRelatedVideoDetailsByIdQuery,
  useGetRelatedVideoDetailsQuery,
} from '../redux/services/youtube';
import { GoVerified } from 'react-icons/go';

function VideoDetails() {
  const { id } = useParams();
  const relatedid = id;

  const { data, isFetching, err } = useGetRelatedVideoDetailsQuery({
    relatedid,
  });

  const { data: videoDetailsData } = useGetRelatedVideoDetailsByIdQuery({
    relatedid,
  });

  console.log(videoDetailsData);

  if (isFetching) return <Loader />;
  if (err) return <Error />;

  return (
    <div className="flex  flex-col  lg:flex-row  justify-between p-5 ">
      <div className='mb-5'>
        <div className="h-[45vh]  lg:h-[77vh] w-full ">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="w-[620px] h-[320px] rounded-lg"
            controls={true}
            playing={true}
            loop={true}
            width="100%"
            height="100%"
          />
        </div>
                <h1 className="text-lg lg:text-2xl pt-5 pb-2">
          {videoDetailsData.items[0].snippet.title}
        </h1>

        <Link
          to={`/channel/${videoDetailsData.items[0].snippet.channelId}`}
          className="text-gray-700 text-sm lg:text-base mt-1 flex gap-3"
        >
          {videoDetailsData.items[0].snippet.channelTitle}{' '}
          <GoVerified className="mt-0.5" />
        </Link>

        {/* <p className='text-sm justify-center '>{videoDetailsData.items[0].snippet.description}</p> */}
      </div>

      <VideoCard data={data} dr={true} />
    </div>
  );
}

export default VideoDetails;
