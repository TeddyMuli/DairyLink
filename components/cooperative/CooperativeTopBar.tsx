"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Bell, Circle, Search } from "lucide-react";

const FarmerTopBar = ({ user }: {user: any}) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleProfileClick = (e: any) => {
    e.preventDefault();
    router.push("/app/profile")
  }

  return (
      <div onClick={handleProfileClick} className='flex bg-white p-3 w-full px-8'>
        <div className='flex items-center gap-4 justify-between'>
          <div className='bg-customLightGrey rounded-full py-2 px-3 flex gap-2'>
            <Search />
            <input type="text" id='search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} name='search' placeholder='Search' className='bg-customLightGrey outline-none' />
          </div>
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
