import React from 'react';
import { Loader } from '../components';
import { useGetVideoDetailsQuery } from '../redux/services/youtube';

const Home = () => {
  const videoid = 'music';
  const { data, isFetching, err } = useGetVideoDetailsQuery({ videoid });

  console.log(data);
  if (isFetching) return <Loader />;

  return <div>Home</div>;
};

export default Home;
