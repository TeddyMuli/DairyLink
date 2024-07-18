"use client";

import React from 'react';
import { farmerLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const FarmerSideBar = () => {
  const router = useRouter();
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
      router.push('/auth/login');
      toast.success('Logged out');
    } catch (error) {
      console.log('Error:', error);
    }
  }

  return (
    <div className='bg-white pr-4 py-4 flex flex-col gap-6'>
      <div className='flex flex-col gap-4'>
        {farmerLinks.map((link, index) => {
          return (
            <div key={index} className={`flex items-center gap-2`}>
              <div className={`border-l border-4 border-green-500 h-8 rounded-lg opacity-0 ${pathname === link.path && "opacity-100"}`}></div>
              <Link key={index} href={link.path} className={`flex gap-2 items-center text-lg hover:bg-green-500 hover:text-white p-3 rounded-3xl font-medium transition-all duration-200 ${link.path === pathname && "text-white bg-green-500"}`}>
                <link.icon className="" />
                {link.name}
              </Link>
            </div>
          )
        })}
        <button
          onClick={handleSignOut}
          className='p-3 ml-1 bg-green-600 text-xl text-white font-semibold rounded-full'
        >Signout</button>
      </div>
    </div>
  );
}

export default FarmerSideBar;
