"use client";

import { Plus } from 'lucide-react';
import React, { useState } from 'react';
import Event from "./Event";
import BigCalender from './BigCalender';
import { ScrollArea } from '../ui/scroll-area';
import CreateEvent from './CreateEvent';

const Calender = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className='flex gap-4'>
      {modalOpen && <CreateEvent />}
      <div className='w-[30%] bg-white p-3 rounded-xl'>
        <div onClick={() => setModalOpen(!modalOpen)} className='flex gap-2 text-white cursor-pointer w-full text-lg p-3 bg-green-500 rounded-lg justify-center items-center font-medium mb-4'>
          <Plus />
          <p>Add new event</p>
        </div>
        <ScrollArea className='h-[100vh]'>
          <p className='font-bold text-xl mb-8'>You are going to</p>
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
        </ScrollArea>
      </div>
      <div className='w-[70%] bg-white p-3 rounded-xl'>
        <BigCalender />
      </div>
    </div>
  );
}

export default Calender;
