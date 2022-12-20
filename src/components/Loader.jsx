import React from 'react';
import { loader } from '../assets';

const Loader = () => {
  return (
    <div>
      <img src={loader} alt="loader" className='rounded-lg w-48 mx-auto mt-24 ' />
    </div>
  );
};

export default Loader;
