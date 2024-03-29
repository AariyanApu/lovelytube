import React, { useState } from 'react';
import { Error, Loader, SlideBar, SwiperBar, VideoCard } from '../components';
import { useGetVideoDetailsQuery } from '../redux/services/youtube';

function Home() {
  const [selectedItem, setSelectedItem] = useState('New');

  const videoid = selectedItem;
  const { data, isFetching, err } = useGetVideoDetailsQuery({ videoid })

  if (isFetching) return <Loader />;
  if (err) return <Error />;

  return (
    <div className="flex justify-center md:justify-start mt-4 flex-col lg:flex-row ">
      <SlideBar setSelectedItem={setSelectedItem} />
    <SwiperBar setSelectedItem={setSelectedItem} />
      <VideoCard data={data} />
    </div>
  );
}

export default Home;
