"use client";

import React from 'react';
import { farmerLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const FarmerSideBar = () => {
  const pathname = usePathname();

  return (
    <div className='bg-customDarkGrey p-4 w-[17%] flex justify-center pt-8'>
      <div className='flex flex-col gap-4'>
        {farmerLinks.map((link, index) => {
          return (
            <Link key={index} href={link.path} className={`text-white text-lg hover:bg-white hover:text-customDark active:bg-white p-3 rounded-3xl transition-all duration-200 ${link.path === pathname && "text-customDark bg-white"}`}>
              {link.name}
            </Link>
          )
        })}
      </div>
    </div>
  );
}

export default FarmerSideBar;
