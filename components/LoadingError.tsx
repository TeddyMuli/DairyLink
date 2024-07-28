import React from 'react';
import { TriangleAlert } from 'lucide-react';

const LoadingError = () => {
  return (
    <div className='flex gap-4 p-3 bg-white text-red-500 rounded-xl w-1/2 my-4'>
      <TriangleAlert />
      <p className='font-semibold text-xl text-center'>Error loading data!</p>
    </div>
  );
}

export default LoadingError;
