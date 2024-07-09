import Calender from '@/components/shared/Calender';
import React from 'react';

const Page = () => {
  return (
    <div className='flex flex-col gap-4'>
      <p className='text-3xl font-bold w-full'>Calender</p>
      <Calender />
    </div>
  );
}

export default Page;
