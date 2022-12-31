import React from 'react';
import { useParams } from 'react-router-dom';
import { Error, Loader, VideoCard } from '../components';
import { useGetVideoDetailsQuery } from '../redux/services/youtube';

const SearchFeed = () => {
  const { id } = useParams();
  const videoid = id;

  const { data, isFetching, err } = useGetVideoDetailsQuery({ videoid });
  if (isFetching) return <Loader />;
  if (err) return <Error />;
  return (
    <div className="flex justify-center md:justify-start mt-4 ">
      <VideoCard data={data} />
    </div>
  );
};

export default SearchFeed;
