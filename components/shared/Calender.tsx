"use client";

import { Plus } from 'lucide-react';
import React from 'react';
import Event from "@/components/shared/Event";

const Calender = () => {
  return (
    <div className='flex gap-4'>
      <div className='w-[30%] bg-white p-3 rounded-xl'>
        <div className='flex gap-2 text-white cursor-pointer w-full text-lg p-3 bg-green-500 rounded-lg justify-center items-center font-medium mb-4'>
          <Plus />
          <p>Add new event</p>
        </div>
        <div>
          <p className='font-bold text-xl mb-8'>You are going to</p>
          <Event />
        </div>
      </div>
      <div className='w-[70%] bg-white p-3 rounded-xl'>
        Calender
      </div>
    </div>
  );
}

export default Calender;
