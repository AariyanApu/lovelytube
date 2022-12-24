import React from 'react';
import { Loader, SlideBar } from '../components';
import { useGetVideoDetailsQuery } from '../redux/services/youtube';

function Home() {
  const videoid = 'music';
  const { data, isFetching, err } = useGetVideoDetailsQuery({ videoid });

  if (isFetching) return <Loader />;

  return (
    <div className="md:px-5 md:py-4">
      <SlideBar />
    </div>
  );
}

export default Home;
