import React, { useState } from 'react';
import { Checkbox } from '../ui/checkbox';
import { Star } from 'lucide-react';

const MessageComponent = () => {
  const [starClicked, setStarClicked] = useState(false);

  return (
    <div>
      <div className='flex gap-3 py-4 w-full'>
        <Checkbox />
        <Star onClick={() => setStarClicked(!starClicked)} className={`cursor-pointer ${starClicked && "text-yellow-500 fill-yellow-500"}`} />
        <p className='font-bold'>Teddy Muli</p>
        <p className='text-customDarkGrey font-semibold'>This is the subject of the message</p>
        <div className='ml-auto'><p className='text-customDarkGrey font-semibold'>8: 38 a.m</p></div>
      </div>
      <div className='border-b border-black'></div>
    </div>
  );
}

export default MessageComponent;
