import React from 'react';

const Event = () => {
  return (
    <div className='py-4'>
      <div className='flex gap-4 pb-4'>
        <div className='h-10 w-10 rounded-full bg-black'>
        </div>

        <div>
          <p className='text-lg font-semibold'>Design Conference</p>
          <p className='text-lg text-customDarkGrey font-medium'>Today 4:15 p.m</p>
          <p className='text-lg text-customDarkGrey font-medium'>Ndenderu</p>
        </div>
      </div>
      <div className='border-b border-customDarkGrey'></div>
    </div>
  );
}

export default Event;
