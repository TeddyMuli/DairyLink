"use client";

import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import { IoMdNotifications } from "react-icons/io";
import { Circle } from "lucide-react";

const FarmerTopBar = ({ user }: {user: any}) => {
  const router = useRouter();

  const handleProfileClick = (e: any) => {
    e.preventDefault();
    router.push("/app/profile")
  }

  return (
      <div onClick={handleProfileClick} className='flex justify-between bg-customDarkGrey border-b border-white/60 p-3 w-full px-4'>
        <p className='text-center text-4xl font-semibold'>Dairy<span className='text-green-500'>Link</span></p>
        <div className='flex gap-4 justify-center items-center'>
          <div className='flex'>
            <IoMdNotifications className='text-white w-8 h-8 -mr-3' />
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
            <p>{user?.user_metadata?.full_name}</p>
          </div>
        </div>
      </div>
  );
}

export default FarmerTopBar;
