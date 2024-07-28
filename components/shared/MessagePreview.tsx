import React, { useState } from 'react';
import { Checkbox } from '../ui/checkbox';
import { Star } from 'lucide-react';

const MessagePreview = ({ message, setShowPreview, setSelectedMessage } : { message: any, setShowPreview: any, setSelectedMessage: any }) => {
  const [starClicked, setStarClicked] = useState(false);

  return (
    <>
      <div className='flex gap-3 py-4 w-full cursor-pointer'>
        <Checkbox />
        <Star onClick={() => setStarClicked(!starClicked)} className={`cursor-pointer ${starClicked && "text-yellow-500 fill-yellow-500"}`} />
        <div
          className='flex gap-3'
          onClick={() => {
          setShowPreview(false);
          setSelectedMessage(message);
        }}>
          <p className='font-bold'>{message?.from}</p>
          <p className='text-customDarkGrey font-semibold'>{message?.header}</p>
        </div>
        <div className='ml-auto'><p className='text-customDarkGrey font-semibold'>{message?.time}</p></div>
      </div>
      <div className='border-b border-black'></div>
    </>
  );
}

export default MessagePreview;
