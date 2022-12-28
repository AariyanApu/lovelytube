import React from 'react';
import { Error, Loader, SlideBar, VideoCard } from '../components';
import { useGetVideoDetailsQuery } from '../redux/services/youtube';

function Home() {
  const videoid = 'music';
  const { data, isFetching, err } = useGetVideoDetailsQuery({ videoid });

  if (isFetching) return <Loader />;
  if (err) return <Error />;

  return (
    <div className="flex justify-center md:justify-start ">
      <SlideBar />
      <VideoCard data={data} />
    </div>
  );
}

export default Home;
