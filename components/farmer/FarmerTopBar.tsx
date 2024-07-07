"use client";

import Image from 'next/image';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Bell, Circle } from "lucide-react";
import { farmerLinks } from '@/constants';

const FarmerTopBar = ({ user }: {user: any}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleProfileClick = (e: any) => {
    e.preventDefault();
    router.push("/app/profile")
  }

  return (
      <div onClick={handleProfileClick} className='flex bg-customLightGrey p-3 w-full px-8 py-8'>
        <div className='flex items-center gap-4 justify-between'>
          <>
            {farmerLinks.map((link, index) => (
              <p key={index} className='text-2xl font-bold'>{(link.path === pathname) && link.name}</p>
            ))}
          </>
          <div className='ml-auto'>Calender</div>
        </div>
        <div className='flex gap-4 justify-center items-center ml-auto'>
          <div className='flex'>
            <Bell onClick={() => router.push("/notifications")} className='w-8 h-8 -mr-3 cursor-pointer' />
            <Circle className='h-3 w-3 text-green-500 fill-green-500' />
          </div>
          <div className='flex justify-center items-center gap-3 cursor-pointer'>
            <Image
              src={user?.user_metadata?.picture || "/assets/blank-profile.svg"}
              width={40}
              height={40}
              alt='blank profile'
              className='rounded-full'
            />
            <p className='font-semibold'>{user?.user_metadata?.full_name || "Username"}</p>
          </div>
        </div>
      </div>
  );
}

export default FarmerTopBar;
