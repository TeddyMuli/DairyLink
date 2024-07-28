import MessageComponent from '@/components/shared/EmailComponent';
import React from 'react';

const Page = () => {
  return (
    <div className='flex flex-col gap-4'>
      <p className='text-3xl font-bold w-full'>Complaints</p>
      <MessageComponent />
    </div>
  );
}

export default Page;
