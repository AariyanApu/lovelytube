import React from 'react';
import { useGetVideoDetailsQuery } from '../redux/services/youtube';

const Home = () => {
  const videoid = 'music';
  const { data, isFetching, err } = useGetVideoDetailsQuery({ videoid });

  console.log(data);

  return <div>Home</div>;
};

export default Home;
