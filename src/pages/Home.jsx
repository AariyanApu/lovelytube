import React, { useState } from 'react';
import { Error, Loader, SlideBar, VideoCard } from '../components';
import { useGetVideoDetailsQuery } from '../redux/services/youtube';

function Home() {
  const [selectedItem, setSelectedItem] = useState('Bangla Music');

  const videoid = selectedItem;
  const { data, isFetching, err } = useGetVideoDetailsQuery({ videoid });

  if (isFetching) return <Loader />;
  if (err) return <Error />;

  return (
    <div className="flex justify-center md:justify-start mt-4 ">
      <SlideBar setSelectedItem={setSelectedItem} />
      <VideoCard data={data} />
    </div>
  );
}

export default Home;
