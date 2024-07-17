"use client";
import { Search } from 'lucide-react';
import React, { useState } from 'react';

const MessageHeader = ({ selectedTab } : { selectedTab: string }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className='flex gap-4 items-center'>
      <p className='text-2xl font-semibold my-3 capitalize'>{selectedTab}</p>
      <div className='flex rounded-full py-2 px-3 bg-customLightGrey gap-2 items-center'>
        <Search className='h-4 w-4' />
        <input type="text" name='search' id='search' placeholder='Search' className='outline-none bg-customLightGrey' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
    </div>
  );
}

export default MessageHeader;
