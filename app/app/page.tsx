import React from 'react';
import FarmerSideBar from '@/components/FarmerSideBar';
import Image from 'next/image';

const Page = () => {
  return (
    <div className='flex container p-4'>
      <div className='mr-auto'><FarmerSideBar /></div>

      <div>
        Dashboard
      </div>
      
      <div className='ml-auto cursor-pointer'>
        <Image
          src="/assets/blank-profile.jpg"
          width={56}
          height={56}
          alt='blank profile'
        />
      </div>
    </div>
  );
}

export default Page;
