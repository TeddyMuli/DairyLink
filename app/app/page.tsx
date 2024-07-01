import React from 'react';
import Image from 'next/image';
import FarmerSideBar from '@/components/farmer/FarmerSideBar';
import FarmerTopBar from '@/components/farmer/FarmerTopBar';

const Page = () => {
  return (
    <div className='flex container p-4'>
      <div><FarmerTopBar /></div>
      <div className='mr-auto'><FarmerSideBar /></div>
      <div>Dashboard</div>
      
    </div>
  );
}

export default Page;
