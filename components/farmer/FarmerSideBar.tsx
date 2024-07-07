"use client";

import React from 'react';
import { farmerLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const FarmerSideBar = () => {
  const pathname = usePathname();
  const handleSignOut = async () => {
    try {
      const response = await fetch('/api/signout', {
        method: 'POST',
      });
      const result = await response.json();
      console.log("Logout: ", result)
      if (result.error) {
        console.log('Error signing out:', result.error);
        return;
      }
      toast.success('Logged out');
      useRouter().push('/');
    } catch (error) {
      console.log('Error:', error);
    }
  }

  return (
    <div className='bg-white p-4 w-[17%] flex flex-col gap-6 pt-8'>
      <p className='text-center text-4xl font-semibold cursor-pointer'>Dairy<span className='text-green-500'>Link</span></p>
      <div className='flex flex-col gap-4'>
        {farmerLinks.map((link, index) => {
          return (
            <Link key={index} href={link.path} className={`flex gap-2 items-center text-lg hover:bg-green-500 hover:text-white p-3 rounded-3xl font-medium transition-all duration-200 ${link.path === pathname && "text-white bg-green-500"}`}>
              <link.icon className="" />
              {link.name}
            </Link>
          )
        })}
        <button
          onClick={handleSignOut}
          className='p-3 bg-green-600 text-xl text-white font-semibold rounded-full'
        >Signout</button>
      </div>
    </div>
  );
}

export default FarmerSideBar;
