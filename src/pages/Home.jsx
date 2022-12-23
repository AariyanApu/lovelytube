import React from 'react';
import { Loader, Navbar } from '../components';
import { useGetVideoDetailsQuery } from '../redux/services/youtube';

function Home() {
  const videoid = 'music';
  const { data, isFetching, err } = useGetVideoDetailsQuery({ videoid });

  if (isFetching) return <Loader />;

  return (
    <div className="md:px-5 md:py-4">
      <Navbar />
    </div>
  );
}

export default Home;
